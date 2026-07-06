// WHAT IS ARRAY..................
// IN JAVASCRIPT AN ARRAY IS USED TO STORE COLLECTION OF DATA.

// const { result } = require("./result");

// SYNTAX.....................
// let arrayName = [value1, value2, value3];

// HOW TO CREATE ARRAY...........
// ARRAY IN JAVASCRIPT CAN BE CREATED USING THE ARRAY CONSTRUCTOR OR WITH ARRAY LITERALS.


// 1)USING ARRAY CONSTRUSTOR..........

// let fruits = Array ('apple', 'mango', 'banana');
// console.log(fruits);


// 2)USING ARRAY LITERALS
// let fruits = ["apple", "mango", "banana"];
// console.log(fruits);

// WE CAN ALSO CREATE AN EMPTY ARRAY.
// let arr = [];


// ACCESSING ELEMENTS.....
// ARRAY ELEMENTS ARE ACCESSED USING ZERO-BASED INDICES.
// EXAMPLE..

// let fruits = ["apple", "mango", "banana"];
// console.log(fruits[1]);


// MODIFYING ELEMENTS.....
// YOU CAN MODIFY ARRAY ELEMENTS BY ASSIGNING NEW VALUES TO SPECIFIC INDICES.
// EXAMPLE..

// let fruits = ["apple", "mango", "banana"];
// fruits[2] = "ORANGE";
// console.log(fruits);


// ARRAY TRAVERSAL /YA/ ITERATING OVER ARRAYS...

//FOR...OF LOOP.....
// IT IS ALSO KNOWN AS ITERABLE.

// EXAMPLE.

// let fruits = ["Apple", "Mango", "Orange", "Banana"];
// for(let item of fruits){
//     console.log(item);
    
// }

// For..In Loop.......
// EXAMPLE.

// let fruits = ["Apple", "Mango", "Orange", "Banana"];
// for(let index in fruits){
//     console.log(index);
    
// }


// FOR..EACH METHOD...
// EXAMPLE..

// let fruits = ["Apple", "Mango", "Orange", "Banana"];
// fruits.forEach((curElem, index, arr) => {
//     console.log(`${curElem} ${index}` );
    
// });


// let fruits = ["Apple", "Mango", "Orange", "Banana"];
// fruits.forEach((curElem, index, arr) => {
//     console.log(arr);
    
// });

// MAP METHOD..
// EXAMPLE.

// let fruits = ["Apple", "Mango", "Orange", "Banana"];
// fruits.map((curElem, index, arr) => {
//     console.log(`${curElem} ${index}` );
    
// });


// let fruits = ["Apple", "Mango", "Orange", "Banana"];
// fruits.map((curElem, index, arr) => {
//     console.log(arr);
    
// });

                    //    IMPORTANT
// .............MAP AND FOR EACH METHOD ARE BOTH SAME BUT................
// .............MAP METHOD MAY RETURN USE HOTA HAI OR TOTAL NEW ARRAY BNA  KR DETA HAI...............
// EXAMPLE

// let fruits = ["Apple", "Mango", "Orange", "Banana"];
// const myMapArray = fruits.map ((curElem, index, arr) => {
//     return `My Fav Fruit Is ${curElem}`
// }) 

// console.log(myMapArray);
// console.log(fruits);

// BY FOREACH
// let numbers = [2,3,4,5,];
// numbers.forEach((curElem) => {
//     console.log(curElem *2);
//     // PERFORMS AN ACTION ON EACH ELEMENTS THEN GO WITH FOR EACH
// })



// BY MAP METHOD
// let numbers = [2,3,4,5,];
// const doubleValue = numbers.map((curElem) => {
//     return curElem * 2;
// // CREATE A NEW ARRAY WITH TRANSFORMED ELEMENTS THEN GO WITH MAP METHOD
// });
// console.log(doubleValue);


// HOW TO INSERT, ADD, REPLACE AND DELATE ELEMENTS IN ARRAY(CRUD).
// 1)PUSH():Method that add one or more element to the end of an array.

// const persons = ["Taha", "Ali"];
// persons.push("AHMAD");
// console.log(persons);



// 2)POP():Method that removes the last element from an array.

// const persons = ["Taha", "Ali"];
// persons.pop();
// console.log(persons);



// 3)UNSHIFT():Method that add one or more element to the beginning of an array.

// const persons = ["Taha", "Ali"];
// persons.unshift("AHMAD");
// console.log(persons);



// 4)SHIFT():Method that removes the first element from an array.

// const persons = ["Taha", "Ali"];
// persons.shift();
// console.log(persons);



// 5)SPLICE():Method that use to add or remove anywhere in an element.

// SYNTAX = splice (start, deleteCount, item1, item2, /* ..., itemN)

// EXAMPLE:

// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(1,1, "grapes");
// console.log(fruits);

// ...................IMPORTANT................
// fruits.splice(1,0, grapes);
// Aghar deletecount 0 likh dete hai to bina item delete kiyay or values to jha marzi add kr skte hai index number change kar ke.


// 6)SEARCHING IN ARRAY.
// SEARCHING AND FILTER IN AN ARRAY

// FOR SEARCH WE HAVE
// 1)indexOf
// 2)lastIndexOf
// 3)includes


//1)INDEXOF METHOD.
// The indexOf method returns the first index at which a given element can be found in the array, or -1 it it is not present.

// indexOf method array mein kisi diye gaye element ka pehla index return karta hai. Agar woh element array mein mojood na ho, to yeh -1 return karta hai.

// SYNTAX = indexOf(searchElement); 
// SYNTAX = indexOf(searchElement, fromIndex);

// EXAMPLE:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = (numbers.indexOf(4));
// console.log(result);

// EXAMPLE 2:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = (numbers.indexOf(4, 5));
// console.log(result);

// Yha pr 5 se start hoga, ismay vo element array mein mojood ni hai, to yeh -1 return karta hai.Q ke 5 ke agay 4 ni hai.

// 2)LASTINDEXOF METHOD.

// SYNTAX = LastIndexOf(searchElement); 
// SYNTAX = LastIndexOf(searchElement, fromIndex);

// EXAMPLE:

// const numbers = [1, 2, 3, 4, 5, 6, 4, 7, 8, 9];
// const result = (numbers.lastIndexOf(4));
// console.log(result);



// EXAMPLE 2:

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.lastIndexOf(6, 9);
// console.log(result);

// Yha pr 9 se backward may start hoga,but index number simple sidhay he check krna shru kray gay.



// 3)INCLUDES METHOD:
// The include method check whether an array includes a certain elements,returning true/false.

// SYNTAX = includes(searchElement); 
// SYNTAX = includes(searchElement, fromIndex);

// EXAMPLE.

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(6);
// console.log(result);

// ANSWER BOOLEAN TRUE/FALSE MAY AYE GA.


// FINDINDEX METHOD........
// findIndex() 
// is a JavaScript array method that returns the index of the first element that satisfies a given condition. If no element matches the condition, it returns -1. 

// findIndex() 
// JavaScript ki array method hai jo pehle aise element ka index return karti hai jo di hui condition ko satisfy kare. Agar koi element condition ko satisfy na kare to -1 return karti hai.

// SYNTAX...

// array.findIndex(callback(element, index, array))

// SYNTAX..

// Ya arrow function ke sath (jo zyada use hota hai):

// array.findIndex((element) => {
// condition
// });


// EXAMPLE 1:

// const numbers = [10, 20, 30, 40];

// let result = numbers.findIndex((num) => num > 25);

// console.log(result);


// OUTPUT = 2:
// Kyunkay 30 pehli value hai jo 25 se bari hai, aur uska index 2 hai.


// EXAMPLE 2:
// Agar condition match na ho

// const numbers = [10, 20, 30];

// let result = numbers.findIndex((num) => num > 50);

// console.log(result);

// OUTPUT = -1:


// EXAMPLE 3:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers.map((curElem) => curElem * 5);
// console.log(result);



// const result2 = result.findIndex((curElem) => {
//     return curElem > 15;
// })
// console.log(result2);

// FILTER METHOD.....
// The method creates a new array with all elements that pass the test implemented by the provided function.

// SYNTAX.....

// array.filter(callback(element, index, array))

// SYNTAX: BY ARROW FUNCTION,MOST USED

// array.filter((element) => {
// condion 
// });


// EXAMPLE:

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, ];
// const result = numbers.filter((curElem) => {
//     return curElem > 4;
// })

// console.log(result);

