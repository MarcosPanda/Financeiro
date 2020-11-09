const express = require ('express')
const app = express()
const mysql = require('mariadb')

var server = {
    port:8082
}

app.get('/',(req, res) => {
    res.send('Servidor respondendo')
})

app.listen(server, () => {console.log(`Server starting at port: ${server.port}`)})