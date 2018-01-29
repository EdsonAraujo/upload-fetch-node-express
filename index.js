const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.static('public'))
app.post('/upload', (req, res) => {
    let file = fs.createWriteStream('build.mp4')
    req.on('data', function (chunk) {
        file.write(chunk)
        console.log('chunk')
    })
    req.on('end', () => {
        file.end()
        res.send({ status: 'ok' })
        console.log('fim')
    })
})
app.listen(80, (err) => {
    if (err) console.log(err)
    else { console.log('servidor rodando na porta 80') }
})

