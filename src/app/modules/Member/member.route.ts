import express, { Request, Response } from "express";
import { memberController } from "./member.controller";

const router = express.Router();

router.post("/", memberController.createMember);
router.get("/", memberController.getAllMembers);
router.get("/:id", memberController.getMemberById);
router.patch("/:id", memberController.updateMemberById);
router.delete("/:id", memberController.deleteMemberById);

export const memberRoute = router;
