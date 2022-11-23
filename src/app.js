import express from 'express';
import database from './libs/database.js';
import pictureRouter from './routes/picture.routes.js';
import albumRouter from './routes/album.routes.js';

database();

const app = express();

app.use(express.json());

app.use('/albums', albumRouter);
app.use('/pictures', pictureRouter);

export default app;