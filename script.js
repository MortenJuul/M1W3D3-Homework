// Squared number
function squareNumber(num) {
    var squaredNumber = num * num;
    document.getElementById("solution").innerHTML = 'The result of squaring the number ' + num + ' is ' + squaredNumber;
}
    
var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function() {
  var num = document.getElementById("square-input").value;
  squareNumber(num);
});

// Halfing number
function halfNumber(num) {
  var halfedNumber = num / 2;
  document.getElementById("solution").innerHTML = 'The result of halfing the number ' + num + ' is ' + halfedNumber;
}
  
var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", function() {
var num = document.getElementById("half-input").value;
halfNumber(num);
});

// Percent
function percentNumber(frac, whole) {
  var percent = frac / whole * 100;
  document.getElementById("solution").innerHTML = 'The fraction, ' + frac + ' of the whole, ' + whole + ' is ' + percent.toFixed(2) + '%';
}
  
var percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", function() {
var frac = document.getElementById("percent1-input").value;
var whole = document.getElementById("percent2-input").value;
percentNumber(frac, whole);
});

// Integer
function intNumber(num) {
  var integerNumber = Math.round(num);
  document.getElementById("solution").innerHTML = 'The result of rounding the number ' + num + ' to the nearest integer is ' + integerNumber;
}
  
var intButton = document.getElementById("int-button");
intButton.addEventListener("click", function() {
var num = document.getElementById("int-input").value;
intNumber(num);
});

// Area of circle
function areaNumber(num) {
  var areaNumber = num * num * Math.PI;
  document.getElementById("solution").innerHTML = 'The area of a circle with the radius of ' + num + ' is ' + areaNumber.toFixed(2);
}
  
var areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", function() {
var num = document.getElementById("area-input").value;
areaNumber(num);
});