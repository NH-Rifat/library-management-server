"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoute = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/", book_controller_1.bookController.createBook);
router.get("/", book_controller_1.bookController.getAllBooks);
router.get("/:id", book_controller_1.bookController.getBookById);
router.patch("/:id", book_controller_1.bookController.updateBookById);
router.delete("/:id", book_controller_1.bookController.deleteBookById);
exports.bookRoute = router;
