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
exports.memberService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createMemberIntoDB = (memberData) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.default.member.create({
        data: memberData,
    });
    return member;
});
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield prisma_1.default.member.findMany();
    return members;
});
const getMemberByIdFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    if (!member) {
        throw new Error("Member not found");
    }
    return member;
});
const updateMemberByIdIntoDB = (memberId, memberData) => __awaiter(void 0, void 0, void 0, function* () {
    // find the member by memberId
    const memberById = yield prisma_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    if (!memberById) {
        throw new Error("Member not found");
    }
    const member = yield prisma_1.default.member.update({
        where: {
            memberId,
        },
        data: memberData,
    });
    return member;
});
const deleteMemberByIdFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    // find the member by memberId
    const memberById = yield prisma_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    if (!memberById) {
        throw new Error("Member not found");
    }
    const member = yield prisma_1.default.member.delete({
        where: {
            memberId,
        },
    });
    return member;
});
exports.memberService = {
    createMemberIntoDB,
    getAllMembersFromDB,
    getMemberByIdFromDB,
    updateMemberByIdIntoDB,
    deleteMemberByIdFromDB,
};
