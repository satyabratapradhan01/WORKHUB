import express from "express";

import { createServer } from "node:http";

import { Server } from "socket.io";
import mongoose from "mongoose";
import connectDB from "./config/mongodb.js";

import cors from 'cors';
import dotenv from 'dotenv'

// app config
const app = express();
const server = createServer(app);
const io = new Server(server);
const port = process.env.PORT || 8080;
dotenv.config();
connectDB();


// middlewares


app.get("/", (req, res) => {
  res.send("Hello Satya...");

});

server.listen(port, () => {
  console.log(`Server started on PORT http://localhost:${port}`);
});
