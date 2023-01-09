import * as express from "express";

import db from "../../db";

const tagRouter = express.Router();

tagRouter.get("/", async (req, res) => {
  try {
    res.json(await db.blogs.getAllTags());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default tagRouter;
