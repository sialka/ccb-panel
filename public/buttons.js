function proximo(){

  // Identifica o Controle de Fichas
  if (document.getElementById('form-ficha')) {  
    
    const senha  = document.getElementById('painel-ficha').innerText;  
    let prox = parseInt(senha)+1;
  
    if (prox > 28 ) prox = 28;    
    document.getElementById('painel-ficha').innerText = prox;   

  }

  // Identifica o Controle de Reservas
  if (document.getElementById('form-reserva')) {  

    const senha  = document.getElementById('painel-reserva').innerText;  
    let prox = parseInt(senha)+1;
  
    if (prox > 28 ) prox = 28;    
    document.getElementById('painel-reserva').innerText = prox;   

  }

}

function anterior(){

  // Identifica o Controle de Fichas
  if (document.getElementById('form-ficha')) {  

    const senha  = document.getElementById('painel-ficha').innerText;  
    let prox = parseInt(senha)-1;
    
    if (prox < 1 ) prox = 1; 
    document.getElementById('painel-ficha').innerText = prox;   
  }

  // Identifica o Controle de Reservas
  if (document.getElementById('form-reserva')) {  

    const senha  = document.getElementById('painel-reserva').innerText;  
    let prox = parseInt(senha)-1;
  
    if (prox < 1 ) prox = 1; 
    document.getElementById('painel-reserva').innerText = prox;       

  }

}
