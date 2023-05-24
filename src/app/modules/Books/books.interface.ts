interface Publisher {
  name: string;
  location: string;
}

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

export interface IBooks extends Document {
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  rating: number;
  price: number;
  publisher: Publisher;
  reviews: Review[];
}

// export interface IBooks extends Document {
//   title: string;
//   author: string;
//   genre: string;
//   publicationYear: number;
//   publisher: string;
//   reviews: string;
//   rating: number;
//   price: number;
// }
