document.addEventListener('DOMContentLoaded', function() {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts'; // Sample API URL
    const dataContainer = document.getElementById('dataContainer');

    // Fetch data using Promises
    function fetchDataWithPromises() {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                displayData(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    // Fetch data using async/await
    async function fetchDataWithAsyncAwait() {
        try {
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    // Display data in the DOM
    function displayData(data) {
        dataContainer.innerHTML = ''; // Clear previous data
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('data-item');
            div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
            dataContainer.appendChild(div);
        });
    }

    // Choose which method to use here
     fetchDataWithPromises();
    // fetchDataWithAsyncAwait();
});
