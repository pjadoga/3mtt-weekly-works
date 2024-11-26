const Member = require('./Member');

class Librarian extends Member {
    constructor(name, memberId) {
        super(name, memberId);
    }

    addBook(book, library) {
        library.push(book);
        return `${book.getTitle()} added to the library`;
    }

    removeBook(book, library) {
        const index = library.indexOf(book);
        if (index > -1) {
            library.splice(index, 1);
            return `${book.getTitle()} removed from the library`;
        } else {
            return `${book.getTitle()} not found in the library`;
        }
    }

    checkAvailability(book) {
        return book.isBookAvailable();
    }
}

module.exports = Librarian;
