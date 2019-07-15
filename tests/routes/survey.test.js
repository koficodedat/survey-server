const assert = require('assert');

const { buildServer, stopServer } = require('./../../setup');

let fastify;
describe('Routes -[survey]', () => {

    before(() => { fastify = buildServer(); });
    after(() => { stopServer(fastify); });

    describe('post()', () => {
        it('return valid reponse', () => {
            fastify.inject(
                {
                    method: 'POST',
                    url: '/survey',
                    payload: {
                        name: 'A',
                        survey_id: 'A',
                    }
                }, (err, response) => {
                    assert.strictEqual(err, null);
                    assert.strictEqual(response.statusCode, 200);
                    assert.strictEqual(response.body, 'true');
                }
            );
        });
    });

    describe('get()', () => {
        it('return valid reponse', () => {
            fastify.inject(
                {
                    method: 'GET',
                    url: '/survey',
                }, (err, response) => {
                    assert.strictEqual(err, null);
                    assert.strictEqual(response.statusCode, 200);
                    assert.deepStrictEqual(response.body, JSON.stringify([{ _id:'survey_1', name:'A', survey_id:'A' }]));
                }
            );
        });
    });
});