import { Router } from "express";
import { addUser, getAllUsers, deleteUser } from "./controller";
import { User } from "./models";

const router = Router();

router.get('/', async (req: Express.Request, res: any, next: any) => {
  res.send(await getAllUsers());
});

router.post('/', async (req, res: any, next: any) => {
  const user = req.body as User;
  await addUser(user);
  res.send('User created');
});

router.delete('/:id', async (req, res: any, next: any) => {
  await deleteUser(req.params.id);
  res.send('User deleted');
});

export default router;
