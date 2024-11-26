class Member {
    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }

    getName() {
        return this.name;
    }

    getMemberId() {
        return this.memberId;
    }

    getBorrowedBooks() {
        return this.borrowedBooks;
    }

    borrowBook(book) {
        if (book.isBookAvailable()) {
            book.setAvailability(false);
            this.borrowedBooks.push(book);
            return `${this.name} borrowed ${book.getTitle()}`;
        } else {
            return `${book.getTitle()} is not available`;
        }
    }
}

module.exports = Member;
