import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import{ dbConnection } from"./database/dbConnection.js" 
import router from "./router/messRouter.js";

const app = express();

dotenv.config({path:"./config.env"});

app.use(cors({
    origin:["http://localhost:5173"],
    method:["POST"],
    credentials:true,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/message",router);

dbConnection();

export default app;