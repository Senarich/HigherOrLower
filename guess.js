let displayText = document.getElementById("display");
let play = document.getElementById("btn");
let restart = document.getElementById("btn1");
let container = document.getElementById("container");
let random = Math.floor(Math.random() * 100 + 1);
console.log(random);

function guessTheNumber(event) {
  event.preventDefault();
  let input = document.getElementById("input");
  input = input.value;
  input = input * 1;
  console.log(input);
  if (random === input) {
    displayText.innerText = "Hurrayy!!! You're a winnerrr!!";
    container.style.backgroundColor = "green";
    displayText.style.color = "yellow";
  } else if (input > random) {
    displayText.innerText = "Too high, go lower";
    container.style.backgroundColor = "red";
    displayText.style.color = "white";
  } else if (input > random && input >= 100) {
    displayText.innerText = "Too high(wo pri), guess betweem 1 - 100";
    container.style.backgroundColor = "blue";
    displayText.style.color = "grey";
  } else if (input < random) {
    displayText.innerText = "Too Low, go high";
    container.style.backgroundColor = "orange";
    displayText.style.color = "black";
  } else if (input < random && input < 1) {
    displayText.innerText = "too low, try between 1 - 100";
    container.style.backgroundColor = "grey";
    displayText.style.color = "white";
  }
}
restart.addEventListener("click", function () {
  location.reload();
});
