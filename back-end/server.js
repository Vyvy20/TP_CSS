const http = require('http')
const express = require('express')
const app = express()

app.use(express.json())

app.get('*', function(req, res) {
    res.json({ 
        code: 404,
        response: "Page Not Found"
    });
});

const server = http.createServer(app)

server.listen(8001, () => {
    console.log("your server is start http://localhost:8001/");
})