import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { join } from 'path';

import { datas } from './datas/index';

const app: Express = express();
app.use(cors());
const port = 8080;

// Route exemple
app.get('/helloworld', (_req: Request, res: Response) => {
	res.json({ message: 'Hello Worldss !' });
});

// Make a route /users here
// Don't forget to use the user type
app.get('/users', (_req: Request, res: Response) => {
	// get list of all users
	// console.log(res);
	// console.log(datas);

	// res.json(datas);
	//res.json([{ name: 'Rim', email: 'rim@laplateforme.io'}]);

	// res.send({ datas: [{ name: 'Rim', email: 'rim@laplateforme.io'}], userType: 'lol'});
	res.send({ datas: [...datas] });

});

// Bonus:
// - Make a second route /user/id to get one user
// - Make a route to update an user /user/id
app.get('/user/id', (_req: Request, res: Response) => {
	res.json({});
});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
