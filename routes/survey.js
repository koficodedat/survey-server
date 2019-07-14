const uniqid = require('lodash.uniqueid')

module.exports = async (fastify) => {
    fastify.post(
        '/survey', {}, async (request, reply) => {
            reply.code(200).send( fastify.db.save('survey', { _id: uniqid('survey_'), ...request.body }) );
        }
    );

    fastify.get(
        '/survey', {}, async (request, reply) => {
            const { ids = '' } = request.query;
            reply.code(200).send( fastify.db.fetch( 'survey', (ids === '' && []) || ids.split(',') ) );
        }
    );
  }