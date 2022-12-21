import * as express from "express";
import blogRouter from "./blogs";
import tagRouter from "./tags";



const indexRouter = express.Router()


indexRouter.use("/api/blogs", blogRouter)
indexRouter.use("/api/tags", tagRouter)



export default indexRouter;