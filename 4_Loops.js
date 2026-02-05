// *JAVASCRIPT CONTROLL STATEMENTS AND LOOPS

// IF..ELSE STATEMENT............

// var userAge = 18;
// var isCitizen = true;
// var isRegistered = true;


// if (userAge >= 18) {
//     if (isCitizen) {
//         if (isRegistered) {
//             console.log("You are eligible to vote");
//         } else {
//             console.log("You are not eligible due to registration status");
//         }
//         } else {
//             console.log("You are not eligible due to citizenship status");
//         }
//         } else {
//             console.log("You are not eligible to vote (YOUNGER)");
//         }
            
// *SWITCH CONDITION...................

// var  day = "Wednesday";

// switch(day) {
//     case  "Monday":
//     console.log("Today is Monday");
//     break;

//     case  "Tuesday":
//     console.log("Today is Tuesday");
//     break;

//     case  "Wednesday":
//     console.log("Today is Wednesday");
//     break;

//     case  "Thursday":
//     console.log("Today is Thursday");
//     break;

//     case "Friday":
//         console.log("Today is Friday");
//         break;

//     case  "Saturday":
//     console.log("Today is Saturday");
//     break;

//     case "Sunday":
//         console.log("Today is Sunday");
//         break; 

//    default:
//        console.log("No Day Match");
//          break;
// }


// var areaOfShapes = "rectangle";
// var a = 5;
// var b = 10;

// var result; 
// switch (areaOfShapes) {
//     case "square":
//         result = a * a;
//         console.log(result);
//         break;
        
//         case "rectangle":
//         result = a * b;
//         console.log(result);
//         break;
   
//  default:
//     console.log("No Shape Matches");
//         break;
// }


// var password = 565657;

// switch (password) {
//     case 565657:
//         console.log("Password Is Correct");
//         break;

//     default:
//         console.log("Password Is Incorrect");
//         break;
// }


// WHILE-LOOP...............
// SIMPLE WHILE LOOP TO COUNT FROM 1 TO 10

// var num = 1;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// LET's CREATE A TABLE OF ANY NUMBER USING WHILE LOOP........

// var num = 1;

// while (num <= 10) {
//     console.log("5 * " + num + " = " + 5 * num);
//     num++;
    
// }


// USING FOR LOOP...............

// for (var num = 1; num <= 10; num++) {
//    console.log("5 * " + num + " = " + 5 * num)
// }


// DO-WHILE-LOOP.............
// SIMPLE DO-WHILE-LOOP TO COUNT FROM 1 TO 10

// var num = 1;

// do {
//     console.log(num);
//     num++;
// } while (num <= 10);



// FOR-LOOP..............
// SIMPLE FOR-LOOP TO COUNT FROM 1 TO 10

// for (var num = 1; num <= 10; num++) {
//     console.log(num);
//     ;
    
// }


// DO-WHILE-LOOP

// let userInput;
// let positiveNumber;

// do {
//     userInput = Prompt("Enter Any Positive Number");
//     positiveNumber = parseFlost(userInput);
// } while (isNaN(positiveNumber) || positiveNumber < 0);
// console.log("You Enter a Valid Positive Number:", positiveNumber);



// var num = 13;
// var isPrime = true;

// for (var i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) {
//     console.log("Num is Prime");
//  }   else {
//     console.log("Num is Not Prime");
//  }
    



// PROGRAM TO CHECK IS A YEAR IS LEAP YEAR...........


var year = 2023;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "It's a Leap Year" );
} else { 
    console.log(year, "It's Not a Leap Year");
    
}


// MAKING PATTERN

// for (var i = 1; i <= 5; i++)  {
//     var pattern = "";
//     for (var j = 1; j <= i; j++){
//         pattern = pattern + " * "; 
// }
//   console.log(pattern);
//   } 