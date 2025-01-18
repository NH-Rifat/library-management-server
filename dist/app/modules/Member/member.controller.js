"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberController = void 0;
const response_1 = require("../../../shared/response");
const http_status_1 = __importDefault(require("http-status"));
const member_service_1 = require("./member.service");
const catchAsync_1 = require("../../../shared/catchAsync");
const createMember = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberData = req.body;
    const member = yield member_service_1.memberService.createMemberIntoDB(memberData);
    (0, response_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Member created successfully",
        data: member,
    });
}));
const getAllMembers = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield member_service_1.memberService.getAllMembersFromDB();
    (0, response_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "All members retrieved  successfully",
        data: members,
    });
}));
const getMemberById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const member = yield member_service_1.memberService.getMemberByIdFromDB(id);
    (0, response_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Member retrieved successfully",
        data: member,
    });
}));
const updateMemberById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const memberData = req.body;
    const member = yield member_service_1.memberService.updateMemberByIdIntoDB(id, memberData);
    (0, response_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Member updated successfully",
        data: member,
    });
}));
const deleteMemberById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield member_service_1.memberService.deleteMemberByIdFromDB(id);
    (0, response_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Member deleted successfully",
        data: result,
    });
}));
exports.memberController = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMemberById,
    deleteMemberById,
};
