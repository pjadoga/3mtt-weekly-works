document.addEventListener('DOMContentLoaded', function() {
    // Product array
    let products = [];

    // Form submission event
    document.getElementById('productForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        const productName = document.getElementById('productName').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);

        // Create a product object
        const product = {
            name: productName,
            price: productPrice
        };

        // Add product to the array
        products.push(product);

        // Update the product list
        updateProductList();

        // Reset the form
        document.getElementById('productForm').reset();
    });

    // Function to update the product list
    function updateProductList() {
        const productList = document.getElementById('productList');
        productList.innerHTML = ''; // Clear the list

        products.forEach((product, index) => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            productList.appendChild(li);

            // Create a remove button for each product
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                // Remove product from the array
                products.splice(index, 1);
                // Update the product list
                updateProductList();
            });
            li.appendChild(removeButton);
        });
    }

    // Asynchronous feature: Simulate fetching initial products from a server
    async function fetchInitialProducts() {
        // Simulating a delay with a promise
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Sample initial products
        const initialProducts = [
            { name: 'Sample Product 1', price: 10.00 },
            { name: 'Sample Product 2', price: 20.00 }
        ];

        products = initialProducts;
        updateProductList();
    }

    // Fetch initial products when the page loads
    fetchInitialProducts();
});
