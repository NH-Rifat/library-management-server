import express, { Request, Response } from "express";
import { bookController } from "./book.controller";

const router = express.Router();

router.post("/books", bookController.createBook);
router.get("/books", bookController.getAllBooks);

export const bookRoute = router;
