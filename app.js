const express = require('express')
const mysql = require('mysql2');

const mysqlConfig = {
  host: "mysql_server",
  user: "plao",
  password: "1234",
  database: "my_db"
}

let con = null

const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})