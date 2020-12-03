const express = require('express');
const app = express();
const connectDb = require('./mongodb');

const port = process.env.PORT || 3000
app.use(express.json())

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    connectDb();
    console.log("Server at "+port)
})

