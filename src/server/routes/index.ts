import * as express from "express";
import blogRouter from "./blogs";
import donateRouter from "./donate";
import tagRouter from "./tags";
import contactRouter from "./contact";
import apiRouter from "./api";
import authRouter from "./auth";

const indexRouter = express.Router();

indexRouter.use("/api/blogs", blogRouter);
indexRouter.use("/api/tags", tagRouter);
indexRouter.use("/api/donate", donateRouter);
indexRouter.use("/api/contact", contactRouter);
indexRouter.use("/api", apiRouter);
indexRouter.use("/auth", authRouter);

export default indexRouter;
