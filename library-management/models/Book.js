class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getIsbn() {
        return this.isbn;
    }

    isBookAvailable() {
        return this.isAvailable;
    }

    setAvailability(status) {
        this.isAvailable = status;
    }
}

module.exports = Book;
