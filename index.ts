import express from "express";
import router from "./app/router/router";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/", router);

app.listen(4001, () => {
  console.log("Server is ready on http://localhost:4001");
});
