import { sendResponse } from "../../../shared/response";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { bookService } from "./book.service";
import { catchAsync } from "../../../shared/catchAsync";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const bookData = req.body;
  const book = await bookService.createBookIntoDB(bookData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book created successfully",
    data: book,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const books = await bookService.getAllBooksFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books fetched successfully",
    data: books,
  });
});

const getBookById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await bookService.getBookByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book fetched successfully",
    data: book,
  });
});

const updateBookById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const bookData = req.body;
  const book = await bookService.updateBookByIdIntoDB(id, bookData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book updated successfully",
    data: book,
  });
});

const deleteBookById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await bookService.deleteBookByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book deleted successfully",
    data: result,
  });
});

export const bookController = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
