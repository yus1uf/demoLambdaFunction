const awsLambdaFastify = require('@fastify/aws-lambda')
const init = require('./fastify.app')

const proxy = awsLambdaFastify(init());

module.exports.handler =  (event) => proxy(event)