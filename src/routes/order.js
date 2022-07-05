import {Router} from "express";
import { create, get, read } from "../controllers/order.js";

const router = Router();

router.post("/orders",create);
router.get("/orders/:id",read);
router.get("/orders",get);

export default router;