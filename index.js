const express = require('express')
const router = require('./routes/student.route')
const app = express()

app.use(express.json()) 

app.use("/student",router)

app.listen(8060,()=>{
    console.log('server running 8060')
})