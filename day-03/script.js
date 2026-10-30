
console.log("Day 03 Portfolio Page Loaded Successfully!");

const messageButton = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageButton.addEventListener("click", function () {
    message.textContent = "Hello! Thanks for visiting my portfolio. Keep learning and growing!";
});
