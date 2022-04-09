import { Router } from 'express';
import { userById } from '../controllers/user';
import { create, get, list, remove, search, sort, update } from '../controllers/products';
import { isAuth,requirseSignin,isAdmin } from '../middleware/checkAuth'
    
const router = Router();
router.get("/products", list);
router.get("/products/:id", get);
router.post('/products/:userId', requirseSignin, isAuth, isAdmin, create);
router.delete("/products/:id/:userId",requirseSignin, isAuth, isAdmin, remove);
router.put("/products/:id/:userId",requirseSignin, isAuth, isAdmin, update);
router.get('/productsSearch',search);
router.get('/productsSort',sort);


router.param("userId",userById);

export default router;