document.addEventListener('DOMContentLoaded', function() {
    // Array to store the list items
    let todoList = [];

    // Form submission event
    document.getElementById('todoForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input value
        const todoInput = document.getElementById('todoInput').value;

        // Add the new item to the array
        todoList.push(todoInput);

        // Update the display
        updateTodoList();

        // Clear the input field
        document.getElementById('todoForm').reset();
    });

    // Function to update the list display
    function updateTodoList() {
        const todoListElement = document.getElementById('todoList');
        todoListElement.innerHTML = ''; // Clear the list

        todoList.forEach((item, index) => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = item;
            li.appendChild(span);

            // Create a remove button for each item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                // Remove item from the array
                todoList.splice(index, 1);
                // Update the list display
                updateTodoList();
            });
            li.appendChild(removeButton);

            todoListElement.appendChild(li);
        });
    }
});
