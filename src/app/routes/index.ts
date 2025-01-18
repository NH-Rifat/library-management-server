import express from "express";
import { bookRoute } from "../modules/Book/book.route";
import { memberRoute } from "../modules/Member/member.route";
import { borrowRoute } from "../modules/Borrow/borrow.route";
import { returnRoute } from "../modules/Return/return.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: bookRoute,
  },
  {
    path: "/members",
    route: memberRoute,
  },
  {
    path: "/borrow",
    route: borrowRoute,
  },
  {
    path: "/return",
    route: returnRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
