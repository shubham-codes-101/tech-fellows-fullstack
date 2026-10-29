
console.log("Personal Profile Page loaded successfully!");

const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", function () {
    message.textContent =
        "Welcome! I am learning HTML, CSS, and JavaScript!";
});
