const places = document.querySelector('#places');
const emAtendimento = document.querySelector('#atendimento');

function resete(){  

  const local = [
    ['21-0225','BAIRRO DOS PIMENTAS'],
    ['21-0227','CIDADE ARACILIA'],
    ['21-0778','CIDADE TUPINAMBÁ'],
    ['21-0232','JARDIM ALICE'],
    ['21-0424','JARDIM ANGÉLICA'],
    ['21-0476','JARDIM ARAPONGAS'],
    ['21-0374','JARDIM BRASIL'],
    ['21-0252','JARDIM CUMBICA'],
    ['21-1241','JARDIM DAS OLIVAS'],
    ['21-1023','JARDIM GUILHERMINO'],
    ['21-0687','JARDIM JACY'],
    ['21-1054','JARDIM MONTE ALEGRE'],
    ['21-0401','JARDIM NORMANDIA'],
    ['21-0972','JARDIM NOVA CANAÃ'],
    ['21-0237','JARDIM NOVA CUMBICA'],
    ['21-0855','JARDIM OLIVEIRA'],
    ['21-0376','JARDIM OTTAWA'],
    ['21-0244','JARDIM SANTO AFONSO'],
    ['21-0226','PARQUE DAS NAÇÕES'],
    ['21-0959','PARQUE INDUSTRIAL'],
    ['21-0651','PARQUE JANDAIA'],
    ['21-0777','PARQUE SÃO MIGUEL'],
    ['21-0854','PARQUE UIRAPURU'],
    ['21-0779','SÍTIO SÃO FRANCISCO'],
    ['21-0945','VILA ALZIRA'],
    ['21-0233','VILA ANNY'],
    ['21-0599','VILA DINAMARCA'],
    ['21-0474','VILA PARAÍSO'],
    ['00-0000','ENCERRADO'],
    ['00-0001','SEM SISTEMA'],  
    ['00-0002','---']
  ];

  while (places.length) places.remove(0);

  local.forEach(itens =>{
    let option = document.createElement('option');
    option.value = itens[0];
    option.text = itens[1];  
    places.appendChild(option);    
  });

  places.selectedIndex = 0;  
}

function chamar(){

  if (places.length) {    
        
    let atual = places.selectedIndex; 
    emAtendimento.innerHTML = places.options[places.selectedIndex].text;
    
    // Filtro de itens que deve ficar na lista
    switch (places.options[places.selectedIndex].value) {
      case '00-0000': break;
      case '00-0001': break;
      case '00-0002': break;
      default:
        places.remove(atual);
    }

    places.selectedIndex = 0;  

    const client = emAtendimento.innerText;     

    if (client.length) {
      
      var messageObject = {              
        painel: 3,
        place: client
      };

      renderPlace(messageObject);
      socket.emit('sendMessage', messageObject);
    }   

  }

}

function repete(){
      
  var messageObject = {              
    painel: 3,
    place: emAtendimento.innerHTML
  };

  renderPlace(messageObject);
  socket.emit('sendMessage', messageObject);    
}

resete();