console.log("Hello World");

document.getElementById('form').addEventListener('submit', function (event) {
    // Prevent form submission to allow validation or further actions if needed
    event.preventDefault();
    window.location.href = 'success.html';
});
