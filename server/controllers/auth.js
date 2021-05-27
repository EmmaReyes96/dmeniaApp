const User = require('../models/model-user')
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

module.exports.login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const userDB = await User.findOne({email});
        
        if(!userDB){
            return res.status(400).json({
                ok: false,
                msg: 'account not exist'
            })
        }

        const validPassword = bcrypt.compareSync( password, userDB.password );
        
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'password not valid'
            })
        }
        
        const token = await generateJWT(userDB._id);
         
        res.json({
            ok: true,
            token,
            userDB
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'login not function'
        })
    }

    
}

module.exports.renewToken = async (req, res = response) => {
    
    const  uid = req.uid
    const  userDB = await User.findById( uid );

    // Generar el TOKEN - JWT
    const token = await generateJWT( uid );

    res.json({
        ok: true,
        token,
        userDB
    });


}