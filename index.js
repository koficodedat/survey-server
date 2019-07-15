const { startServer } = require('./setup');

const UNCAUGHT_EXCEPTION = 'uncaughtException';
const UNHANDLED_REJECTION = 'unhandledRejection';

startServer(3001);

process.on(UNCAUGHT_EXCEPTION, err => console.error(`${UNCAUGHT_EXCEPTION}: `, err));
process.on(UNHANDLED_REJECTION, err => console.error(`${UNHANDLED_REJECTION}: `, err));