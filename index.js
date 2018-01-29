const express = require('express')
const app = express()
const fs = require('fs')
var router = express.Router()
app.use(router)
app.use(express.static('public'))
app.set('view engine', 'jade')
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' })
})

router.post('/upload', function(req, res){
    const file = fs.createWriteStream('file.mp4')
    req.on('data',function(chunk){
        file.write(chunk)
    }).on('end',function(){
        file.end() 
        res.send({status: 'ok'})
    })
    
})
app.listen(3000, err => {
    if (err) console.log(err)
    else { console.log('server running') }
})