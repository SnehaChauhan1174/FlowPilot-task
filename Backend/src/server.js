import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import user from "./models/user.js";

dotenv.config(); 

const app = express();
// const port = 3000

app.use(express.json());
app.use(cors());

connectDB();//mongodb connected

// const user1=new user({
//   name:"sneha",
//   email:"sneha@gmail.com",
//   password:"1234"
// })
// await user1.save();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port=process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
