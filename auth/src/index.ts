import express from 'express';
import { json } from 'body-parser';
import { currentUserRouter } from "./currentuser";

const app = express();

app.use(json());

app.use(currentUserRouter);

app.listen(3000, () => console.log('server started at port 3000'))