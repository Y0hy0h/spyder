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

app.get('/status', function (req, res) {
    res.json(data)
})

app.get('/lock', function (req, res) {
    data.is_locked = true
    broadcast_update()
    res.send('Locked.')
})
app.get('/unlock', function (req, res) {
    data.is_locked = false
    broadcast_update()
    res.send('Unlocked.')
})

io.on('connection', function (socket) {
  socket.emit('lockUpdate', data.is_locked)
})

function broadcast_update() {
  io.emit('lockUpdate', data.is_locked)
}

http.listen(3000, function () {
    console.log("We have started our server on port 3000");
})