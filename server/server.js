import express from "express";
import cors from "cors";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
