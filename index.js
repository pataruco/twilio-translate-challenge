import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
import dotenv from 'dotenv';

import messageRouter from './routes/message.js';
// midlewares
import httpLoggerMiddleware from './middleware/logger-middleware.js';
import jsonResponseMiddleware from './middleware/json-response.js';

dotenv.config();
const HOST = '127.0.0.1';
const PORT = 5000;
export const { TWILIO_SID, TWILIO_TOKEN } = process.env;

const server = express();
// midlewares
server.use(bodyParser.json());
server.use(httpLoggerMiddleware);
server.use(jsonResponseMiddleware);

// routes
server.use(messageRouter);

server.listen(PORT, () =>
  logger.info(`server listening ${JSON.stringify({ HOST, PORT })}`),
);
