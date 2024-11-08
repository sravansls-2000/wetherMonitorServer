import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './connection.js';
import { loginController, registerUser } from './controller/userConroller.js';

const app = express();
const port = 8008;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(` Running the Port ${port}`);
});

Connection();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome Cricket API' });
});
app.post('/rigister', registerUser);
app.post('/login', loginController);
