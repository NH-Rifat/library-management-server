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
exports.borrowController = void 0;
const response_1 = require("../../../shared/response");
const http_status_1 = __importDefault(require("http-status"));
const borrow_service_1 = require("./borrow.service");
const catchAsync_1 = require("../../../shared/catchAsync");
const createBorrowEntry = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowData = req.body;
    const borrow = yield borrow_service_1.borrowService.insertBorrowEntryIntoDB(borrowData);
    (0, response_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Borrow borrowed  successfully",
        data: borrow,
    });
}));
const getOverdueBorrowedBooks = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const overdueBooks = yield borrow_service_1.borrowService.overdueBorrowedBooks();
    (0, response_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Overdue borrowed books fetched successfully",
        data: overdueBooks,
    });
}));
exports.borrowController = {
    createBorrowEntry,
    getOverdueBorrowedBooks,
};
