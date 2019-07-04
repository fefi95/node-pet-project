import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';
import * as mongoose from 'mongoose';

import usersRouter from "./users/routes";

const app: express.Application = express();
const port: number = 3000;

// TODO: move to its own file
mongoose.connect('mongodb://localhost:27018/pet-project', {
  useNewUrlParser: true,
  useCreateIndex: true
});


app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRouter);
app.listen(port, async () => {
  console.log(
    `Listening at http://localhost:${port}`
    );
});
