//Javascript Docs
//var game ={};
//game.init = function(){
//	modeEventListener();
//	setSquares();
//	resetGame();
//};
//game.init();

var colors = [];
var numSquares = 5;
var pickedColor;
var boxes = document.getElementsByClassName("colorBox");
var goal = document.getElementById("rgb");
var message = document.getElementById("message");
var reset = document.getElementById("newGame");
var h1 = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	//mode Event Listener
	modeEventListener();
	setSquares();
	resetGame();
}

reset.addEventListener("click",function(){
	resetGame();
});

function modeEventListener(){
	for(var i =0; i < modeBtn.length; i++){
		console.log(modeBtn);
		modeBtn[i].addEventListener("click",function(){
			console.log(modeBtn[i]);
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 2: numSquares = 6;

			resetGame();
		});
	}
}

function setSquares(){
	for(var i = 0; i < boxes.length; i++){
		//click listeners to squares
		boxes[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			//COMPARE THE COLOR OF SQUARE
			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				reset.textContent = "Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{	
				this.style.backgroundColor = "#2B2A1E";
				message.textContent = "Try Again";
			}
		});
	}
}

function changeColor (color){
	for(var i =0; i<boxes.length; i++){
		boxes[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var random =  Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr =[];
	for(var i =0; i<=num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var string = "rgb(" + red + ", " + green + ", " + blue + ")";
	return  string ;
}

function resetGame(){
	colors = generateRandomColor(numSquares);
	pickedColor=pickColor();
	goal.textContent = pickedColor;
	reset.textContent = "New Color";
	message.textContent = "";
	h1.style.backgroundColor = "steelblue";
	
	for(var i = 0; i < boxes.length; i++){
		if(colors[i]){
			boxes[i].style.display = "block";
			boxes[i].style.backgroundColor = colors[i];
		}else{
			boxes[i].style.display = "none";
		}
	}
}