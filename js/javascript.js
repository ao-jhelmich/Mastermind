(function() {
var colors = ["red", "orange", "green", "yellow", "blue",  "purple", "white", "pink"];
var codeLength = 4;

var x = 0;
var j = 1;

var colorCode = [];
var userInput = [];
var tempColorCode = [];

GetRandomColours();


function addEventLis() {
	for(var i = 0; i < colors.length; i++){
		var element = document.getElementById(colors[i]);
		element.addEventListener("click", function () {UserInput(pink)});
}

addEventLis();
/*
var pink = "pink";

var elementPink = document.getElementById(pink).addEventListener("click", function () {
	UserInput(pink);
});
var elementRed = document.getElementById("red").addEventListener("click", function () {
	UserInput('red');
});
var elementOrange = document.getElementById("orange").addEventListener("click", function () {
	UserInput('orange');
});
var elementYellow = document.getElementById("yellow").addEventListener("click", function () {
	UserInput('yellow');
});
var elementGreen = document.getElementById("green").addEventListener("click", function () {
	UserInput('green');
});
var elementBlue = document.getElementById("blue").addEventListener("click", function () {
	UserInput('blue');
});
var elementPurple = document.getElementById("purple").addEventListener("click", function () {
	UserInput('purple');
});
var elementWhite = document.getElementById("white").addEventListener("click", function () {
	UserInput('white');
});
*/

function pushCctoTc () {
 	var i = 0;
	colorCode.forEach( function() {
		tempColorCode.push(colorCode[i]);
		i++
	});
}

function GetRandomColours () {
	for(var i = 1; i <= codeLength;i++){
		var num = Math.floor(Math.random() * 7);
			colorCode.push(colors[num]);
	}
	console.log(colorCode);
}

function UserInput(color){
 	userInput.push(color);
 	changeColor(color);
 	x++;
 	if(userInput.length === colorCode.length){
 		checkPattern();

 	}
}

function changeColor (argument) {

	console.log("x = " + x);
	if (x === 4) {
		j++;
		x = 0;
	};
	var result = "round" + +j;
	var elementRound1 = document.getElementsByClassName(result)[x].style.backgroundColor = argument;

	// var x = document.getElementsByTagName("H1")[1].getAttribute("class"); 
    // document.getElementById("demo").innerHTML = x;
}



function victory() {
	console.log("Congratiolations!");
	alert("kut");
}

function checkPattern(){
	pushCctoTc();
	var blackPin =  0;
	var whitePin = 0;
	for (var i = 0; i <= userInput.length -1; i++) {
		if (tempColorCode[i] === userInput[i]) {
			console.log(userInput[i], 'juiste plaats')
			tempColorCode.splice(i, 1);
			userInput.splice(i, 1);
			i--;
			blackPin++;
		}
	}
	for (var i = 0; i <= userInput.length -1; i++) {
		compare = tempColorCode.indexOf(userInput[i]);
		if (compare > -1){
			console.log(userInput[i], 'onjuiste plaats')
			tempColorCode.splice(compare, 1);
			userInput.splice(i, 1);
			i--;
			whitePin++;
		}else{
			console.log(userInput[i], 'bestaat niet')
		}
	}
	userInput.splice(0);
	if(blackPin === codeLength){
		return victory();
	}
}



})();