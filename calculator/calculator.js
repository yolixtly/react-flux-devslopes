var readline = require('readline-sync');

var num1 = readline.question('Please enter a number ');
console.log(num1);
var num2  = readline.question('Please enter a second number ');
console.log(num2);
var operator = readline.question('Please enter an operator (+, -, /, *)');
console.log(operator);

console.log(calc(num1, num2));
function calc(num1, num2) {
	switch(operator){
		case '+': 
		return parseInt(num1) + parseInt(num2);
		case '-':
		return parseInt(num1) - parseInt(num2);
		case '/':
		return parseInt(num1) / parseInt(num2);
		case '*':
		return parseInt(num1) * parseInt(num2);
	}
}