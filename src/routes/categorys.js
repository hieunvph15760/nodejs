import { Router } from 'express';
import { create,getAll,read } from '../controllers/category';
import { checkAuth } from '../middleware/checkAuth'
const router = Router();
router.get("/categorys", checkAuth, getAll);
router.get("/category/:slug",checkAuth, read);
router.post('/category', checkAuth, create);
// router.delete("/products/:id", remove);
// router.put("/products/:id", update)
export default router;