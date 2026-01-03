// console.log("hello world");

// const user = {
//     name: "Abdullah",
//     age: 22,
//     email: "abdullah@gmail.com",
//     isLoggedIn: true,
//     randomNums: Math.random()
// }

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     console.log("btn clicked");
//     localStorage.setItem("user" , JSON.stringify(user));
//     window.location = "about.html"

// })

// asyncronous

// set timeout
// set interval
// axios
// fetch
// promise
// async await

// console.log("first");
// console.log("second");
// setTimeout(() => {
//     console.log("third");
// }, 0);
// console.log("fourth");

// let data = data mangwalia
// console.log(data)

// setimeout ma 2 second or jab tk to data ajayega

// promises

// pending
// fulfilled
// rejected

// let age = 18;
// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (age >= 18) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 2000);
// });

// // promise execute krna
// console.log(promiseOne);

// promiseOne
//   .then(() => {
//     console.log("promise fulfilled hogaya");
//   })
//   .catch(() => {
//     console.log("promise reject hogaya.");
//   });

// shaadi scnz

// function istekhaaara(bankbalance) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (bankbalance >= 2000000) {
//         resolve("Shaadi hoskti haa. Tum ghar walo ko laa aao.");
//       } else {
//         reject(
//           "Ammi zehr khana ka keh rhi hain. Cousin raat ma sota waqt anghooti pehna ka chala gaya.Ma sorhi thi qasam sa mujha nahi pata kuch bhi."
//         );
//       }
//     }, 3000);
//   });
// }

// chaining
// finally

// istekhaaara(500)
//   .then((res) => {
//     console.log("then chalaiga");
//     console.log(res);
//     return res + " chaining concept";
//   })
//   .then((res) => {
//     console.log("chaining then");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("catch chalaiga");
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally laazmi chalaiga.");
//   });

// function goForSedan(budget) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (budget > 4000000) {
//         resolve("Go for sedan");
//       } else {
//         reject("Go for alto dabba");
//       }
//     }, 2000);
//   });
// }

// goForSedan(50000)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally laazmi chalaiga.");
//   });

// async function executePromise() {
//     try {
//         const wait = await goForSedan(5000000)
//         console.log(wait);
//     } catch (error) {
//         console.error(error)
//     }

// }

// try {
//     lert("hello")
// }catch(error){
//     console.error(error)
// }
// console.log("console after alert");

// executePromise()

// expense management system

// promises
// async await
// try catch
// fetch

// const div = document.querySelector(".container");

// fetch("https://api.freeapi.app/api/v1/public/randomusers")
//   .then((res) => res.json())
//   .then((res) => {
//     // console.log(res.data.data);
//     const data = res.data.data;
//     console.log(data);

//     data.map((item) => {
//       div.innerHTML += `<div class="children">
//         <p>Name: ${item.name.title} ${item.name.first} ${item.name.last}</p>
//         <p>Cell No: ${item.cell}</p>
//         <p>Email: ${item.email}</p>
//         <p>Birth Date: ${formatDate(item.dob.date)}</p>
//         </div>`;
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// function formatDate(input) {

//   const date = new Date(input);

//   const day = String(date.getUTCDate()).padStart(2, "0");
//   const month = String(date.getUTCMonth() + 1).padStart(2, "0");
//   const year = date.getUTCFullYear();

//   const formattedDate = `${day}-${month}-${year}`;

//   return formattedDate

// }

// fetch('https://api.freeapi.app/api/v1/public/quotes')
// .then(res => res.json())
// .then(res => {
//     console.log(res);

// }).catch(err => {
//     console.error(err);

// })

const div = document.querySelector(".container");

// async function getProducts(){
//     try {
//         const data = await fetch('https://dummyjson.com/products')
//         const product = await data.json();
//         console.log(product , '<></>');
//         product.products.map(item => {
//             div.innerHTML += `<div class="children">
//             <img src="${item.thumbnail}" width="200px"/>
//             <h2>${item.title}</h2>
//             <h3>${item.description}</h3>
//             </div>`
//         })
//     } catch (error) {
//         console.error(error);

//     }

// }

// getProducts()

const api =
  "https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=karachi&aqi=no";
const apiKey = "sadasd";

const form = document.querySelector("#form");
const input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=no`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      div.innerHTML = `<h1>${res.location.name}, ${res.location.country}</h1>
        <h1>${res.current.temp_c}</h1>`;
    })
    .catch((err) => {
      console.log(err);
    });
});

// https://weather-322.web.app/

fetch("http://api.github.com/mabdullahjs")
  .then((res) => res.json())
  .then((res) => console.log(res));



