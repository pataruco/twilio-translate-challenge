export const sendMessage = async (request, response) => {
  const { body } = request;

  console.log({ body });

  return response.status(200).send({
    message: 'Translation successful. Message sent.',
  });
};
