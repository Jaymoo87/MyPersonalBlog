import * as jwt from "jsonwebtoken";
import * as passport from "passport";

import db from "../../db";
import config from "../../config";

import { Router } from "express";
import { ReqAuthor } from "../../types";

const router = Router();

router.post("/", passport.authenticate("local", { session: false }), (req: ReqAuthor, res) => {
  try {
    //@ts-ignore
    const token = jwt.sign({ userid: req.user.id, email: req.user.email, role: 1 }, config.jwt.secret, {
      expiresIn: "10d",
    });
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "suck it up, fuck it up" });
  }
});

export default router;
