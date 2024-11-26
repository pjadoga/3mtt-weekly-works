// document.addEventListener('DOMContentLoaded', function() {

  


    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        console.log(name);
        console.log(email);

        // Display the form data on the webpage
        var formDataDiv = document.getElementById('formData');
        formDataDiv.innerHTML = '<h2>Form Data</h2>';
        formDataDiv.innerHTML += '<p><strong>Name:</strong> ' + name + '</p>';
        formDataDiv.innerHTML += '<p><strong>Email:</strong> ' + email + '</p>';

        // Clear the form fields
        document.getElementById('contactForm').reset();
    });

    document.getElementById('revealButton').addEventListener('click', function() {
        var message = document.getElementById('hiddenMessage');
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden');
            this.textContent = 'Click to hide the message';
        } else {
            message.classList.add('hidden');
            this.textContent = 'Click to reveal a message';
        }
    });
// });