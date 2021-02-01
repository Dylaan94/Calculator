let operator = Array.from(document.getElementsByClassName("operator"));
let display = document.getElementById("display");
let displayArr = [];
let button = Array.from(document.getElementsByClassName("btn"));
let equals = Array.from(document.getElementsByClassName("equals"));
let clearDisplay = document.getElementById("clear");
let answer;

// argument variables
let firstArg;
let secondArg;
let furtherArg;

let furtherArgOne;
let furtherArgTwo;

let newOperator;

// calculator functions

function add (firstArg,secondArg) {
	firstArg = parseFloat(firstArg) // parse float to change to string to avoid concat
	secondArg = parseFloat(secondArg)
	return firstArg + secondArg;
}

function subtract (firstArg,secondArg) {
	return firstArg - secondArg;
}

function multiply (firstArg,secondArg) {
	return firstArg * secondArg;
}

function divide (firstArg,secondArg) {
    return firstArg / secondArg;
}

function operate (firstArg,secondArg,operator){
		if (operator === "add") {
			display.innerHTML = add(firstArg,secondArg);
			console.log(add(firstArg,secondArg))
			answer = display.innerHTML
			console.log("answer is " + answer)
			setOperator();
			return answer
		} else if (operator === "subtract") {
			display.innerHTML = subtract(firstArg,secondArg);
			console.log(subtract(firstArg,secondArg))
			answer = display.innerHTML
			console.log("answer is " + answer)
			setOperator();
			return answer
		} else if (operator === "multiply"){
			display.innerHTML = multiply(firstArg,secondArg);
			console.log(multiply(firstArg,secondArg))
			answer = display.innerHTML
			console.log("answer is " + answer)
			setOperator();
			return answer
		} else if (operator === "divide"){
			display.innerHTML = divide(firstArg,secondArg);
			console.log(divide(firstArg,secondArg))	
			answer = display.innerHTML
			console.log("answer is " + answer)
			setOperator();
			return answer
	}
	

}

// add functionality to string operators together

// functionality

clearDisplay.addEventListener("click", function () {
	location.reload();
})	

function useCalculator () {
	button.forEach(button => {
		button.addEventListener("click", function () {
			displayArr = Array.from(display.innerHTML += button.innerHTML); // pushed display into array
			displayArr = displayArr.filter(function(str) {
				return  /\S/.test(str); // removed whitespace with regex
			})
			displayArr = parseInt(displayArr.join("")); // turned into number
			display.innerHTML = displayArr;
		})
	})

setOperator();
	
}

function setOperator () {
		operator.forEach(operator => {
			operator.addEventListener("click" , function () {
				if (Array.isArray(operator) !== true) {
					operator = operator.id;
					console.log("operator is set as " + operator);
					firstArgFunc();
				} else if (typeof(operator) != "undefined") {
					setNewOperator();
				}
				
				function firstArgFunc () {
					console.log(operator);
					firstArg = display.innerHTML;
					display.innerHTML = ""
					console.log("first arg is " + firstArg)
				};
				
				function secondArgFunc () {
					secondArg = display.innerHTML;
					console.log("second arg is " + secondArg)
					operate(firstArg,secondArg,operator);
				}

				function furtherArgFunc () {
					furtherArg = display.innerHTML;
					console.log("furtherArg is " + furtherArg)
					secondArg = furtherArg
					operate(firstArg,secondArg,operator);
				
				}

				function setNewOperator() {
					console.log("setNewOperator launched")
					operator = Array.from(document.getElementsByClassName("operator"));
					operator.forEach(operator => {
						operator.addEventListener("click", function() {
							display.innerHTML = "";
							operator = operator.id;
							console.log("new operator is set as " + operator)
						})
					})
				}
	
				equals.forEach(equals => {
					// if statement
					equals.addEventListener("click", function() {
				
							secondArgFunc(display);
							setNewOperator(operator);
					})
				})	
			})
		})
	return
}

// this sets new operator to act between the two sets of calculations




useCalculator();

// answer is created as a variable
// answer -> operator -> number becomes newarg
// new arg becomes answer
// loop back

// need event listener to check if equals has been pressed
// if equals has been pressed go to operate
// if an operator is pressed, go to second operate.
// second operate will take answer, and add,multply,divide,or subtract
// 

// need to change event listener on operator so that it doesn't 
// run again if answer has data