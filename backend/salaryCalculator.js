const salaryCalculator = async(request,reply)=>{
    try {
        console.log(request);
        const body = request.body
        if(body.userSalary<=250000){
            return reply.send({
            statusCode: 200,
            message: `Hey ${body.userName} There is ₹0 Tax for salary ammount ${body.userSalary}`
        })
        }else if(body.userSalary<=500000){

            const tax = ((body.userSalary-250000)*5)/100
						console.log(`Text is ${tax}`);
            return reply.send({
            statusCode: 200,
            message: `Hey ${body.userName} There is ₹${tax} Tax for salary ammount ${body.userSalary} Tax rate is 5%`
        })
        }
        else if(body.userSalary<=1000000){

            const tax = ((body.userSalary-250000)*10)/100
						console.log(`Text is ${tax}`);

            return reply.send({
            statusCode: 200,
            message: `Hey ${body.userName} There is ₹${tax} Tax for salary ammount ${body.userSalary} Tax rate is 10%`
        })
        }
        else if(body.userSalary>1000000){

            const tax = ((body.userSalary-250000)*20)/100
						console.log(`Text is ${tax}`);
            return reply.send({
            statusCode: 200,
            message: `Hey ${body.userName} There is ₹${tax} Tax for salary ammount ${body.userSalary} Tax rate is 20%`
        })
        }

    } catch (error) {
        console.log('error from catch');
        console.log(error)
    return reply.send({
      statusCode: 400,
      message: 'Something Went Wrong'
    })
}
}

module.exports = {salaryCalculator}