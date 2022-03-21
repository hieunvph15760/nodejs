import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/products';
import { checkAuth } from '../middleware/checkAuth'
const router = Router();
router.get("/products", checkAuth, list);
router.get("/product/:slug", get);
router.post('/products', checkAuth, create);
router.delete("/products/:slug", remove);
router.put("/products/:slug", update)
export default router;