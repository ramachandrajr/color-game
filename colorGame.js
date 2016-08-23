var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;

init();

function init() {

	// Adding event Listeners to buttons.
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}

	// Add event Listeners to squares
	// Add colors too.
	for (var i = 0; i < squares.length; i++) {
		// Add click listeners to squares.
		squares[i].addEventListener("click", function () {
		// Grab color of clicked square.
		var clickedColor = this.style.background;
		// Compare color to pickedColor.
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Play Again?"
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});

	reset();
}

function changeColors(color) {
	// Loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// Change each colors.
		squares[i].style.background = color;
	}
}

resetButton.addEventListener("click", function () {
	reset();
});


function reset() {	
	// Generate new colors.
	colors = generateRandomColors(numSquares);
	// Pick a new random color from array.
	pickedColor = pickColor(colors);
	console.log(colors, pickedColor);
	// Update the h1
	colorDisplay.textContent = pickedColor;
	// Change the colors of squares on the page.
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
}



}

function pickColor(arr) {
	var random = Math.floor(Math.random() * arr.length);
	return colors[random];
}

function generateRandomColors(num) {
	// Make an array.
	arr = [];
	// Add num random colors to array.
	for (var i = 0; i < num; i++) {
		// Get Random color and push into array.
		arr.push(randomColor());
	}
	// Return array.
	return arr;
}

function randomColor() {
	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	// "rgb(r, g, b)"
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
}


