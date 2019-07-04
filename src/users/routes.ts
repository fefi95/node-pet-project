import { Router } from "express";
import { addUser, getAllUsers } from "./controller";
import { User, UserModel } from "./models";

const router = Router();

/* GET users listing. */
router.get('/', async (req: Express.Request, res: any, next: any) => {
  res.send(await getAllUsers());
});

router.post('/', async (req, res: any, next: any) => {
  const user = req.body as User;
  await addUser(user);
  res.send('User created')
});

export default router;
