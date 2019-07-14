module.exports = async (fastify) => {
    fastify.post(
        '/user/:name', {}, async (request, reply) => {
            const { name } = request.params;

            if( fastify.db.fetch('user', name.split(',')).length === 0 ){
                reply.code(200).send( fastify.db.save('user', { _id: name }) );
            }
            else reply.code(200).send( true );
        }
    );

    fastify.get(
        '/user', {}, async (request, reply) => {
            const { ids = '' } = request.query;
            reply.code(200).send( fastify.db.fetch( 'user', (ids === '' && []) || ids.split(',') ) );
        }
    );
  }