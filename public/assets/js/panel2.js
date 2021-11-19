const socket = io(ip.io); 

/** Identificando o Painel */  
const painel = document.querySelector('#atendimento');  

/** Removendo as animações */
painel.addEventListener('animationend', event => {
  painel.classList.remove('bounce-in-fwd'); 
});

const panelTitle = document.querySelector("#panel");  
if (panelTitle){  
  panelTitle.innerText = title.panel3;
}

/** Beep */
/*
function beep(){

  const controll = document.querySelector(".squares");

  // Se tiver no Painel emite som.
  if (controll) { 

    //https://marcgg.com/blog/2016/11/01/javascript-audio/
    const context = new AudioContext();

    const o = context.createOscillator();

    o.type = "sine";
    o.frequency.value = 830.6
    o.connect(context.destination);
    o.start();
    setTimeout(function(){ 
            o.stop();
    }, 100);

  }
}*/


/** Renderizar */
function renderPlace(message) {  

  if (message.painel == 3){ 
    //beep();
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


