import express from "express";
import cors from "cors";
import mongoose from "mongoose";


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const allTodos = [];


// mongoose.connect("mongodb://abdullahawan00119_db_user:Abdullah123@ac-lbvfkbx-shard-00-00.by7ry0v.mongodb.net:27017,ac-lbvfkbx-shard-00-01.by7ry0v.mongodb.net:27017,ac-lbvfkbx-shard-00-02.by7ry0v.mongodb.net:27017/?ssl=true&replicaSet=atlas-3uaiko-shard-0&authSource=admin&appName=Cluster0")
  // .then(() => {
  //   console.log("MongoDB connected");
  // })
  // .catch((err) => {
  //   console.error("Connection error:", err);
  // });

// const checkMiddleware = (req, res, next) => {
//   console.log("check middleware");
//   next();
// };

// app.get("/", checkMiddleware, (req, res) => {
//   res.send("Hello World!");
// });

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

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  const index = allTodos.findIndex((item) => item.id === +id);

  if (index === -1) {
    return res.status(404).json({
      message: "todo not found",
    });
  }

  allTodos.splice(index, 1);
  res.status(200).json({
    message: "todo deleted",
    todos: allTodos,
  });
});

// edit todo

app.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const index = allTodos.findIndex((item) => item.id === +id);

  if (index === -1) {
    return res.status(404).json({
      message: "todo not found",
    });
  }

  allTodos[index].title = req.body.title;

  res.status(200).json({
    message: "todo edited successfully",
    todos: allTodos,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
