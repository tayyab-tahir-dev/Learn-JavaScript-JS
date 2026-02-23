// LET AND CONST --- ECMASCRIPT 2015

// LET KEYWORD: 
// THE LET KEYWORD IS USED TO DECLARE VARIALE WITH BLOCK SCOPE. VARIABLE DECLARED WITH LET ARE MUTABLE, MEANING THEIR VALUE CAN BE REASSIGNED.



// CONST KEYWORD:
// THE CONST KEYWORD IS USED TO DECLARE VARIABLES WITH BLOCK SCOPE, BUT ONCE A VALUE IS ASSIGNED TO A CONST VARIABLE, IT CANNOT BBE REASSIGNED.
// CONST VARIBLES ARE IMMUTABLE.

// SOME EXAMPLES...........
// EX # 1 -- BY VAR KEYWORD......


// if (true) {
//     var myName = "Tayyab";
//     console.log(myName);
    
// }
// myName = "Tahir";
// console.log(myName);





// if (true) {
//     let myName = "Tayyab";
//     console.log(myName);
    
// }
// myName = "Tahir";
// console.log(myName);


// EX # 3 -- BY CONST KEYWORD......


// if (true) {
//     const myName = "Tayyab";
//     console.log(myName);
    
// }
// myName = "Tahir";
// console.log(myName);



// TEMPLATE STRINGS -- ECMASCRIPT 2015...........
// IN ECMASCRIPT 6 (ES6), TEMPLATE STRINGS, ALSO KNOWN AS TEMPLATE LITERALS, PROVIDES A CONVENIENT AND FLEXIBLE EAY TO CREATE A STINGS IN JAVASCRIPT. TEMPLATE STRINGS ARE ENCLOSED IN BACKTICK (``) RATHER THEN SINGLE OR DOUBLE QUOTES.

// EXAMPLE......

// let firstName = "Tayyab";
// let lastName = "Tahir";

// let fullName = `${firstName} ${lastName}`
// console.log(fullName);



// STRING INTERPOLATION: TEMPLATES STINGS SUPPORT STRING INTERPOLAR, ALLOWING YOU TO EMBED EXPRESSION DIRECTLY WITHIN THE STRING, INTERPOLATED EXPRESSIONS ARE ENCLOSED IN ${}

// EXAMPLE.................

// let age = 18;

// let message = `I am ${age} Years Old`
// console.log(message);



// MULTILINE STRING: TEMPLATE STRINGS MAKE IT EASY TO CREATR MULTI-LINE STRINGS WITHOUT THE NEED FOR CONCATENATION OR ESCAPE CHARACTERS.

// EXAMPLE.......

// let multiLineString = `
// This Is A Multi-Line String
// Using Template Literals,
// It's Much Cleaner And Easier To Read.
// `;

// console.log(multiLineString);



// SOME PRACTISE..........
// EASY WAY TO CREATE TABLE OF ANY NUMBER......

// var tableOf5 = 1;
// var tableNum = 1;
// console.log(`5 * ${tableOf5} = ${5 * tableNum}`);



// DEFAULT PARAMETER.........
// A DEFAULT PARAMETER IN JAVASCRIPT IS A FUNCTION PARAMETER THAT TAKES A DEFAULT VALUE IF NO ARGUMENT OR UNDEFINED IS PASSED DURING THE FUNCTION CALL.

// EXAMPLE........

// function sum(a = 50, b = 50) {
//     return a + b;
// }
// console.log(sum());



// IN ECMASCRIPT 6 (ES6), ARROW FUNCTION, ALSO KHOWN AS FAT ARROW FUNCTION, WERE INTRODUCED AS A CONCISE WAY TO WRITE ANONYMOUS FUNCTION.

// SYNTAX..........

// const functionName = (param1, param2, ...) => {
//        //function body
//     return result;  //optional 
// };

// EXAMPLE.......

// const sum = (a, b) => {
//     let result = `The Sum Of ${a} And ${b} Is ${a + b}.`;
//     console.log(result);
// };
// sum(5, 5)


// PRACTISE..............

// const square = (a) => `The Square Of ${a} And ${a} Is ${a * a}`;
// console.log(square(10));


