import express, { Request, Response } from "express";
import { borrowController } from "../Borrow/borrow.controller";
import { returnController } from "./return.controller";

const router = express.Router();

router.post("/", returnController.createReturnEntry);

export const returnRoute = router;
