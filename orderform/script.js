const prices = {
    '3ml': 5,
    '6ml': 10,
    '10ml': 15,
    '12ml': 18,
    '30ml': 25,
    '50ml': 40,
    '100ml': 70
};

let order = [];

function addItem() {
    const size = document.getElementById('size').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const description = document.getElementById('description').value;

    const item = {
        size,
        quantity,
        price: prices[size] * quantity,
        description,
    };

    order.push(item);
    updateOrderSummary();
}

function updateOrderSummary() {
    const summaryDiv = document.getElementById('order-summary');
    summaryDiv.innerHTML = '';

    let totalCost = 0;
    order.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.quantity} x ${item.size} -- $${item.price.toFixed(2)} --(${item.description})`;
        summaryDiv.appendChild(itemDiv);

        totalCost += item.price;
    });

    document.getElementById('total-cost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}

function checkout() {
    if (order.length === 0) {
        alert('Please add items to your order.');
        return;
    }

    const uniqueOrderNumber = 'JNK' + Date.now();
    alert('Thank you for your order! Your order number is ' + uniqueOrderNumber);

    // Here you would typically send the order to your server for processing and payment
    // For this example, we'll just clear the order

    order = [];
    updateOrderSummary();
}