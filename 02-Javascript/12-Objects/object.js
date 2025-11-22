// let arr = [""]

// // collection of key and properties is called object
// let user = {
//     fullname: "Muhammad Abdullah",
//     email: "mabdullah@gmail.com",
//     age: 22,
//     hobbies: ['cricket' , 'swimming' , 'eating'],
//     greetUser: function (){
//      console.log("hello " + this.fullname);
//      console.log(this);

//     },
//     isLoggedIn: true
// }

// console.log(user.age);
// console.log(user["fullname"]);

// console.log(user.isLoggedIn);
// user.greetUser()

// THIS

// console.log(this);
// window.alert()
// window.console.log()

// const companyInfo = {
//   name: "innovatrix tech",
//   founder: "ABD",
//   since: 2022,
//   members: ["hasnain", "rumman"],
// };

// // companyInfo = "testing"
// // update
// companyInfo.name = "Devistiq"

// // add
// companyInfo.newProp = "New property"

// // delete
// delete companyInfo.since

// console.log(companyInfo);

// const user = {
//     name: "abdullah",
//     greetUser: function (){
//         return `hello ${this.name}`
//     }
// }

// console.log(user.greetUser());

const users = [
  { id: 1,  name: "User 1",  email: "user1@example.com" },
  { id: 2,  name: "User 2",  email: "user2@example.com" },
  { id: 3,  name: "User 3",  email: "user3@example.com" },
  { id: 4,  name: "User 4",  email: "user4@example.com" },
  { id: 5,  name: "User 5",  email: "user5@example.com" },
  { id: 6,  name: "User 6",  email: "user6@example.com" },
  { id: 7,  name: "User 7",  email: "user7@example.com" },
  { id: 8,  name: "User 8",  email: "user8@example.com" },
  { id: 9,  name: "User 9",  email: "user9@example.com" },
  { id: 10, name: "User 10", email: "user10@example.com" },

  { id: 11, name: "User 11", email: "user11@example.com" },
  { id: 12, name: "User 12", email: "user12@example.com" },
  { id: 13, name: "User 13", email: "user13@example.com" },
  { id: 14, name: "User 14", email: "user14@example.com" },
  { id: 15, name: "User 15", email: "user15@example.com" },
  { id: 16, name: "User 16", email: "user16@example.com" },
  { id: 17, name: "User 17", email: "user17@example.com" },
  { id: 18, name: "User 18", email: "user18@example.com" },
  { id: 19, name: "User 19", email: "user19@example.com" },
  { id: 20, name: "User 20", email: "user20@example.com" },

  { id: 21, name: "User 21", email: "user21@example.com" },
  { id: 22, name: "User 22", email: "user22@example.com" },
  { id: 23, name: "User 23", email: "user23@example.com" },
  { id: 24, name: "User 24", email: "user24@example.com" },
  { id: 25, name: "User 25", email: "user25@example.com" },
  { id: 26, name: "User 26", email: "user26@example.com" },
  { id: 27, name: "User 27", email: "user27@example.com" },
  { id: 28, name: "User 28", email: "user28@example.com" },
  { id: 29, name: "User 29", email: "user29@example.com" },
  { id: 30, name: "User 30", email: "user30@example.com" },

  { id: 31, name: "User 31", email: "user31@example.com" },
  { id: 32, name: "User 32", email: "user32@example.com" },
  { id: 33, name: "User 33", email: "user33@example.com" },
  { id: 34, name: "User 34", email: "user34@example.com" },
  { id: 35, name: "User 35", email: "user35@example.com" },
  { id: 36, name: "User 36", email: "user36@example.com" },
  { id: 37, name: "User 37", email: "user37@example.com" },
  { id: 38, name: "User 38", email: "user38@example.com" },
  { id: 39, name: "User 39", email: "user39@example.com" },
  { id: 40, name: "User 40", email: "user40@example.com" },

  { id: 41, name: "User 41", email: "user41@example.com" },
  { id: 42, name: "User 42", email: "user42@example.com" },
  { id: 43, name: "User 43", email: "user43@example.com" },
  { id: 44, name: "User 44", email: "user44@example.com" },
  { id: 45, name: "User 45", email: "user45@example.com" },
  { id: 46, name: "User 46", email: "user46@example.com" },
  { id: 47, name: "User 47", email: "user47@example.com" },
  { id: 48, name: "User 48", email: "user48@example.com" },
  { id: 49, name: "User 49", email: "user49@example.com" },
  { id: 50, name: "User 50", email: "user50@example.com" }
];


// console.log(users[1].name);

const div = document.querySelector(".container");
for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
  div.innerHTML += `
        <div class="children">
            <h1>Name: ${users[i].name}</h1>
            <h4>Email: ${users[i].email}</h4>
        </div>
  
  `
}

//obj banana haa name,email,age,greetuser uska baad firstname and lastname baad ma add krna haa or name delete krna ha. greet user ka function jab bhi call hoo to wo return kraa hello '${name}'

// 4 formfields banaingi name , email , age, city jaisa hi user submit pa click kraiga mera pass console ma aik object ajayega jiska undar values form wali hongi

// const fullname = document.querySelector("#fullname")
// const email = document.querySelector("#email")
// const number = document.querySelector("#number")
// const city = document.querySelector("#city")

// function getVal(){

//     const obj = {
//         fullname: fullname.value,
//         email: email.value,
//         number: number.value,
//         city: city.value,
//     }

//     console.log(obj);

// }



// const nestedObj = {
//     names: {
//         firstPosition: ['abdullah', 'usman', 'haseeb', 'abubakar'],
//         secondPosition: [{
//             names: ['Ali', 'babar']
//         }, {
//             names: [{ names: ['hammad'] }]
//         }]
//     }
// }

// console.log(nestedObj.names.secondPosition[1].names[0].names[0]);





let nestedData = [
    {
        category: "Electronics",
        subcategories: [
            {
                name: "Smartphones",
                products: [
                    { brand: "Apple", model: "iPhone 13", price: 999 },
                    { brand: "Samsung", model: "Galaxy S21", price: 799 },
                    { brand: "Google", model: "Pixel 6", price: 699 }
                ]
            },
            {
                name: "Laptops",
                products: [
                    { brand: "Apple", model: "MacBook Pro", price: 1499 },
                    { brand: "Dell", model: "XPS 13", price: 1299 },
                    { brand: "HP", model: "Spectre x360", price: 1199 }
                ]
            }
        ]
    },
    {
        category: "Clothing",
        subcategories: [
            {
                name: "Men's",
                products: [
                    { brand: "Nike", item: "T-shirt", price: 25 },
                    { brand: "Adidas", item: "Joggers", price: 40 }
                ]
            },
            {
                name: "Women's",
                products: [
                    { brand: "Zara", item: "Dress", price: 50 },
                    { brand: "H&M", item: "Jeans", price: 30 }
                ]
            }
        ]
    }
];


console.log(nestedData[0].subcategories[1].products[0].model);
