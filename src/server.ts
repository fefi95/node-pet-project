import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import usersRouter from "./routes/users";

const app: express.Application = express();
const port: number = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.listen(port, async () => {
  console.log(
    `Listening at http://localhost:${port}`
    );
});
