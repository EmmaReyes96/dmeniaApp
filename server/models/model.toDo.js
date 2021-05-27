const {model, Schema} = require('mongoose');

const toDoSchema = Schema({
    txt: {
        type: String
    },
    checkOut: {
        type: Boolean
    },
    uid:{
        type: String
    }
})

module.exports = model('toDo', toDoSchema);