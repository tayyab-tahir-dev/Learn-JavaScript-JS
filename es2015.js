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
