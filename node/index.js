const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

app.get('/', (req, res) => {
    const connection = mysql.createConnection({
        host: 'dbt',
        user: 'root',
        password: 'root',
        database: 'nodepeople',
    })
    
    const sql = `INSERT INTO peoplee(name) values('Marta')`
    connection.query(sql)
    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
})