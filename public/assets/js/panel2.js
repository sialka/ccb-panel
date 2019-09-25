//const socket = io('http://localhost:3000');
const socket = io('http://192.168.15.23:3000'); 
//const socket = io('http://192.168.0.107:3000');



/** Identificando o Painel */

  
const painel = document.querySelector('#atendimento');  

/** Removendo as animações */
painel.addEventListener('animationend', event => {
  painel.classList.remove('bounce-in-fwd'); 
});




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



/** Renderizar */
function renderPlace(message) {  

  if (message.painel == 3){ 
    beep();
    painel.innerHTML = message.place;            
    painel.classList.add('bounce-in-fwd');      
  }

}

/** Socket */
socket.on('previousMessages', function(messages){
  for (message of messages) {
    renderPlace(message);  
  }
});

socket.on('receivedMessage', function(message){
  renderPlace(message);
});


