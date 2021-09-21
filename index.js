const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/usersRoute')
const app = express()

app.use(bodyParser.urlencoded({extended : false}))
userRoute(app)

app.get('/', function(req, res){
    res.send('Esta é uma API')
})

app.listen(8080, function(){
    console.log('Servidor ligado!')
})
