import express from "express";

const app = express();

// app.use("/", router);

app.listen(4001, () => {
  console.log("Server is ready on http://localhost:4001");
});
