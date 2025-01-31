"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRoute = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const router = express_1.default.Router();
router.post("/", member_controller_1.memberController.createMember);
router.get("/", member_controller_1.memberController.getAllMembers);
router.get("/:id", member_controller_1.memberController.getMemberById);
router.patch("/:id", member_controller_1.memberController.updateMemberById);
router.delete("/:id", member_controller_1.memberController.deleteMemberById);
exports.memberRoute = router;
