import { NextFunction, Request, Response } from "express";
import { sendApiResponse } from "../../utils/responseHandler";
import {
  createBooksToDb,
  getFantasyBooksFromDb,
  getRatingBooksFromDb,
  getSciFiByRoliBooks,
  getUpdateBookPriceFromDb,
  getUpdatePriceFromDb,
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

// Task:5, first way to update the price
export const getUpdatePriceById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const { id } = req.params;
  const price = await getUpdateBookPriceFromDb();
  sendApiResponse(res, 200, true, price);
};

// Task:5 second way to update the price
export const getUpdateBookPrice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ratingBooks = await getUpdatePriceFromDb();
  sendApiResponse(res, 200, true, ratingBooks);
};
