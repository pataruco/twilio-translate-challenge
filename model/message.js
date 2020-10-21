import twilio from 'twilio';
import dotenv from 'dotenv';
import { v2 } from '@google-cloud/translate';

dotenv.config();
const { TWILIO_SID, TWILIO_TOKEN, GOOGLE_API_PROJECT_ID } = process.env;
const { Translate } = v2;

const twilioClient = twilio(TWILIO_SID, TWILIO_TOKEN);
const translate = new Translate({ GOOGLE_API_PROJECT_ID });

const getTranslateWord = async ({ string, locale }) => {
  const [translation] = await translate.translate(string, locale);
  return translation;
};

const sendMessage = async ({ body, to, from = '+447401239415' }) =>
  await twilioClient.messages.create({
    body,
    to,
    from,
  });

export const translateAndSendMessage = async (body) => {
  const { message, lang, tel } = body;

  try {
    const translatedWord = await getTranslateWord({
      string: message,
      locale: lang,
    });
    const sentMessage = await sendMessage({
      body: translatedWord,
      to: tel,
    });
  } catch (error) {
    throw new Error(error);
  }
};
