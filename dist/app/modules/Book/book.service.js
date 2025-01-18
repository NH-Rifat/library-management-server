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
exports.bookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBookIntoDB = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.create({
        data: bookData,
    });
    return book;
});
const getAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield prisma_1.default.book.findMany();
    return books;
});
const getBookByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    if (!book) {
        throw new Error("Book not found");
    }
    return book;
});
const updateBookByIdIntoDB = (id, bookData) => __awaiter(void 0, void 0, void 0, function* () {
    // find the book by id
    const bookById = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    if (!bookById) {
        throw new Error("Book not found");
    }
    const book = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data: bookData,
    });
    return book;
});
const deleteBookByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // find the book by id
    const bookById = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    if (!bookById) {
        throw new Error("Book not found");
    }
    const book = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return book;
});
exports.bookService = {
    createBookIntoDB,
    getAllBooksFromDB,
    getBookByIdFromDB,
    updateBookByIdIntoDB,
    deleteBookByIdFromDB,
};
