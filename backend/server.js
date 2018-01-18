const express = require('express')
let exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let is_locked = false
app.get('/', function (req, res) {
  res.render('index', { lockStatus: is_locked ? "Is locked." : "Is not locked."})
})
app.get('/lock', function (req, res) {
    is_locked = true;
    res.send('Locked.')
})
app.get('/unlock', function (req, res) {
    is_locked = false;
    res.send('Unlocked.')
})

app.listen(3000, function () {
    console.log("We have started our server on port 3000");
})