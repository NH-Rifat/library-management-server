import express, { Request, Response } from "express";
import { bookController } from "./book.controller";

const router = express.Router();

router.post("/books", bookController.createBook);
router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);

export const bookRoute = router;
