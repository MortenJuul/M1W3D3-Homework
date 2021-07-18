// Calculation function
let calc = (type, num1, num2) => {
  console.log(type + ' ' + num1 + ' ' + num2);
  let output = '';
  if (num1 == ""){
    output = "Please enter a number to calculate";
  } else if (num1 != "" && num2 == ""){
    output = "Please enter a second number";
  } else if ((isNaN(num1) || isNaN(num2)) && num2 == ""){
    output = "Input invalid - Please enter a valid number";
  } else {
    switch (type) {
      case 'square':
        output = `The result of squaring the number ${num1} is: ${num1 * num1}`;
        break;
      case 'half':
        output = `The result of halfing the number ${num1} is: ${num1 / 2}`;
        break;
      case 'percent':
        output = `The fraction, ${num1} of the whole, ${num2} is: ${(num1 / num2 *100).toFixed(2)}%`;
        break;
      case 'integer':
        output = `The result of rounding the number ${num1}, to the nearest integer is: ${Math.round(num1)}`;
        break;
      case 'area':
        output = `The area of a circle with the radius of ${num1} is ${(num1 * num1 * Math.PI).toFixed(2)}`;
        break;
      default:
        output = "Something went wrong... try again.";
        break;
    }
  }
  document.getElementById("solution").innerHTML = output;
}

// Squared number
var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function() {
  var num = document.getElementById("square-input").value;
  calc("square", num);
});

// Halfing number
var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function() {
var num = document.getElementById("half-input").value;
calc("half", num);
});

// Percent
var percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", function() {
var frac = document.getElementById("percent1-input").value;
var whole = document.getElementById("percent2-input").value;
calc("percent", frac, whole);
});

// Integer
var intButton = document.getElementById("int-button");
intButton.addEventListener("click", function() {
var num = document.getElementById("int-input").value;
calc("integer", num);
});

// Area of circle
var areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function() {
var num = document.getElementById("area-input").value;
calc("area", num);
});