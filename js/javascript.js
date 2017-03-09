(function() {
	game();
function optionMenu() {
	// creating the html layout
	var x = document.createElement("h2");
	x.innerHTML="Mastermind keuze menu.";
	var element = document.getElementById("wrapper");
	element.appendChild(x);

	var l1 = document.createElement("label");
	l1.innerHTML="Aantal keuzes:";
	element.appendChild(l1);

	var i1 = document.createElement("INPUT");
	i1.setAttribute("type", "number");
	i1.id = "gameLength";
	element.appendChild(i1);

	var br1 = document.createElement("br");
	element.appendChild(br1);

	var l2 = document.createElement("label");
	l2.innerHTML="Lengte kleurencode:";
	element.appendChild(l2);

	var i2 = document.createElement("INPUT");
	i2.setAttribute("type", "number");
	i2.id = "userChoices";
	element.appendChild(i2);

	var br2 = document.createElement("br");
	element.appendChild(br2);

 	var btn = document.createElement("button");
 	btn.id = "button";
 	btn.innerHTML="Play!";
	element.appendChild(btn);

	btn.addEventListener("click", function(){
		var uC = document.getElementById("userChoices").value;
		var gL = document.getElementById("gameLength").value;
			game(uC, gL);
		uC = null;
		gL = null;
	});
}

function game(numberUc, numberGl) {
	var colors = ["red", "orange", "green", "yellow", "blue",  "purple", "white", "pink"];

	var x = 0;
	var j = 1;

	var gameLength = 10;
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
		for(var i = 1; i < gameLength + 1; i++){	
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