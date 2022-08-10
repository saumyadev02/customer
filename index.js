const express = require('express')
const app = express()
const PORT = '2022'

var helloworld = (req,res) =>{
    let message = "Hello World";
    res.status(200).send(message);
}

helloworld();


app.listen(PORT, () => {
    console.log('App listening at '+PORT)
})
  
module.exports = app;