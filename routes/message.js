import express from 'express';
import { sendMessage } from '../controller/message.js';

const messageRouter = express.Router();

messageRouter.get('/message', sendMessage);

export default messageRouter;
