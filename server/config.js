const mongoose =  require('mongoose');

module.exports.dbConnection = async() => {
    try {
        await mongoose.connect( process.env.DB , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB online');
    } catch (error) {
        console.log(error);
    }
}