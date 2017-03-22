(function() {
	optionMenu();

	var playbtn = document.getElementById('playButton');
	playbtn.addEventListener("click", reload);

	function reload() {
		location.reload();
	}

//generates the option menu
function optionMenu() {
	
	var x = document.createElement("h2");
	x.className = "optionMenu";
	x.innerHTML="Mastermind keuze menu.";
	var element = document.getElementById("wrapper");
	element.appendChild(x);

	var l1 = document.createElement("label");
	l1.id = "optionMenu";
	l1.className = "optionMenu";
	l1.innerHTML="Aantal keuzes:";
	element.appendChild(l1);

	var i1 = document.createElement("INPUT");
	i1.className = "optionMenu";
	i1.setAttribute("type", "number");
	i1.id = "gameLength";
	element.appendChild(i1);

	var br1 = document.createElement("br");
	br1.className = "optionMenu";
	element.appendChild(br1);

	var l2 = document.createElement("label");
	l2.id = "optionMenu";
	l2.className = "optionMenu";
	l2.innerHTML="Lengte kleurencode:";
	element.appendChild(l2);

	var i2 = document.createElement("INPUT");
	i2.setAttribute("type", "number");
	i2.className = "optionMenu";
	i2.id = "userChoices";
	element.appendChild(i2);

	var br2 = document.createElement("br");
	br2.className = "optionMenu";
	element.appendChild(br2);

 	var btn = document.createElement("button");
 	btn.className = "optionMenu";
 	btn.id = "button";
 	btn.innerHTML="Play!";
	element.appendChild(btn);

	function clearOptionMenu() {
		var elements = document.getElementsByClassName("optionMenu");
    	while(elements.length > 0){
       		elements[0].parentNode.removeChild(elements[0]);
    	}
	}

	btn.addEventListener("click", getValue);


	//gets the value of the userinput en gives it as a param to Game()
	function getValue() {
		var userChoices = document.getElementById("userChoices").value;
		var gameLength = document.getElementById("gameLength").value;

			if(userChoices === null){
				userChoices = 4;
			}

			if (gameLength === null) {
				gameLength = 10;
			}
			clearOptionMenu();
			game(userChoices, gameLength);

	}

	
}

function game(numberUc, numberGl) {

	var colors = ["red", "orange", "green", "yellow", "blue",  "purple", "white", "pink"];

	var x = 0;
	var j = 1;
	var h = 1;	

	var gameLength = parseInt(numberGl);
	var userChoices = parseInt(numberUc);

	var colorCode = [];
	var userInput = [];
	var tempColorCode = [];

	createUserBar();
	createGrid();
	GetRandomColours();

	addEventList();

	function addEventList() {
		colors.forEach( function(v, i){
			
			})
	}
	

	//create the user bar
	function createUserBar(){
		colors.forEach( function(v, i) {
			var para = document.createElement("button");
			para.id = colors[i];
			var element = document.getElementById("input1");
			element.appendChild(para);
			var element2 = document.getElementById(colors[i]);
				element2.addEventListener("click", function () {
					UserInput(colors[i])
				});
			
				});
	}

	//creates the playfield
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

				//adds the text next to the grid for each round
				var blackPins = document.createElement('label');
				blackPins.innerHTML = "Black pins: ";
				blackPins.id = "blackPins";
				div.appendChild(blackPins);

				var whitePins = document.createElement('label');
				whitePins.innerHTML = "White pins: ";
				whitePins.id = "whitePins";
				div.appendChild(whitePins);
		}
	}

	function pushcolorCodeTotempColorCode () {
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

	function changeColorChoices (argument) {
		if (x === userChoices) {
			j++;
			x = 0;
		};
		var result = "round" + +j;
		var elementRound1 = document.getElementsByClassName(result)[x].style.backgroundColor = argument;
	}


	//user succeeded
	function victory() {
		console.log("Congratiolations!");
		var name = "test";
		window.location.href = "php/main.php?name=" + name 
								+ "&time=" + colorCode 
								+ "&gameLength=" + gameLength
								+ "&userChoices=" + userChoices; 
	}

	function changePinsTotal (color, amount) {
		var id = color + "Pins" + +h;
		String(id);
		console.log(id);

		var element = document.getElementById(id);
		element.innerHTML = color + " pins: " + amount;
		h++;
	
	}

	function checkPattern(){
		pushcolorCodeTotempColorCode();
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
		tempColorCode.splice(0);
		console.log("whitepins = " + whitePin);
		console.log("blackpins = " + blackPin);
		
		if(blackPin === userChoices){
			//var answer = prompt("Play another game");
			//if (answer.toLowerCase() === "yes") {
			//	reload()
			//}
			return victory();
		}
	}
}
})();