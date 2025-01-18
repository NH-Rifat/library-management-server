import express, { Request, Response } from "express";
import { bookController } from "./book.controller";

const router = express.Router();

router.get("/", bookController.getAllBooks);

export const bookRoute = router;
