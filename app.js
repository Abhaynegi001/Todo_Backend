import express from "express";
import dotenv from "dotenv";
import userrouter from "./routes/user.route.js";
import taskrouter from "./routes/task.route.js";
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config();

export const app = express();

//middleware
// json data except krne ka liya.....
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods:['GET','POST',"PUT","DELETE"],
  Credential:true        // header bhejna ka liya  ...cookie
}))

app.use("/api/v1/users", userrouter);
app.use("/api/v1/task", taskrouter);

app.use((err, req, res, next) => {
  return res.status(404).res.json({
    success: false,
    message: err.message,
  });
});
