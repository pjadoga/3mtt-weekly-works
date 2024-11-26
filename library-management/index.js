const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const Book = require('./models/Book');
const Member = require('./models/Member');
const Librarian = require('./models/Librarian');

const library = [];
const members = [];
const librarians = [];

const book1 = new Book('Python Programming', 'John Doe', '1234567890');
const book2 = new Book('Learning Java', 'Jane Doe', '0987654321');
const member = new Member('Alice', 'M001');
const librarian = new Librarian('Bob', 'L001');

library.push(book1, book2);
members.push(member);
librarians.push(librarian);

app.get('/', (req, res) => {
    res.send('Welcome to the Library Management System!');
});

app.get('/books', (req, res) => {
    res.json(library);
});

app.post('/books', (req, res) => {
    const { title, author, isbn } = req.body;
    const newBook = new Book(title, author, isbn);
    librarian.addBook(newBook, library);
    res.status(201).json(newBook);
});

app.post('/borrow', (req, res) => {
    const { memberId, isbn } = req.body;
    const member = members.find(m => m.getMemberId() === memberId);
    const book = library.find(b => b.getIsbn() === isbn);
    if (member && book) {
        res.json(member.borrowBook(book));
    } else {
        res.status(404).json({ error: 'Member or book not found' });
    }
});

app.get('/search', (req, res) => {
    const { title, author } = req.query;
    const results = library.filter(book =>
        (title && book.getTitle().toLowerCase().includes(title.toLowerCase())) ||
        (author && book.getAuthor().toLowerCase().includes(author.toLowerCase()))
    );
    res.json(results);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
