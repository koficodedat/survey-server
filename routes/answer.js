const uniqid = require('lodash.uniqueid')

module.exports = async (fastify) => {
    fastify.post(
        '/answer', {}, async (request, reply) => {
            const { name, survey_id } = request.body;
            reply.code(200).send( fastify.db.save('answer', { _id: `${name}_${survey_id}`, ...request.body }) );
        }
    );

    fastify.put(
        '/answer', {}, async (request, reply) => {
            const { ids = '' } = request.query;
            reply.code(200).send( fastify.db.update('answer', (ids === '' && []) || ids.split(','), request.body) );
        }
    );

    fastify.get(
        '/answer', {}, async (request, reply) => {
            const { ids = '' } = request.query;
            reply.code(200).send( fastify.db.fetch( 'answer', (ids === '' && []) || ids.split(',') ) );
        }
    );
  }