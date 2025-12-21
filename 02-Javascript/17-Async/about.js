console.log("hello about");

const user = JSON.parse(localStorage.getItem("user"));

console.log(user);

localStorage.removeItem("user");