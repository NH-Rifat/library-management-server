"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, jsonData) => {
    res.status(jsonData === null || jsonData === void 0 ? void 0 : jsonData.statusCode).json({
        status: jsonData === null || jsonData === void 0 ? void 0 : jsonData.statusCode,
        success: jsonData === null || jsonData === void 0 ? void 0 : jsonData.success,
        message: jsonData === null || jsonData === void 0 ? void 0 : jsonData.message,
        data: (jsonData === null || jsonData === void 0 ? void 0 : jsonData.data) || null || undefined,
        meta: (jsonData === null || jsonData === void 0 ? void 0 : jsonData.meta) || null || undefined,
    });
};
exports.sendResponse = sendResponse;
