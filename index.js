const express = require('express')
const ejs = require('ejs')
const fs = require('fs')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', express.static(__dirname + '/public/'))  

port = 80

app.listen(port, () =>{
    console.log(`Site accesible sur http://127.0.0.1:${port}`)
})

app.get('/', (req, res) =>{
    res.render(`${__dirname}/public/index.ejs`, {
        mots : ['im Verein', 'pâtes', 'claiver']
    })
})

app.post('/verif', (req, res) =>{
    
})