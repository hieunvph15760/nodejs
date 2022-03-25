import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/products';
import { checkAuth,isAuth,requirseSignin } from '../middleware/checkAuth'
// requirseSignin, isAuth,
const router = Router();
router.get("/products", checkAuth, list);
router.get("/products/:id", get);
router.post('/products', create);
router.delete("/products/:id", remove);
router.put("/products/:slug", update)
export default router;