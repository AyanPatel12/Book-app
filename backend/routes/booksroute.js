// routes/booksroute.js
import express from 'express';
// import { Book } from '../models/bookmodel';
import { Book } from '../models/bookmodel.js';

const router = express.Router();

// Save a new book
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = new Book ({
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
            genre: req.body.genre,
            // createdAt: new Date().toString(),
            });
        console.log("newBook",newBook);    
        const book = await Book.create(newBook);
        console.log("book",book)
        return res.status(201).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get one book by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({
                message: 'Book not found',
            });
        }
        return res.status(200).json({
            data: book,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Update a book
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!result) {
            return res.status(404).send({
                message: 'Book not found',
            });
        }
        return res.status(200).json({
            data: result,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Delete a book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({
                message: 'Book not found',
            });
        }
        return res.status(200).json({
            message: 'Book deleted successfully',
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router; // Add this line to export the router as the default export
