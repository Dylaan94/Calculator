let a;
let b;
let operator;
let display = document.getElementById("display");
let button = Array.from(document.getElementsByClassName("btn"));

// argument variables
let firstArg;
let secondArg;

// calculator functions

function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function multiply (a,b) {
	return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (a,b,operator){
	if (operator === "+") {
		add(a,b);
	} else if (operator === "-") {
		subtract(a,b);
	} else if (operator === "*"){
		multiply(a,b);
	} else if (operator === "/"){
		divide(a,b);
	}
}

// functionality

button.forEach(button => {
	button.addEventListener("click", function () {
			display.innerHTML += button.innerHTML;
		
		
	})
})
// uses for each to change the input on the display.
// now I need to concat the numbers

// need to create a function that creates a string from the inputs and 
// stores them as an argument variable

// need to make it that when an operator variable is clicked, the current 
// innerHTML becomes an argument.

// Then, once the equals sign has been hit, the second string will be 
// stored as an argument too.

function firstArgFunc () {
	if (!display.innerHTML === NaN ){
		display.innerHTML = toString.firstArg;
		console.log(firstArg)
	}


};

