import {Router} from "express";
import { create, get, read } from "../controllers/order";

const router = Router();

router.post("/orders",create);
router.get("/orders/:id",read);
router.get("/orders",get);

export default router;