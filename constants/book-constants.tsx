enum BookGenre {
  Fiction = "Fiction",
  NonFiction = "Non-Fiction",
  Mystery = "Mystery",
  ScienceFiction = "Science Fiction",
  Biography = "Biography",
  Fantasy = "Fantasy",
  Romance = "Romance",
  Thriller = "Thriller",
  Historical = "Historical",
  Classic = "Classic",
}

const BookConstants = [
  {
    id: 1, // Unique and its INTEGER
    title: "The Great Gatsby", //STRING
    author: "F. Scott Fitzgerald", //STRING
    genre: BookGenre.Classic, //BookGenre
    summary:
      "A novel about the American dream and the decadence of the Jazz Age.", //STRING
    publishedYear: 1925, //INTEGER
    pages: 180, //INTEGER
    ratings: 4.2, //FLOAT
    language: "English", //STRING
    isbn: "9780743273565", //STRING
    publisher: "Scribner", //STRING
    bookCoverImageUrl:
      "https://m.media-amazon.com/images/I/71YF1hHLw7L._SL1360_.jpg", //STRING (URL)
    bookPDFUrl: "https://example.com/great-gatsby.pdf", //STRING (URL)
  },

  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: BookGenre.Fiction,
    summary:
      "A novel about racial injustice in the Deep South, seen through the eyes of a child.",
    publishedYear: 1960,
    pages: 281,
    ratings: 4.8,
    language: "English",
    isbn: "9780061120084",
    publisher: "J.B. Lippincott & Co.",
    bookCoverImageUrl:
      "https://m.media-amazon.com/images/I/71yoR-WCcfL._SL1500_.jpg",
    bookPDFUrl: "https://example.com/to-kill-a-mockingbird.pdf",
  },
];

export { BookGenre, BookConstants };
