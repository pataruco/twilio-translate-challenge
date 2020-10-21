import { translateAndSendMessage } from '../model/message.js';

export const sendMessage = async (request, response) => {
  const { body } = request;

  try {
    await translateAndSendMessage(body);
    return response.status(200).send({
      message: 'Translation successful. Message sent.',
    });
  } catch (error) {
    const { message } = error;
    return response(500).send({
      message,
    });
  }
};

// twilio-translate-lab
// 484610673764

// Google Translate API key AIzaSyDCJBFw1gFsre0RUilQyViRsHZAFyqfhPM
