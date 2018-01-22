const express = require('express')
let exphbs = require('express-handlebars')

const app = express()

const http = require('http').Server(app)
const io = require('socket.io')(http)


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/lock', function (req, res) {
    io.emit('lock-update', true)
    res.send('Locked.')
})
app.get('/unlock', function (req, res) {
    io.emit('lock-update', false)
    res.send('Unlocked.')
})

io.on('connection', function(socket) {
    console.log("New connection")
    io.emit('lock-update', true)
})

http.listen(3000, function () {
    console.log("We have started our server on port 3000");
})