"use strict";
// console.log("hello");
// npm install -g typesript
// TS Compiler  (tsc typescript file name)
// Type Annotations
// Type Inference
// Type Aliases
// Union Types
// Interfaces
// Type Aliases vs Interface
// Generics
// Enums
// Tuples
// Type Guards
// Type Annotations
//   const username:String = "Abdullah"
//   const age:number = 20
//   const isLogin:boolean = true
//   console.log(isLogin);
//   const users :string[] = ["Abdullah" , "Ali" ,"Jawad"];
//   const userAge :number[] = [20 , 30 ,40];
//   console.log(users);
//   console.log(userAge);
//   function sum(user1:string , user2:string):string{
//     return user1
// }
// console.log(sum("Abdullah" , "Ali"));
// Type Inference
// let username = "abdullah"
// let userage = 20
// console.log(username);
// console.log(userage);
// let cities = ['karachi' , 'lahore' , 'sialkot']
// cities.push("Quetta")
// console.log(cities);
// Type Aliases
// type user = {
//     userName : string,
//     age:number
// }
// let user1:user = {
//     userName : "Ali",
//      age : 20
// }
// console.log(user1);
// type User = {
//     fullname: string
//     age: number
//     isLoggedIn: boolean
//     greetUser: () => string
// }
// const user: User = {
//     fullname: "abdullah",
//     age: 22,
//     isLoggedIn: true,
//     greetUser: function () {
//         return `hello ${this.fullname}`
//     }
// }
// console.log(user);
// Union Types
// let id: string | number;
// id = 101;
// console.log(id);
// id = "101pf"
// console.log(id);
// function printValue(value: string | number | boolean) {
//   console.log(value);
// }
// printValue("Hello");
// printValue(123);
// let data: (string | number)[] = [1, "hello", 2, "world"];
// console.log(data);
//  Interfaces
// interface student {
//     name : string,
//     age : number
// }
// let student1 : student ={
//     name : "Abdullah",
//     age : 20
// }
// console.log(student1);
//-----Enums-----//
// 'Admin' 'Student' student Student STUDENT ADMIN
// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// let currentDirection = CardinalDirections.East;
// console.log(currentDirection);
// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }
// StatusCodes.NotFound;
// Tuples
// let user : [string , number];
// user = ["Abdullah" , 20];
// console.log(user);
// let product:[number , string , boolean];
// product = [1 , "Laptop" , true];
// console.log(product);
// Type Guards
function hello(value) {
    if (typeof (value) === "number") {
        return `Number ${value}`;
    }
    return `value ${value}`;
}
console.log(hello(123));
;
console.log(hello("Abdullah"));
;
