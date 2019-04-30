let WebSocketServer = require('ws').Server
let http = require('http')
let express = require('express')
let app = express()
let port = 5003

app.use(express.static(__dirname + '/'))

let server = http.createServer(app)
server.listen(port)

let wss = new WebSocketServer({ server: server })

wss.on('connection', function (ws) {
  let id = setInterval(function ()
    ws.send(JSON.stringify({ 'random': Math.random() }), function () { })
  }, 10000)
  console.log('websocket connection open')

  ws.on('close', function () {
    console.log('websocket connection close')
    clearInterval(id)
  })
})
