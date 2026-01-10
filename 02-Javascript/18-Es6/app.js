// Variable Scoping p
// Closure p
// lexical scoping p
// Modules p
// Object Methods (keys,values,freez,entries) p
// Exponentiation Operator p
// Optional chaining p
// Destructuring p
// Template literals p
// Default parameters p
// Rest parameter p
// Spread Operator p
// Arrow functions p
// Enhanced object literals p
// Iterators & For..of p
// Map p
// Array methods p
// Higher-order function p
// CallBack p
// Promises p
// Ternary Operator

// Variable Scoping

// let x = 0; // global variable

// function test(){
//     let y = 1; // local variable
//     console.log(x , y);

// }

// console.log(x);
// test()
// console.log(y);

// let const block scope

// if(true){
//     var y = 1
//     let x = 0;
// }

// console.log(y);
// console.log(x);

// Closure

// function outerfunc(){
//     console.log("outer func..")

//     // nested function
//     function innerFunc(){
//         console.log("inner func..");

//     }

//     return innerFunc
// }

// // let funCall = outerfunc()
// // funCall()
// outerfunc()()

// lexical scoping

// function outerFunc(){
//     let a = 10;
//     console.log(b , c);

//     function innerFuncOne(){
//         let b = 20;
//         console.log('inner func one' ,a , b);

//     }

//     function innerFuncTwo(){
//         let c = 30;
//         console.log('inner func two' , a , c);
//     }

//     innerFuncOne()
//     innerFuncTwo()
// }

// outerFunc()

// Object Methods (keys,values,freez,entries)

// const user = {
//     fullname: 'Muhammad Abdullah',
//     age: 21,
//     isLoggedIn: true
// }

// Object.freeze(user)
// user.fullname = "adfdf"
// delete user.age

// console.log(Object.values(user));
// console.log(Object.keys(user));
// console.log(Object.entries(user));

// for (const key in user) {
//     console.log(`${key} ==> ${user[key]}`);

// }

// Exponentiation Operator

// console.log(2**10);
// console.log(2*2*2*2*2*2*2*2*2*2);

// Optional chaining

// const user = [
//   {
//     profile: {
//       address: {
//         city: "London",
//       },
//       name: {
//         fullname: "abdullah",
//       },
//     },
//   },
//   {
//     profile: {
//       address: {
//         city: "London",
//       },
//     },
//   },
// ];

// console.log(user[1].profile.name?.fullname);

// Destructuring

// const user = {
//     fullname: 'Muhammad Abdullah',
//     age: 21,
//     isLoggedIn: true
// }

// const {fullname , age ,isLoggedIn} = user

// console.log(fullname);

// const arr = ["apple", "banana", "orange"];

// const [, , third] = arr;
// console.log(third);

// Template literals

// let username = "abdullah";
// let age = 21;

// console.log(`username is ${username} and user age is ${age}`);

// // console.log("abdullah

// //     ");

// console.log(`fdfdas

//     asdasdas`);

// Default parameters

// function greeting(username="ammar"){
//     console.log(`hello ${username}`);

// }

// greeting("abdullah")

// Rest operator

// function multipleArg(...arg){
//     console.log(arg);

// }
// multipleArg(2 , 3 , 4 ,5 ,6,'abdullah')

// Spread Operator
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let arr3 = [11, 12, 13, 14, 15];

// let combinedArr = [...arr1 , ...arr2 , ...arr3]
// let combinedArr = arr1.concat(arr2);
// console.log(combinedArr);

// Arrow functions

// const greet = username=> (
//     `hello ${username}`
// )
// console.log(greet("abdullah"));

// Enhanced object literals

// let fullname = "Alice";
// let age = 25;

// const user = {
//     fullname,age
// }

// console.log(user);

// for of
// let arr3 = [11, 12, 13, 14, 15];
// for (const element of arr3) {
//     console.log(element);

// }

// Ternary Operator

// let age = 11;

// // age >= 18 ? console.log("admission miljayega") : console.log("admission nahi milaiga")

// age >= 18
//   ? console.log("admission miljayega")
//   : age >= 15
//   ? console.log("5000 zyada do or ajao")
//   : console.log("admission nahi milaiga");

// if(age >= 18){
//     console.log("admission miljayega");

// } else if(age >= 15) {
//     console.log("5000 zyada do or ajao");

// }

// else {
//     console.log("admission nahi milaiga");

// }

// "use strict"
// type module
// strict mode open hojata ha
// strict mode appna khud prhna ha.
// import export


const username = "Abdullah";
const age = 22;

function greetUser(){
    console.log("hello world");
    
}

export {username , age}
export default greetUser
