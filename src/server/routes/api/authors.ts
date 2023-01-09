import { Router } from "express";
import { tokenCheck } from "../../middlewares/auth.mw";

const router = Router();

router.get("/", tokenCheck, (req, res) => {
  try {
    res.json({ message: `Logged IN! Enjoy Your Pizza!` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "currently shitting on the server" });
  }
});

export default router;
