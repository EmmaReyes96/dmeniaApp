const { Router } = require('express');
const { check } = require('express-validator');

const { validate } = require('../middlewares/validate');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

const user = require('../controllers/user');
const auth = require('../controllers/auth');
const toDo = require('../controllers/toDo');
const request = require('../controllers/request');

router.get('/getAllUsers', user.getUsers);

router.get('/getUser/:id', user.getUser);

router.post('/createUser', [
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'la contraseña es obligatorio').not().isEmpty(),
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    validate
], user.postUser);

router.put('/editUser/:id', [
    validateJWT,
    check('email', 'el email es obligatorio').isEmail(),
    check('name', 'el nombre es obligatorio').not().isEmpty(),
    validate
], user.putUser);

router.delete('/deleteUser/:id', validateJWT, user.deleteUser);

// ------------- login ---------------------

router.post('/login',[
    check('email', 'el email es obligatorio').isEmail(),
    check('password', 'la contraseña es obligatorio').not().isEmpty(),
], auth.login);

router.get('/login/renew', validateJWT , auth.renewToken)

// ------------- To Do ---------------------

router.get('/listToDo/:id', validateJWT, toDo.getToDo );

router.post('/newToDo/:id', [
    validateJWT,
    check('txt', 'ingresar un texto es obligatorio').not().isEmpty(),
    validate
], toDo.postToDo )

router.put('/updateToDo', validateJWT, toDo.putToDo);

router.delete('/deleteToDo/:id', validateJWT, toDo.deleteToDo);

// ------------- request ---------------------

router.get('/res200', request.res200)
router.get('/res201', request.res201)
router.get('/res301', request.res301)
router.get('/res400', request.res400)
router.get('/res404', request.res404)
router.get('/res418', request.res418)
router.get('/res500', request.res500)


module.exports = router;