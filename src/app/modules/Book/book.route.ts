import express, { Request, Response } from "express";
import { bookController } from "./book.controller";

const router = express.Router();

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.patch("/:id", bookController.updateBookById);
router.delete("/:id", bookController.deleteBookById);

export const bookRoute = router;
