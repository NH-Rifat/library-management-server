import { sendResponse } from "../../../shared/response";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { borrowService } from "./borrow.service";
import { catchAsync } from "../../../shared/catchAsync";

const createBorrowEntry = catchAsync(async (req: Request, res: Response) => {
  const borrowData = req.body;
  const borrow = await borrowService.insertBorrowEntryIntoDB(borrowData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Borrow borrowed  successfully",
    data: borrow,
  });
});

const getOverdueBorrowedBooks = catchAsync(
  async (req: Request, res: Response) => {
    const overdueBooks = await borrowService.overdueBorrowedBooks();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Overdue borrowed books fetched successfully",
      data: overdueBooks,
    });
  }
);

export const borrowController = {
  createBorrowEntry,
  getOverdueBorrowedBooks,
};
