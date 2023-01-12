import { Router } from "express";
import { tokenCheck } from "../../middlewares/auth.mw";
import loginRouter from "./login";
import registerRouter from "./register";

const router = Router();

router.get("/token_status", tokenCheck, async (req, res) => {
  res.status(200).json({ message: "Token Present" });
});

router.use("/login", loginRouter);
router.use("/register", registerRouter);

export default router;
