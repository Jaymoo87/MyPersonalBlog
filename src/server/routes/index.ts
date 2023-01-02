import * as express from "express";
import blogRouter from "./blogs";
import DonateRouter from "./donate";
import tagRouter from "./tags";



const indexRouter = express.Router()


indexRouter.use("/api/blogs", blogRouter)
indexRouter.use("/api/tags", tagRouter)
indexRouter.use("/api/donate", DonateRouter)



export default indexRouter;