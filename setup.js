const DB = require('./db');

const db = new DB();
const buildServer = () => {
    const fastify = require('fastify')({
      ignoreTrailingSlash: true,
    });

    // add decorators. 
    fastify.decorate('db', {
      getter() {
        return db;
      }
    });
    
    // register routes
    fastify.register( require('./routes/base') );
    fastify.register( require('./routes/user') );
    fastify.register( require('./routes/survey') );
    fastify.register( require('./routes/answer') );
  
    return fastify;
}

const startServer = async (port) => {
    const fastify = buildServer();
    try {
      const info = `Server running on ${port}`;
      await fastify.listen(port);
      console.info(info);
    } 
    catch(err) {
      console.error(err);
      process.exit(1);
    }
}

const stopServer = fastify => {
  fastify.close();
}

module.exports = { buildServer, startServer, stopServer };