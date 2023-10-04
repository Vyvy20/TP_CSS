const http = require('http');
const express = require('express')
const app = express()

const server = http.createServer(app)

server.listeners(8001, "localhost",() => {
    console.log("your server is start http://localhost:8001/");
})