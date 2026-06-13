import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

const allTodos = [];

const checkMiddleware = (req, res, next) => {
  console.log("check middleware");
  next();
};

app.get("/", checkMiddleware, (req, res) => {
  res.send("Hello World!");
});

// create a new todo
app.post("/todo", (req, res) => {
  const { title } = req.body;
  allTodos.push({
    title,
    id: Date.now(),
  });

  res.status(201).json({
    message: "New todo created",
    todos: allTodos,
  });
});

// get all todo

app.get("/todo", (req, res) => {
  res.status(200).json({
    todo: allTodos,
  });
});

// get single todo

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  const index = allTodos.findIndex((item) => item.id === +id);
  console.log(index, id);

  if (index === -1) {
    return res.status(404).json({
      message: "todo not found",
    });
  }

  res.status(200).json({
    todos: allTodos[index],
  });
});

// delete todo

app.delete("/todo", (req, res) => {
  const { id } = req.params;
  const index = allTodos.findIndex((item) => item.id === +id);

  if (index === -1) {
    return res.status(404).json({
      message: "todo not found",
    });
  }

  allTodos.splice(index , 1);
  res.status(204).json({
    message: 'todo deleted',
    todos: allTodos
  })
});


// edit todo

app.put()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
