import { IBooks } from "./books.interface";
import { Books } from "./books.model";
const ObjectId = require("mongodb").ObjectId;

// Task: 1
export const createBooksToDb = async (payload: IBooks): Promise<IBooks> => {
  const books = new Books(payload);
  await books.save();
  return books;
};

// Task:2
export const getFantasyBooksFromDb = async (): Promise<IBooks[]> => {
  return Books.aggregate([
    {
      $match: {
        genre: "Fantasy",
      },
    },
  ]);
};

//Task:3
export const getSciFiByRoliBooks = async (): Promise<IBooks[]> => {
  return Books.aggregate([
    {
      $match: {
        genre: "Sci-Fi",
        "publisher.name": "Roli Books",
      },
    },
  ]);
};

// Task: 4
export const getRatingBooksFromDb = async (): Promise<IBooks[]> => {
  return Books.aggregate([{ $match: { rating: { $gte: 4 } } }]);
};

// Task: 5, first way to update price using updateMany
export const updateBulkBookPriceFromDb = async () => {
  return Books.updateMany(
    {
      publicationYear: { $gte: 2020 },
    },
    [{ $set: { price: { $toInt: "$price" } } }]
  );
};

// Task: 5, second way to update price using aggregate
export const getUpdatePriceFromDb = async (): Promise<IBooks[]> => {
  return Books.aggregate([
    {
      $match: {
        publicationYear: {
          $gte: 2020,
        },
        price: {
          $type: "string",
        },
      },
    },
    {
      $addFields: {
        price: {
          $convert: {
            input: "$price",
            to: "int",
          },
        },
      },
    },
  ]);
};

// Task: 6, update the price by id
export const updatePriceByIdFromDb = async (id: string) => {
  return Books.updateOne(
    {
      _id: id,
      publicationYear: { $gte: 2020 },
    },
    [{ $set: { price: { $toInt: "$price" } } }]
  );
};

// Task: 7, get details of the book by id using find
export const getBookDetailsByIdFromDb = async (
  payload: string
): Promise<IBooks | null> => {
  const book = await Books.findOne({ _id: payload });

  return book;
};

// Task: 7, get details of the book by id using aggregation
export const bookDetailsByIdUsingAggregate = async (
  payload: string
): Promise<IBooks[]> => {
  // const book = await Books.findOne({ _id: payload });
  const book = await Books.aggregate([
    {
      $match: {
        _id: new ObjectId({ id: payload }),
      },
    },
  ]);
  return book;
};
