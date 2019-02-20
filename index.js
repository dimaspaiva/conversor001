const express = require('express')
const app = express()
const http = require('http').Server(app)

const port = 3000


app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
   res.render('index')
})

http.listen(port, () => {
   console.log('rodando na porta ' + port)
})
