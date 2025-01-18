import { sendResponse } from "../../../shared/response";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { borrowService } from "./borrow.service";

const createBorrowEntry = async (req: Request, res: Response) => {
  const borrowData = req.body;
  const borrow = await borrowService.insertBorrowEntryIntoDB(borrowData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Borrow borrowed  successfully",
    data: borrow,
  });
};

export const borrowController = {
  createBorrowEntry,
};
