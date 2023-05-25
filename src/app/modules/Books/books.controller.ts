import { NextFunction, Request, Response } from "express";
import { sendApiResponse } from "../../utils/responseHandler";
import {
  bookDetailsByIdUsingAggregate,
  createBooksToDb,
  getAllBooksFromDb,
  getBookDetailsByIdFromDb,
  getFantasyBooksFromDb,
  getRatingBooksFromDb,
  getSciFiByRoliBooks,
  getUpdatePriceFromDb,
  updateBulkBookPriceFromDb,
  updatePriceByIdFromDb,
} from "./books.service";

// Task:1
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const books = await createBooksToDb(data);

  sendApiResponse(res, 200, true, books);
};

// Task:2
export const getFantasyBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const fantasyBooks = await getFantasyBooksFromDb();
  sendApiResponse(res, 200, true, fantasyBooks);
};

// Task:3
export const getSciFiBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const SciFi = await getSciFiByRoliBooks();
  sendApiResponse(res, 200, true, SciFi);
};

// Task:4
export const getRatingBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ratingBooks = await getRatingBooksFromDb();
  sendApiResponse(res, 200, true, ratingBooks);
};

// Task:5, first way to update price using updateMany
export const updateBulkPrice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const price = await updateBulkBookPriceFromDb();
  sendApiResponse(res, 200, true, price);
};

// Task:5 second way to update price  using aggregate
export const updateBookPrice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ratingBooks = await getUpdatePriceFromDb();
  sendApiResponse(res, 200, true, ratingBooks);
};

// Task:6, update the price by id
export const updateBookPriceById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const price = await updatePriceByIdFromDb(id);
  sendApiResponse(res, 200, true, price);
};

// Task:7, get book detail by id using find
export const getBookDetailsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const book = await getBookDetailsByIdFromDb(id);
  sendApiResponse(res, 200, true, book);
};

// Task:7, get book detail by id using aggregate
export const bookDetailsById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const book = await bookDetailsByIdUsingAggregate(id);
  sendApiResponse(res, 200, true, book);
};

// Task:7, get all books by using aggregate
export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await getAllBooksFromDb();
  sendApiResponse(res, 200, true, book);
};
