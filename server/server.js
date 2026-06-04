import express from "express";
import cors from "cors";
import app from "./app.js";



app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
