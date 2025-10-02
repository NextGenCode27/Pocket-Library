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
];

export { BookGenre, BookConstants };
