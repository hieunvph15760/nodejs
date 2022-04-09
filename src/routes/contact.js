import {Router} from 'express';
import { create, getAll, remove } from '../controllers/contact';

const router = Router();

router.post('/contact',create);
router.get("/contact",getAll);
router.delete("/contact/:id",remove);

export default router;