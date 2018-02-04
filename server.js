const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hellll00000')
})

app.listen(2222, () => {
    console.log("Sever started on http://localhost:3434")
})