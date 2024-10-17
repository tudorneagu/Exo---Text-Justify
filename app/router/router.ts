import { Router } from "express";
import userController from "../controllers/userController";
import justifyController from "../controllers/justifyController";

const router: Router = Router();

router.post("/api/token", userController.loginUser);
router.post("/api/justify", justifyController.formatText);

export default router;
