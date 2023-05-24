import { IBooks } from "./books.interface";
import { Books } from "./books.model";

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

// Task: 5, first way to update the price
export const getUpdateBookPriceFromDb = async () => {
  return Books.updateMany(
    {
      publicationYear: { $gte: 2020 },
    },
    [{ $set: { price: { $toInt: "$price" } } }]
  );
};

// Task: 5, second way to update price
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
