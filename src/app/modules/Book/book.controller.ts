import { sendResponse } from "../../../shared/response";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { bookService } from "./book.service";

const getAllBooks = async (req: Request, res: Response) => {
  const books = await bookService.getAllBooksFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books fetched successfully",
    data: books,
  });
};

export const bookController = {
  getAllBooks,
};
