import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import { router } from './routes';

const HOST = process.env.FRONT_HOST || '0.0.0.0';
const PORT = parseInt(process.env.FRONT_PORT || '9090');

const server = express();
server.use(router);
server.listen(PORT, HOST, () => console.log(`listening on port ${PORT}`))
