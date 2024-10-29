var number = Math.floor(Math.random() * 100) + 1;
var display = document.getElementById("display");
console.log(number);

function tryNumber() {
    var guess = parseInt(document.getElementById("guess").value);
    var difference = Math.abs(number - guess);

    if (number === guess) {
        display.style.color = "red";
        display.innerHTML = "Bingo! You got the right number.";
    } else if (difference <= 25) {
        display.style.color = "green";
        display.innerHTML = number > guess
            ? "Very close! Your guess is a little bit low !"
            : "Very close! Your guess is a little bit high !"
    } else {
        display.style.color = "purple";
        display.innerHTML = number > guess
            ? "Your guess is lower than our number, guess again!"
            : "Your guess is higher than our number, guess again!";
    }
}
