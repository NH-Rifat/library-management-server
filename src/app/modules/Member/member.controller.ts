import { sendResponse } from "../../../shared/response";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { memberService } from "./member.service";

const createMember = async (req: Request, res: Response) => {
  const memberData = req.body;
  const member = await memberService.createMemberIntoDB(memberData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
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

const getMemberById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const member = await memberService.getMemberByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member fetched successfully",
    data: member,
  });
};

const updateMemberById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const memberData = req.body;
  const member = await memberService.updateMemberByIdIntoDB(id, memberData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member updated successfully",
    data: member,
  });
};

const deleteMemberById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await memberService.deleteMemberByIdFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member deleted successfully",
    data: result,
  });
};

export const memberController = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
