import { Router } from "express";
import authorRouter from "./authors";
import blogRouter from "./blogs";
import tagRouter from "./tags";
import contactRouter from "./contact";
import donateRouter from "./donate";

const router = Router();

router.use("/authors", authorRouter);
router.use("/blogs", blogRouter);
router.use("/tags", tagRouter);
router.use("/contact", contactRouter);
router.use("/donate", donateRouter);

export default router;
