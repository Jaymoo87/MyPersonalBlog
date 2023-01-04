import * as express from "express";
import blogRouter from "./blogs";
import donateRouter from "./donate";
import tagRouter from "./tags";
import contactRouter from './contact'



const indexRouter = express.Router()


indexRouter.use("/api/blogs", blogRouter)
indexRouter.use("/api/tags", tagRouter)
indexRouter.use("/api/donate", donateRouter)
indexRouter.use("/api/contact", contactRouter)



export default indexRouter;