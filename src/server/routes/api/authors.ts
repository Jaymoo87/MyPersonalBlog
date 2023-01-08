import { Router } from "express";
import { tokenCheck } from "../../middlewares/auth.mw";
import { ReqAuthor } from "../../types";

const router = Router();

router.get("/", tokenCheck, (req: ReqAuthor, res) => {
  try {
    res.json({ message: `Logged IN! Enjoy Your Pizza!` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "currently shitting on the server" });
  }
});

export default router;
