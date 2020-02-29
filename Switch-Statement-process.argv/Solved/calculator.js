//Review of process.argv


// Takes in all of the command line arguments
var inputString = process.argv;

/* Note: process.argv is a Node-y way of making an array out of what you put
   in the command line. 
   For example, to run this, you likely typed node calculator.js
   Well, node is array[0] and calculator.js is array[1] so the 
   very first "usable" space is array[2]. Here it is set to 
   the operand (add, subtract, etc)
   and then the numbers. So you are going to type 'node calculator.js add 1 2'
   to get results */

// That is what this is doing. note input string is just process.argv!
var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];

// Here's the variable we will be modifying with the new numbers
var outputNum;

//This is a switch statement. They are swesome
switch (operand) {
//In a switch statement you list cases
case "add":

//and what each case should do

  outputNum = parseFloat(num1) + parseFloat(num2); //ParseFloat makes it a string.
                                                   //Even if you put in a number on the CLI
                                                   // it is a string!
  break; // you need this to tell it to stop. This is a stop sign. 

case "subtract":
  outputNum = parseFloat(num1) - parseFloat(num2);
  break;

case "multiply":
  outputNum = parseFloat(num1) * parseFloat(num2);
  break;

case "divide":
  outputNum = parseFloat(num1) / parseFloat(num2);
  break;

case "remainder":
  outputNum = parseFloat(num1) % parseFloat(num2);
  break;

case "exp":
  outputNum = Math.pow(num1, num2);
  break;

case "algebra":
  outputNum = parseAlgebra(num1);
  break;
//You should always have a default in case someone puts in something not listed above
default:
  outputNum = "Not a recognized command";
}

// Prints the outputNumber
console.log(outputNum);

// =======================================================

