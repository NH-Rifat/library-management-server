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
exports.borrowService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const insertBorrowEntryIntoDB = (borrow) => __awaiter(void 0, void 0, void 0, function* () {
    const newBorrow = yield prisma_1.default.borrowedBook.create({
        data: borrow,
    });
    return newBorrow;
});
const overdueBorrowedBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const overdueBooks = yield prisma_1.default.borrowedBook.findMany({
        include: {
            Book: {
                select: {
                    title: true,
                },
            },
            Member: {
                select: {
                    name: true,
                },
            },
        },
    });
    const data = overdueBooks.map((book) => {
        const borrowDate = new Date(book.borrowDate);
        // borrowed books must be returned within 14 days from the borrow date
        const returnDate = new Date(borrowDate.setDate(borrowDate.getDate() + 14));
        let returnDateFromDB;
        let overDueDaysRegardingReturnDate = 0;
        if (book.returnDate) {
            returnDateFromDB = new Date(book.returnDate);
            overDueDaysRegardingReturnDate = Math.floor((new Date().getTime() - returnDateFromDB.getTime()) / (1000 * 3600 * 24));
        }
        if (returnDate < new Date() ||
            (returnDateFromDB && overDueDaysRegardingReturnDate > 0)) {
            return {
                borrowId: book.borrowId,
                bookTitle: book.Book.title,
                borrowerName: book.Member.name,
                overDueDays: overDueDaysRegardingReturnDate > 0
                    ? overDueDaysRegardingReturnDate
                    : Math.floor((new Date().getTime() - returnDate.getTime()) /
                        (1000 * 3600 * 24)),
            };
        }
    });
    // remove null values from the array
    return data.filter((book) => book !== undefined);
});
exports.borrowService = {
    insertBorrowEntryIntoDB,
    overdueBorrowedBooks,
};
