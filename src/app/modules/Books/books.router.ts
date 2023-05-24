import { Router } from "express";
import {
  createBook,
  getFantasyBooks,
  getRatingBooks,
  getSciFiBooks,
  getUpdateBookPrice,
  getUpdatePriceById,
} from "./books.controller";

const router: Router = Router();

// Task:1
router.post("/create-book", createBook);

// Task:2
router.get("/fantasy-books", getFantasyBooks);

// Task:3
router.get("/sciFi-books", getSciFiBooks);

// Task:4
router.get("/rating-books", getRatingBooks);

// Task:5, first way to update price
router.patch("/update-price", getUpdatePriceById);

// Task:5, second way to update price
router.get("/update-all-price", getUpdateBookPrice);

export default router;
