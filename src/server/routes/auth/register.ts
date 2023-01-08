import * as jwt from "jsonwebtoken";

import config from "../../config";

import { Router } from "express";
import { generateHash } from "../../utils/passwords";
import db from "../../db";

const router = Router();

router.post("/", async (req, res) => {
  const newUser = req.body;

  try {
    newUser.password = generateHash(newUser.password);
    const result = await db.authors.insert(newUser);
    result.insertID;
    //@ts-ignore
    const token = jwt.sign({ userid: result.insertID, email: newUser.email, role: 1 }, config.jwt.secret, {
      expiresIn: "10d",
    });
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "suck it up, fuck it up" });
  }
});

export default router;
