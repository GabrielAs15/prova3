import endpoints from './endpoints.js';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const server = express();
server.use(cors());
server.use(express());
server.use(endpoints);

server.listen(process.env.PORT,
                 () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));