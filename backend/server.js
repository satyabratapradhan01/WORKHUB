import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { createServer } from "node:http";
import { Server } from "socket.io";
import connectDB from "./config/mongodb.js";
import userRouter from './router/userRoute.js'

// app config
const app = express();
const server = createServer(app);
const io = new Server(server);
const port = process.env.PORT || 8080;
dotenv.config();
connectDB();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//api endpoints
app.use('/api/user', userRouter)


app.get("/", (req, res) => {
  res.send("Api is working...");

});

server.listen(port, () => {
  console.log(`Server started on PORT http://localhost:${port}`);
});
