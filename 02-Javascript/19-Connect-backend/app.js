fetch("http://localhost:3000/todo")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const input = document.querySelector("#input");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(input.value);

  fetch("http://localhost:3000/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: input.value
    }),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
});
