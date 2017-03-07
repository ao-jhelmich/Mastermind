(function() {
	game();
function optionMenu() {

}

function game() {
	var colors = ["red", "orange", "green", "yellow", "blue",  "purple", "white", "pink"];

	var x = 0;
	var j = 1;

	var gameLength = 13;
	var userChoices = 4;

	var colorCode = [];
	var userInput = [];
	var tempColorCode = [];

	createUserBar();
	createGrid();
	GetRandomColours();
	addEventLis();

	function createUserBar(){
		var div = document.createElement('div');
		div.id = "input1";
		colors.forEach( function(v, i) {
			var para = document.createElement("button");
			para.id = colors[i];
			var element = document.getElementById("input1");
			element.appendChild(para);
		});
	}

	function createGrid() {
		for(var i = 1; i < gameLength; i++){	
			var round = "round" + +i;
			var div = document.createElement('div');
			div.id = round;
			document.getElementById('playField').appendChild(div);
				for(var z = 0; z < userChoices; z++){
					var btn = document.createElement("button");
					btn.className = round;
					div.appendChild(btn);
				}
		}
	}

	function addEventLis() {
		colors.forEach( function(v, i) {
			var element = document.getElementById(colors[i]);
			element.addEventListener("click", function () {UserInput(colors[i])});
		});
	}


	function pushCctoTc () {
	 	var i = 0;
		colorCode.forEach( function() {
			tempColorCode.push(colorCode[i]);
			i++
		});
	}

	function GetRandomColours () {
		for(var i = 1; i <= userChoices;i++){
			var num = Math.floor(Math.random() * 7);
				colorCode.push(colors[num]);
		}
		console.log(colorCode);
	}

	function UserInput(color){
	 	userInput.push(color);
	 	changeColorChoices(color);
	 	x++;
	 	if(userInput.length === colorCode.length){
	 		checkPattern();

	 	}
	}

	function changeColorPins (color, amount) {
		for(var i = 0; i < amount; i++){
			var pins = document.getElementsByClassName('pins')[i].style.backgroundColor = color;
			console.log(pins);
		}
	}

	changeColorPins("black", 5)

	function changeColorChoices (argument) {

		console.log("x = " + x);
		if (x === userChoices) {
			j++;
			x = 0;
		};
		var result = "round" + +j;
		var elementRound1 = document.getElementsByClassName(result)[x].style.backgroundColor = argument;

		// var x = document.getElementsByTagName("H1")[1].getAttribute("class"); 
	    // document.getElementById("demo").innerHTML = x;
	}


	// Function that invokes on fictory
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
				console.log(blackPin);

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
				console.log(whitePin);
			}else{
				console.log(userInput[i], 'bestaat niet')
			}
		}
		userInput.splice(0);
		tempColorCode.splice(0);
		if(blackPin === userChoices){
			return victory();
		}
	}
}
})();