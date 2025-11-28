type Book = {
  title: string;
  author: string;
  year: number;
};

let Books: Book[] = [];

function addBook(book: Book): void {
  Books.push(book);
  console.log(`Book titled "${book.title}" added successfully.`);
}

function listBooks(): void {
  console.log("List of Books:");
  Books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

function searchBook(title: string): void | Book | null {
  const foundBook = Books.find(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );
  if (foundBook) {
    return foundBook;
  }
  return null;
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
