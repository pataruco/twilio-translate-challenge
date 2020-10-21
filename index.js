import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
import messageRouter from './routes/message.js';
// midlewares
import httpLoggerMiddleware from './middleware/logger-middleware.js';
import jsonResponseMiddleware from './middleware/json-response.js';

const HOST = '127.0.0.1';
const PORT = 5000;

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
