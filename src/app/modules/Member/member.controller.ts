import { sendResponse } from "../../../shared/response";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { memberService } from "./member.service";
import { catchAsync } from "../../../shared/catchAsync";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const memberData = req.body;
  const member = await memberService.createMemberIntoDB(memberData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member created successfully",
    data: member,
  });
});

const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const members = await memberService.getAllMembersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All members retrieved  successfully",
    data: members,
  });
});

const getMemberById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const member = await memberService.getMemberByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member retrieved successfully",
    data: member,
  });
});

const updateMemberById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const memberData = req.body;
  const member = await memberService.updateMemberByIdIntoDB(id, memberData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member updated successfully",
    data: member,
  });
});

const deleteMemberById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await memberService.deleteMemberByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member deleted successfully",
    data: result,
  });
});

export const memberController = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
