import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import cors from 'cors';
import { router } from './routes';

const HOST = process.env.API_HOST || '0.0.0.0';
const PORT = parseInt(process.env.API_PORT || '9090');

const server = express();
server.use(cors())
server.use(router);

server.listen(PORT, HOST, () => console.log(`listening on port ${PORT}`))
