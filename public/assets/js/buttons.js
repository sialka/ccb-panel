/**
 * Controle dos Botões
 */

const localidades = 28;

const ficha = document.querySelector('#form-ficha');
const reserva = document.querySelector('#form-reserva');


/**
 * Botão Próximo
 */
function proximo(){

  //const ficha = document.querySelector('#form-ficha');
  //const reserva = document.querySelector('#form-reserva');

  // Controle de Fichas
  if (ficha) {      
    const senha = document.querySelector('#painel-ficha');
    let prox = parseInt(senha.innerText)+1;  
    
    if (prox > localidades ) prox = localidades;    
    
    senha.innerText = prox;    
  }

  // Controle de Reservas
  if (reserva) {      
    const senha = document.querySelector('#painel-reserva');
    let prox = parseInt(senha.innerText)+1;
  
    if (prox > localidades ) prox = localidades;    
    
    senha.innerText = prox;    
  }

}

function anterior(){

  // Identifica o Controle de Fichas
  if (ficha) {      
    const senha = document.querySelector('#painel-ficha');
    let prox = parseInt(senha.innerText)-1;
    
    if (prox < 1 ) prox = 1; 
    
    senha.innerText = prox;
  }

  // Identifica o Controle de Reservas
  if (reserva) {      
    const senha = document.querySelector('#painel-reserva');
    let prox = parseInt(senha.innerText)-1;
  
    if (prox < 1 ) prox = 1; 
    
    senha.innerText = prox;       
  }

}


