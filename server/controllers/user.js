const User = require('../models/model-user')
const ToDoModel = require('../models/model.toDo')

const bcript = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');


module.exports.getUsers = async (req, res) => {

    
    try {
        const usersDB = await User.find()

        if(!usersDB){
            return res.status(400).json({
                ok: false,
                msg: 'I have not registered any account'
            })
        }

        res.json({
            ok: true,
            usersDB
        })       
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'getUsers not function'
        })
    }
}

module.exports.getUser = async (req, res) => {


    const uid = req.params.id
    
    try {
        const userDB = await User.findById(uid)

        if(!userDB){
            return res.status(400).json({
                ok: false,
                msg: 'I have not registered any account'
            })
        }
        res.json({
            ok: true,
            userDB
        })       
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'getUsers not function'
        })
    }
}

module.exports.postUser = async(req, res = response) => {

  const { email, password } = req.body;

  try {

    const userExist = await User.findOne({email})

    if( userExist ){
        return res.status(400).json({
            ok: false,
            msg: 'error: email exist'
        })
    }else{
        const newUser = new User(req.body);

        const salt = bcript.genSaltSync();
        newUser.password = bcript.hashSync( password , salt );

        await newUser.save();

        const token = await generateJWT(newUser.id)

        res.json({
            ok: true,
            msg: 'Congratulation: user created!',
            newUser,
            token
        })
    }
      
  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: 'postUsers not function'
    })
  }
}

module.exports.putUser = async (req, res) => {

    const uid = req.params.id;

    try {

        const userDB = await User.findById(uid)

        if(!userDB){
            return res.status(400).json({
                ok: false,
                msg: 'user not exist in DB'
            })
        }

        const {password, email, ...fields } = req.body;

        if(userDB.email != email){
            const userExist = await User.findOne({email})
            if(userExist){
                return res.status(400).json({
                    ok:false,
                    mag: 'email exist'
                })
            }
        }

        fields.email = email;
        const UpdateUser = await User.findByIdAndUpdate(uid, fields, { new: true })

        res.json({
            ok:true,
            UpdateUser
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'putUser not function'
        })
    }

}

module.exports.deleteUser = async (req, res) => {

    const uid = req.params.id

    try {

        const userDB = await User.findById(uid);

        if(!userDB){
            return res.status(400).json({
                ok: false,
                msg: 'user not exist in DB'
            })
        }

        await User.findByIdAndDelete(uid)
        await ToDoModel.collection.remove({uid})

        res.json({
            ok: true,
            msg: 'User deleted successfully'
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'deleteUser not function'
        })
    }
}