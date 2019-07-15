const assert = require('assert');

const { buildServer, stopServer } = require('./../../setup');

let fastify;
describe('Routes -[answer]', () => {

    before(() => { fastify = buildServer(); });
    after(() => { stopServer(fastify); });

    describe('post()', () => {
        it('return valid reponse', () => {
            fastify.inject(
                {
                    method: 'POST',
                    url: '/answer',
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

    describe('put()', () => {
        it('return valid reponse', () => {
            fastify.inject(
                {
                    method: 'PUT',
                    url: '/answer',
                    payload: {
                        ids: ''
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
                    url: `/answer`,
                }, (err, response) => {
                    assert.strictEqual(err, null);
                    assert.strictEqual(response.statusCode, 200);
                    assert.deepStrictEqual(response.body, JSON.stringify([{ _id:'A_A', name:'A', survey_id:'A' }]));
                }
            );
        });
    });
});