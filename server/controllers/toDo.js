const ToDoModel = require('../models/model.toDo')

module.exports.getToDo = async (req, res) => {

    const uid = req.params.id
    const toDoDB = await ToDoModel.find({uid});

    try {
        
        if(!toDoDB){
            return res.status(404).json({
                ok:false,
                msg: 'no to-do list'
            })
        };

        res.status(200).json({
            ok: true,
            toDoDB
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'getToDo not function'
        })
    };
    
};
module.exports.postToDo = async (req, res) => {

    const uid = req.params.id;
    const toDoTXT = req.body.txt;

    try {

        const ToDo = {
            txt: toDoTXT,
            checkOut: false,
            uid
        };

        const newToDo = new ToDoModel(ToDo);

        await newToDo.save();

        res.status(201).json({
            ok: true,
            newToDo
        })



        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'postToDo not function'
        })
    };

};

module.exports.putToDo = async (req, res) => {

    const { _id, checkOut } = req.body;

    try {

        const toDoDB = await ToDoModel.findById({_id});

        if(!toDoDB){
            return res.status(404).json({
                ok: false,
                msg: 'to-do not exist'
            }) 
        };

        const toDo = {
            name: toDoDB.name,
            checkOut,
            uid: toDoDB.uid
        };

        const UpdateToDo = await ToDoModel.findByIdAndUpdate(_id, toDo, { new: true });

        res.status(201).json({
            ok:true,
            UpdateToDo
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'putToDo not function'
        })
    }
}
module.exports.deleteToDo = async (req, res) => {

    const id = req.params.id;

    try {

        const toDoDB = await ToDoModel.findById(id);

        if(!toDoDB){
            return res.status(404).json({
                ok: false,
                msg: 'to-do not exist'
            }) 
        };

        await ToDoModel.findByIdAndDelete(id);

        res.status(200).json({
            ok: true,
            msg: 'toDo deleted successfully'
        })


        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'deleteToDo not function'
        })
    }
}