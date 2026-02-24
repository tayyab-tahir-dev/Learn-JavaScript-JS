// A Function is a block of code that performs a specific task. It can be reused multiple times in a program, which helps to avoid code duplication and makes the code more organized and easier to maintain.
// A Fuction Is Used To Make Our Code Reusable.


// SYNTAX...................

// function functionName(parameters) {
//     // code to be executed
// }

// EXAMPLE..................

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 5));
// console.log(sum(10, 15));
// console.log(sum(10, 50));
// console.log(sum(100, 200));


// FUNTION DECLARATION.............
// Function declaration is the process of defining a function with its name, parameters, and body using the function keyword.
// Function declaration ka matlab function ko define karna hota hai jisme uska naam, parameters aur body likhi jati hai.


// example..................

// function greet() {
//     console.log("Hello How Are You");
// }

// Yahan uper function declare hua hai, call nahi hua.



// FUNCTION INVOCATION.............
// Function invocation is the process of executing or calling a function using its name followed by parentheses.
// Function invocation ka matlab function ko uske naam ke sath parentheses laga kar execute karna hota hai.Ya call krna hota hai.

// example..................

// greet();

// Yahan function invoke (call) hua hai


// SIMPLE.....................
// Function banana → Function Declaration
// Function chalana → Function Invocation / Function Call



// FUNCTTION PARAMETERS.........
// Function parameters are the variables that are defined in the function declaration and are used to receive values when the function is called.

// example..................
//  syntax...................

// function functionName(parameter1, parameter2, ...) {
//     // code to be executed
// }


// FUNCTION ARGUMENTS.........
// Function arguments are the actual values that are passed to a function when it is called. 

// example..................

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(5, 10)); // 5 and 10 are arguments passed to the sum function
// console.log(sum(20, 30)); // 20 and 30 are arguments passed to the sum function


// LETS DO SOME PRACTICE..................
//   function greet(name) {
//     console.log("Hello " +  name  + ": How Are You"); 
//   }

//   greet("John"); // John is the argument passed to the greet function
//   greet("Alice"); // Alice is the argument passed to the greet function
//   greet("Bob"); // Bob is the argument passed to the greet function

// FIND SUM OF TWO NUMBERS USING FUNCTION..................

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(6, 10);
// sum(100, 200);
// sum(50, 50);    


// FUNCTION EXPRESSION..............
// ASA FUNCTION JIS KA NAME A RHA HAI OR VARIABLE MAY USKO ASIGN KIA HUA HAI.

// var result = function sum(a, b) {
//     console.log(a + b);

// }

// result(10, 60);




// ANONYMOUS Function............
// ASA FUNCTION JIS KA KOI NAME NA HO.

// var result = function sum(a, b) {
//     console.log(a + b);

// }

// result(10, 60);


// (IIFE) - IMMEDIATELY INVOKED FUNCTION EXPRESSION..........
// IS FUNCTION KO CALL KRNAY KI NEED NI. JUB BI 1ST TIME PAGE LOAD HOGA YE AUTOMETIC CHAL JAYA GA.

// SYNTAX...............

// (function () {
       //code to be executed 
// }) ();


// var result = (function (a, b) {
//     console.log(a + b);
//     return a + b;
    
// }) (5, 10);

// console.log("The Sum Of Two Numbers Is " + result);



// REVERSE A STRING......


// const isReverse = (str) => {
//        for(let char = 0; char <= str.length -1; char++) {
//               console.log(str[char]);
              
//        }
// }

// isReverse("TAYYAB TAHIR");



// const isReverse = (str) => {
//        for(let char = str.length -1; char >= 0; char--) {
//               console.log(str[char]);
              
//        }
// }

// isReverse("TAYYAB TAHIR");


// const isReverse = (str) => {
//        let reverse ="";
//        for (let char = str.length - 1; char >= 0;char--) {
//           reverse = reverse + str[char];
//        }
//        return reverse;
// };

// console.log(isReverse("TAYYAB TAHIR"));