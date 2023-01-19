const fastify = require('fastify')
const {salaryCalculator} = require('./salaryCalculator')

function init (){
    console.log('init started');
    try {
        const app = fastify()
        app.post('/api/calculateTax',(request,reply)=>{
            salaryCalculator(request,reply)
        })
        return app
    } catch (error) {
    console.log(`Error from fastify ${error}`)
        
    }
}

module.exports = init;