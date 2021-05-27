const jwt = require('jsonwebtoken');

module.exports.generateJWT = (id) => {

    return new Promise( (resolve, reject) => {
        const payload = {id}

        jwt.sign( payload, process.env.JWT, { 
            expiresIn: '24h'
            }, (error, token ) => {
            if(error){
                console.log(payload);
                console.log(error);
                reject('JWT not generated')
            }else{
                resolve(token)
            }}
        )

    });

};