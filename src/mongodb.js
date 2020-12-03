const mongoose = require('mongoose');
const db = "mongodb+srv://demo:demo@cluster0.0csqm.mongodb.net/taskManager?retryWrites=true&w=majority"

const connectDB  = async () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false
        }).then(() => console.log(`Database connected successfully`))
        .catch(err =>{ 
            console.log(err);
            return;
        })
    } catch (error) {
        console.error(error.message)
        //exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;