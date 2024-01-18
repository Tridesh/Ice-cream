const noButton = document.querySelector(".no");
const textchange = document.querySelector(".change");
const yesButton = document.querySelector(".yes");
function moveButton() {
    ranPositionLeft = Math.random() * 50;
    ranPositionTop = Math.random() * 50;
    noButton.style.left = ranPositionLeft + "%";
    noButton.style.top = ranPositionTop + "%";
}
function textRenew() {
    textchange.textContent = "Let me know the time and date!!";
    noButton.style.visibility = "hidden";
    yesButton.style.visibility = "hidden";
}
noButton.addEventListener('click', moveButton);
yesButton.addEventListener('click', textRenew);

// Run the code in a loop every, for example, 3 seconds
//setInterval(moveButton, 3000); // Adjust the interval time as needed
