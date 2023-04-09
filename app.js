import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/user-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING).then(r => console.log("Database connected" + r));

const app = express();

app.use(cors());
app.use(express.json());
HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4000);
