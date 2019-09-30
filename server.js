const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res)=> {
  res.render('index.html');
});

// armazenando conversas
let messages = [];

// tipo de conexão do usuario 
io.on('connection', socket => {
  console.log(`Socket conectado: ${socket.id}`);

  socket.emit('previousMessages', messages)

  socket.on('sendMessage', data => {
    // console.log(data);
    messages.push(data);
    // Enviando conversas para o frontend
    socket.broadcast.emit('receivedMessage', data);
  });
});

server.listen(3000, () => {  
  console.log('---------------');
  console.log('CCB Painel 2019');
  console.log('---------------');
  console.log('');
  console.log('Instruções:');
  console.log('');
  console.log('Utilizando um navegador: Chrome ou Mozilla');
  console.log('');
  console.log('• Acesse http://192.168.0.56:3000');
  console.log('');
  console.log('-------------------------------------------');
});