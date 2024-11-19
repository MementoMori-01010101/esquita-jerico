// Book class
class Book {
  constructor(title, author, genre, availability = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.availability = availability;
  }

  // Method to borrow a book
  borrowBook() {
    if (this.availability) {
      this.availability = false;
      console.log(`You have borrowed "${this.title}".`);
    } else {
      console.log(`Sorry, "${this.title}" is currently unavailable.`);
    }
  }

  // Method to return a book
  returnBook() {
    if (!this.availability) {
      this.availability = true;
      console.log(`You have returned "${this.title}".`);
    } else {
      console.log(`"${this.title}" was not borrowed.`);
    }
  }

  // Method to display book information
  displayInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Genre: ${
        this.genre
      }, Availability: ${this.availability ? "Available" : "Not Available"}`
    );
  }
}

// Library class
class Library {
  constructor() {
    this.books = []; // Array to store books
  }

  // Method to add a new book to the library
  addBook(title, author, genre) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
    console.log(`Book "${title}" has been added to the library.`);
  }

  // Method to search for a book by title
  searchBook(title) {
    const book = this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
    if (book) {
      book.displayInfo();
    } else {
      console.log(`Book "${title}" not found in the library.`);
    }
  }

  // Method to display all available books in the library
  displayBooks() {
    console.log("Available Books in the Library:");
    const availableBooks = this.books.filter((book) => book.availability);
    if (availableBooks.length === 0) {
      console.log("No books are currently available.");
    } else {
      availableBooks.forEach((book) => book.displayInfo());
    }
  }
}

// Testing the Library Management System
const myLibrary = new Library();

// Adding books to the library
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
myLibrary.addBook("1984", "George Orwell", "Dystopian");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");

// Display all available books
console.log("\nDisplaying all available books:");
myLibrary.displayBooks();

// Search for a specific book
console.log("\nSearching for the book '1984':");
myLibrary.searchBook("1984");

// Borrow a book
console.log("\nBorrowing '1984':");
const bookToBorrow = myLibrary.books.find((book) => book.title === "1984");
if (bookToBorrow) bookToBorrow.borrowBook();

// Display all available books after borrowing
console.log("\nDisplaying all available books after borrowing '1984':");
myLibrary.displayBooks();

// Return a book
console.log("\nReturning '1984':");
if (bookToBorrow) bookToBorrow.returnBook();

// Display all available books after returning
console.log("\nDisplaying all available books after returning '1984':");
myLibrary.displayBooks();
