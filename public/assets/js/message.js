//const socket = io('http://localhost:3000');
const socket = io('http://192.168.15.30:3000'); 
//const socket = io('http://192.168.0.107:3000');
const time = 2200;

/** Beep */
function beep(){

  //https://marcgg.com/blog/2016/11/01/javascript-audio/
  const context = new AudioContext();

  const o = context.createOscillator();

  o.type = "triangle";
  o.connect(context.destination);
  o.start();
  setTimeout(function(){ 
          o.stop();
  }, 500);
}

/** Time */
function waitButton(){
  const btn = document.querySelector('button');
  btn.setAttribute('disabled','disabled');
  setTimeout(() => btn.removeAttribute('disabled'), time);  
}

/** Renderizar */
function renderSenha(message) {

  if (message.painel == 1){ 
    waitButton();

    const painelFicha = document.querySelector('#painel-ficha');
    
    beep();

    painelFicha.innerHTML = message.message;        
    
    painelFicha.style.animation = "";
    setTimeout(() => painelFicha.style.animation = "wobble-hor-bottom 0.8s both", 8);      
    
  }

  if (message.painel == 2){ 
    waitButton();

    const painelReserva = document.querySelector('#painel-reserva');
    
    beep();
    
    painelReserva.innerHTML = message.message; 

    painelReserva.style.animation = "";
    setTimeout(() => painelReserva.style.animation = "wobble-hor-bottom 0.8s both", 8);          
  }
  
}

/** Socket */
socket.on('previousMessages', function(messages){

  for (message of messages) {
    renderSenha(message);  
  }
});

socket.on('receivedMessage', function(message){
  renderSenha(message);
});


/** Submit */
$('#btnSubmit').submit(function(event) {
  
  event.preventDefault();

  // Identifica o Controle de Fichas
  if (document.getElementById('form-ficha')) {  
    
    const message = document.getElementById('painel-ficha').innerText;  

    if (message.length) {

      var messageObject1 = {      
        painel: 1,
        message: message
      };

      renderSenha(messageObject1);

      socket.emit('sendMessage', messageObject1);
    }   

  }

  // Identificando o Controle Reserva
  if (document.getElementById('form-reserva')) {
  
    var message = document.getElementById('painel-reserva').innerText;  

    if (message.length) {
      var messageObject2 = {      
        painel: 2,
        message: message
      };

      renderSenha(messageObject2);

      socket.emit('sendMessage', messageObject2);
    }

  }

});