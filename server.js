const express = require('express')
const app = express()
const port= require('./config')
app.get('/',(req,res)=>{
     res.send('hellll00000')
})

app.listen(port, () => {
    console.log("Sever started on http://localhost:3434")
})