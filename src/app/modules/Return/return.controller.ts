import { sendResponse } from "../../../shared/response";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { returnService } from "./return.service";
import { catchAsync } from "../../../shared/catchAsync";

const createReturnEntry = catchAsync(async (req: Request, res: Response) => {
  const returnData = req.body;
  const returnEntry = await returnService.insertReturnEntryIntoDB(returnData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book returned successfully",
    // data: returnEntry,
  });
});

export const returnController = {
  createReturnEntry,
};
