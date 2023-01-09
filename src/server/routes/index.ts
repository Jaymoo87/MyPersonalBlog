import * as express from "express";

import apiRouter from "./api";
import authRouter from "./auth";

const indexRouter = express.Router();

indexRouter.use("/api", apiRouter);
indexRouter.use("/auth", authRouter);

export default indexRouter;
