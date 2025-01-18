import express, { Request, Response } from "express";

const router = express.Router();

import { borrowController } from "./borrow.controller";

router.post("/", borrowController.createBorrowEntry);

export const borrowRoute = router;
