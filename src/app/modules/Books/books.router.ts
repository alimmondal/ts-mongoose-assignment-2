import { Router } from "express";
import {
  bookDetailsById,
  createBook,
  getAllBooks,
  getBookDetailsById,
  getFantasyBooks,
  getRatingBooks,
  getSciFiBooks,
  updateBookPrice,
  updateBookPriceById,
  updateBulkPrice,
} from "./books.controller";

const router: Router = Router();

// Task:8, get all books using find or aggregate
router.get("/all-books", getAllBooks);

// Task:1
router.post("/create-book", createBook);

// Task:2
router.get("/fantasy-books", getFantasyBooks);

// Task:3
router.get("/sciFi-books", getSciFiBooks);

// Task:4
router.get("/rating-books", getRatingBooks);

// Task:5, first way to update price using updateMany
router.patch("/update-price", updateBulkPrice);

// Task:5, second way to update price  using aggregate
router.get("/update-all-price", updateBookPrice);

// extra work
// Task:6, update price by id
router.patch("/update-id-price/:id", updateBookPriceById);

// Task:7, get details of books by id using find
router.get("/:id", getBookDetailsById);

// Task:7, get details of books by id using find
router.get("/book-detail/:id", bookDetailsById);

export default router;
