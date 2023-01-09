import * as jwt from "jsonwebtoken";

import config from "../../config";

import { Router } from "express";
import { generateHash } from "../../utils/passwords";
import db from "../../db";

const router = Router();

router.post("/", async (req, res) => {
  const newAuthor = req.body;

  try {
    newAuthor.password = generateHash(newAuthor.password);
    const result = await db.authors.insert(newAuthor);
    result.insertID;
    //@ts-ignore
    const token = jwt.sign({ userid: result.insertID, email: newAuthor.email, role: 1 }, config.jwt.secret, {
      expiresIn: "10d",
    });
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "suck it up, fuck it up" });
  }
});

export default router;
