// console.log("hello world");

// arrow function

// function greetUser(username){
//     return `hello ${username}`
// }

// console.log(greetUser("abdullah"));

// ES6
// Ecma script

// const greetUser = (username) => {
//     return `hello ${username}`
// }
// const greetUser = username => `hello ${username}`
// const greetUser = (username , age) => (
//     `hello ${username} ${age}`
// )
// console.log(greetUser("abdullah"));

// hoisting
// var username;

// console.log(username); // undefined
// console.log(city); // error
// console.log(age); // error

// var username = "Abdullah"
// let city = "karachi";
// const age = 22;

// greetUser()
// // function greetUser(){
// //     console.log("hello abdullah");

// // }

// const greetUser = ()=>{
//     console.log("hello world");

// }

// js ka undar var or normal function hoisting support krta hain.

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Papaya",
  "Kiwi",
];

// foreach
// fruits.forEach(function (item , index , arr){
//     console.log(item , index , arr);

// })

// callback function wo function jo kisi bhi function k argument ma diya jata ha.
// higher order function wo function jiska argument ma callback ata ha
// fruits.forEach(()=>{})
// let arrloop = fruits.forEach((item , index)=>{
//     console.log(item , index);
//     return item

// })
// console.log("for each ===>" , arrloop);

// foreach or map ma farq ya haa k map return krta ha foreach return nahi krta

// map
// let arrLoop = fruits.map((item , index) => {
//     console.log(item , index);
//     return item + " updated"
// })

// console.log(arrLoop);

// filter

// const filteredItem = numbers.filter(item => {
//     return item > 2 && item < 7
// })
// console.log(filteredItem);

// reduce
// accumulater
// currentvalue
// initial value
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const total = numbers.reduce((acc, cval) => acc + cval, 0);

// console.log(total);

// chaining
// const chaining = numbers
//   .map((item) => item + 10)
//   .filter((item) => item > 15)
//   .map((item) => item - 10)
//   .reduce((acc, cval) => acc + cval);
// console.log(chaining);

// set timeout
// let timeout = setTimeout(()=>{
//     console.log("after 1 second");

// } , 1000)
// setinterval
// let num = 0
// let count = setInterval(()=>{
//     num += 1
//     console.log("interval after one second " , num);

// } , 100)

// function clearConsole(){
//     // clearInterval(count)
//     clearTimeout(timeout)
// }

const input = document.querySelector("#amount");
const category = document.querySelector("#category");
const remarks = document.querySelector("#remarks");
const btn = document.querySelector("#expense-btn");
const span = document.querySelector("#total-expense");
const div = document.querySelector(".expense-container");

const expenseCategories = [
  "Food",
  "Petrol",
  "Shopping",
  "Haircut",
  "Other Expenses",
  "Loan",
  "Health",
  "Travel",
];

const allExpenses = [];

expenseCategories.map((item) => {
  category.innerHTML += `<option value=${item}>${item}</option>`;
});

function getCurrentDateandTime() {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];

  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

function renderExpenses() {
  div.innerHTML = "";

  allExpenses.map((item, index) => {
    div.innerHTML += `<div class="expense-card">
    <p><strong>Amount:</strong> Rs ${item.amount}</p>
    <p><strong>Remarks:</strong> ${item.remarks}</p>
    <p><strong>Category:</strong> ${item.category}</p>
    <p><strong>Date:</strong> ${item.date}</p>

    <button class="delete-btn" onclick="deleteExpense(${index})">
        Delete
    </button>
</div>`;
  });

  span.innerHTML = calculatetotalExpense();
}

btn.addEventListener("click", () => {
  const expense = {
    amount: input.value,
    category: category.value,
    remarks: remarks.value,
    date: getCurrentDateandTime(),
  };

  console.log(expense);
  allExpenses.push(expense);
  renderExpenses();
});

function deleteExpense(index) {
  console.log(index);
  allExpenses.splice(index, 1);
  renderExpenses();
}

function calculatetotalExpense() {
  const totalExpense = allExpenses.reduce((acc, cval) => acc + +cval.amount, 0);

  return totalExpense;
}
