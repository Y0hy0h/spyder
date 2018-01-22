const express = require('express')
let exphbs = require('express-handlebars')

const app = express()

const http = require('http').Server(app)
const io = require('socket.io')(http)


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let data = {
    is_locked: false
}

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/status', function(req, res) {
    res.json(data)
})

app.get('/lock', function (req, res) {
    io.emit('lock-update', data.is_locked)
    res.send('Locked.')
})
app.get('/unlock', function (req, res) {
    io.emit('lock-update', data.is_locked)
    res.send('Unlocked.')
})

io.on('connection', function(socket) {
    socket.emit('lock-update', data.is_locked)
})

http.listen(3000, function () {
    console.log("We have started our server on port 3000");
})