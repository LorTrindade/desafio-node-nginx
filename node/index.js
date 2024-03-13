const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
})
const sql = `INSERT INTO people(name) values('Marta')`
connection.query(sql)

app.get('/', (req, res) => {
    const query = `SELECT name FROM people`
    const people = connection.query(query, function (err, result, fields) {
        let table = '<table>'
        for (const person of result) {
            table += `<tr><td>${person.name}</td></tr>`
        }
        table += '</table>'
        res.send('<h1>Full Cycle Rocks! </h1>' + table)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
})