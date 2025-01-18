import express, { Request, Response } from "express";
import { memberController } from "./member.controller";

const router = express.Router();

router.post("/", memberController.createMember);
router.get("/", memberController.getAllMembers);

export const memberRoute = router;
