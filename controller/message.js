import { TWILIO_SID, TWILIO_TOKEN } from '../index.js';

export const sendMessage = async (request, response) => {
  const { body } = request;

  console.log({ body, TWILIO_SID, TWILIO_TOKEN });

  return response.status(200).send({
    message: 'Translation successful. Message sent.',
  });
};
