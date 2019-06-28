import { Router } from "express";

const router = Router();

/* GET users listing. */
router.get('/', (req: Express.Request, res: any, next: any) => {
  res.send('respond with a resource');
});

export default router;
