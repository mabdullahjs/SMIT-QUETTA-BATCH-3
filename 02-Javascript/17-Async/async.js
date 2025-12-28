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


// promises
// async await
// try catch
// fetch



// expense management system


