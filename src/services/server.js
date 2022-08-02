import express from 'express';
import http from 'http';
import path from 'path';
import { router as mainRouter } from '../routes/routes';
import cors from 'cors'

const bodyParser = require('body-parser')
/* ----------------------App config----------------------------- */ 
const publicFolderPath = path.resolve(__dirname, '../../public')
const app = express();
app.use(cors())
app.use(bodyParser.json()) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicFolderPath))
app.use('/api', mainRouter);

app.use(function (err, req, res, next) {
  return res.status(500).json({
    msg: 'There was an unexpected error',
    error: err.message,
  });
});
app.use(express.static(path.join(__dirname, '../client/build/')));
/* -------------------------------------------------------------- */
const httpServer = http.Server(app);

export default httpServer;