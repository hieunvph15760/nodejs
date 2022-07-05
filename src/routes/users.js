import {Router} from 'express';
import { createUser, getUsers, remove, update } from '../controllers/user.js';

const router = Router();

router.get('/users',getUsers)
router.put('/users/:id',update);
router.delete('/users/:id',remove);
router.post('/users',createUser);


export default router;