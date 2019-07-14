module.exports = async (fastify) => {
  fastify.get(
    '/', async () => 'Survey is up and ready to serve'
  );
}