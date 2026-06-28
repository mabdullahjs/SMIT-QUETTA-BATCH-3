import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/db/index.js'
import todosRoutes from './src/routes/todos.route.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Hello World! ${process.env.MONGO_URI}`)
})


// routes
app.use('/api/v1' , todosRoutes)

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });