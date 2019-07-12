import { Router } from "express";
import { addUser, getAllUsers, deleteUser, ifUserExistsLogin } from "./controller";
import { User } from "./models";

const router = Router();

router.get('/', async (req: Express.Request, res: any, next: any) => {
  try {
    res.send(await getAllUsers());
  } catch(e) {
    next(e);
  }
});

router.post('/login', async (req, res: any, next: any) => {
  try {
    res.send(await ifUserExistsLogin(req.body.email, req.body.password));
  } catch(e) {
    next(e);
  }
});

router.post('/', async (req, res: any, next: any) => {
  const user = req.body as User;
  try {
    await addUser(user);
    res.send('User created');
  } catch(e) {
    next(e);
  }
});

router.delete('/:id', async (req, res: any, next: any) => {
  try {
    await deleteUser(req.params.id);
    res.send('User deleted');
  } catch(e){
    next(e);
  }
});

export default router;
