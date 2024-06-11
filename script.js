// selecting elements
const display = document.getElementById("number-display");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

// function that displays whatever button is pressed
const addToDisplay = function (input) {
  // if the input is clear, than the display clears
  if (input === "C") display.value = "";
  else display.value += input;
};

// evaluates the expression in the display
equals.addEventListener('click', function() {
    display.value = eval(display.value);
});
