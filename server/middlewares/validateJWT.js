const jwt = require('jsonwebtoken')

module.exports.validateJWT = (req, res, next) => {

    const token = req.header('x-token');

    if(!token){
        res.status(400).json({
            ok:false,
            msg: 'token not exist'
        })
    }

    try {

        const { id } = jwt.verify( token, process.env.JWT )
        req.uid = id;
        next();
        
    } catch (error) {
        res.status(400).json({
            ok:false,
            msg: 'token not valid'
        })
    }
}