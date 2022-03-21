const express = require('express')
const checkListRouter = require('./src/routes/checklist')
const app = express()



app.use('/checklist',checkListRouter)


app.listen(3002, ()=>{
    console.log('servidor ativo!')
})

