import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import dbConnect from "./app/utils/dbConnect";

const app: Application = express();

app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// render ejs

dbConnect();

// all import routes here
import booksRoute from "./app/modules/Books/books.router";

// default routes
app.get("/", (req, res) => {
  res.send("This mongoose assignment");
});
// custom routes
app.use("/api/v1/books", booksRoute);

export { app };
