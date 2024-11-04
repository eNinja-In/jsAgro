import express from "express";
import {registerController, loginController} from '../controllers/authController.js'
import { requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post('/new-user',requireSignIn, registerController)
router.post('/login-user', loginController)
// router.get('/test', requireSignIn, textController)
export default router;