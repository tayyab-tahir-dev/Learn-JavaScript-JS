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


