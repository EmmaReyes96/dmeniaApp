const getUser = require('./get-user');
const getUsers = require('./get-users');
const postUser = require('./post-user');
const putUser  = require('./put-user');
const deleteUser = require('./delete-user');

const login = require('./login');
const loginRenew = require('./login-renew');

const getToDo = require('./get-ToDoList');
const postToDo = require('./post-toDo');
const putToDo = require('./put-toDo');
const deleteToDo = require('./delete-toDo');


module.exports = {
    paths: {
        '/getAllUsers':{
            ...getUsers
        },
        '/getUser/{id}':{
            ...getUser
        },
        '/createUser':{
            ...postUser
        },
        '/editUser/{id}': {
            ...putUser      
        },
        '/deleteUser/{id}': {
            ...deleteUser     
        },
        // ------- login ----------
        '/login': {
            ...login  
        },
        '/login/renew': {
            ...loginRenew 
        },
        // ------- To Do ----------
        'listToDo/{id}': {
            ...getToDo
        },
        'newToDo/{id}': {
            ...postToDo
        },
        'updateToDo': {
            ...putToDo
        },
        'deleteToDo/{id}': {
            ...deleteToDo
        },
    }
}