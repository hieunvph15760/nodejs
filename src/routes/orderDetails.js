import {Router} from "express";
import { create } from "../controllers/orderDetails.js";

const router = Router();

router.post("/orderDetails",create);

export default router;