/* const vozSelecionada = document.querySelector('#vozes') */
const btnVoltar = document.querySelector('#volta')
const btnAvanca = document.querySelector('#avanca')

/**
 * Controle dos Botões
 */

// 28 Localidades
const localidades = 999;
const ficha = document.querySelector('#form-ficha');
const reserva = document.querySelector('#form-reserva');

/**
 * Botão Próximo
 */

 btnAvanca.addEventListener('click', () => {
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

})

btnVoltar.addEventListener('click', () => {

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

})
