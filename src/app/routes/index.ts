import express from "express";
import { bookRoute } from "../modules/Book/book.route";
import { memberRoute } from "../modules/Member/member.route";

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
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
