const assert = require('assert');

const { buildServer, stopServer } = require('../../setup');

let fastify;
describe('Routes -[base]', () => {
    before(() => { fastify = buildServer(); });
    after(() => { stopServer(fastify); });

    describe('get()', () => {
        it('return valid reponse', () => {
            fastify.inject(
                {
                    method: 'GET',
                    url: '/'
                }, (err, response) => {
                    assert.strictEqual(err, null);
                    assert.strictEqual(response.statusCode, 200);
                    assert.strictEqual(response.body, 'Survey is up and ready to serve');
                }
            );
        });
    });
});