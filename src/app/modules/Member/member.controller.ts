import { sendResponse } from "../../../shared/response";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { memberService } from "./member.service";

const createMember = async (req: Request, res: Response) => {
  const memberData = req.body;
  const member = await memberService.createMemberIntoDB(memberData);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Member created successfully",
    data: member,
  });
};

const getAllMembers = async (req: Request, res: Response) => {
  const members = await memberService.getAllMembersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All members fetched successfully",
    data: members,
  });
};

export const memberController = {
  createMember,
  getAllMembers,
};
