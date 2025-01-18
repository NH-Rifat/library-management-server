import express from "express";
import { bookRoute } from "../modules/Book/book.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: bookRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
