const fp = require('fastify-plugin');

const DB = require('./db');

const UNCAUGHT_EXCEPTION = 'uncaughtException';
const UNHANDLED_REJECTION = 'unhandledRejection';

// const db_plugin = fp( (fastify, opts, next) => {
//   fastify.decorate('db', { db: new DB() });
// })

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

startServer(3001);
process.on(UNCAUGHT_EXCEPTION, err => console.error(`${UNCAUGHT_EXCEPTION}: `, err));
process.on(UNHANDLED_REJECTION, err => console.error(`${UNHANDLED_REJECTION}: `, err));