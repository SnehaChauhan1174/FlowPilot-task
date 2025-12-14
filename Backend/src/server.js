import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();
// const port = 3000

app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port=process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
