import { Router } from 'express';
import { userById } from '../controllers/user';
import { create,getAll,read, remove, update } from '../controllers/category';
import { isAuth,requirseSignin,isAdmin } from '../middleware/checkAuth'
const router = Router();
router.get("/categories", getAll);
router.get("/categories/:id", read);
router.post('/categories/:userId',requirseSignin, isAuth, isAdmin, create);
router.put('/categories/:id/:userId',requirseSignin, isAuth, isAdmin, update);
router.delete('/categories/:id/:userId',requirseSignin, isAuth, isAdmin, remove);

router.param("userId",userById);
export default router;