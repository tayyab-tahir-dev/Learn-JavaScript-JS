// WHAT IS ARRAY..................
// IN JAVASCRIPT AN ARRAY IS USED TO STORE COLLECTION OF DATA.

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
// .............MAP METHOD MAY RETURN UDE HOTA HAI OR TOTAL NEW ARRAY BNA  KR DETA HAI...............
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
