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
			operator.onclick = function () {
				operator = operator.id;
				console.log("operator is set as " + operator);
				firstArgFunc();
			
				function firstArgFunc () {
					console.log(operator);
					if (firstArg === undefined) {
						firstArg = display.innerHTML;
					} else {
						firstArg = answer;
					}		
								
					display.innerHTML = ""
					console.log("first arg is " + firstArg)
				};
				
				function secondArgFunc () {
					secondArg = display.innerHTML;
					console.log("second arg is " + secondArg)
					operate(firstArg,secondArg,operator);
				}

				function setNewOperator() {
					console.log("setNewOperator launched")
					operator = Array.from(document.getElementsByClassName("operator"));

					operator.onclick = function () {
						display.innerText = "";
						operator = operator.id; 
						console.log("new operator is set as " + operator)
						secondArgFunc();
					}
				}
				
				equals.forEach(equals => {
					// if statement
					equals.addEventListener("click", function() {
				
							secondArgFunc(display);
							setNewOperator(operator);
					})
				})	
			}
		})
}

// this sets new operator to act between the two sets of calculations


// clear up the repeated function calls with add event listener: use onclick instead.

useCalculator();

