import express from "express";
import database from "./libs/database.js";

database();

const app = express();

app.use(express.json);

export default app;