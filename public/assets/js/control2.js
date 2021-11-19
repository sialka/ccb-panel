const emAtendimento = document.querySelector('#atendimento')
const places = document.querySelector('#places')
const localidadesAtendidas = document.querySelector('#placesAtendidas')
const btChamarLocalidade = document.querySelector('#btChamar')
const btChamarAtentida = document.querySelector('#btAtendidas')
const btRepete = document.querySelector('#btRepete')
const vozSelecionada = document.querySelector('#vozes')

// Localidades
const local = [
  ['21-0225','BAIRRO DOS PIMENTAS'],
  ['21-0227','ARACILIA'],
  ['21-0778','TUPINAMBÁ'],
  ['21-0232','ALICE'],
  ['21-0424','ANGÉLICA'],
  ['21-0476','ARAPONGAS'],
  ['21-0374','BRASIL'],
  ['21-0252','CUMBICA'],
  ['21-1241','OLIVAS'],
  ['21-1023','GUILHERMINO'],
  ['21-0687','JACY'],
  ['21-1054','MONTE ALEGRE'],
  ['21-0401','NORMANDIA'],
  ['21-0972','NOVA CANAÃ'],
  ['21-0237','NOVA CUMBICA'],
  ['21-0855','OLIVEIRA'],
  ['21-0376','OTTAWA'],
  ['21-0244','SANTO AFONSO'],
  ['21-0226','DAS NAÇÕES'],
  ['21-0959','INDUSTRIAL'],
  ['21-0651','JANDAIA'],
  ['21-0777','SÃO MIGUEL'],
  ['21-0854','UIRAPURU'],
  ['21-0779','SÍTIO SÃO FRANCISCO'],
  ['21-0945','ALZIRA'],
  ['21-0233','ANNY'],
  ['21-0599','DINAMARCA'],
  ['21-0474','PARAÍSO'],
  ['00-0000','ENCERRADO'],
  ['00-0001','SEM SISTEMA'],    
];

const fala = []

fala['21-0225'] = 'BAIRRO DOS PIMENTAS'
fala['21-0227'] = 'CIDADE ARACÍLIA'
fala['21-0778'] = 'CIDADE TUPINAMBÁ'
fala['21-0232'] = 'JARDIM ALICE'
fala['21-0424'] = 'JARDIM ANGÉLICA'
fala['21-0476'] = 'JARDIM ARAPONGAS'
fala['21-0374'] = 'JARDIM BRASIL'
fala['21-0252'] = 'JARDIM CUMBICA'
fala['21-1241'] = 'JARDIM DAS OLIVAS'
fala['21-1023'] = 'JARDIM GUILHERMINO'
fala['21-0687'] = 'JARDIM JACY'
fala['21-1054'] = 'JARDIM MONTE ALEGRE'
fala['21-0401'] = 'JARDIM NORMANDIA'
fala['21-0972'] = 'JARDIM NOVA CANAÃ'
fala['21-0237'] = 'JARDIM NOVA CUMBICA'
fala['21-0855'] = 'JARDIM OLIVEIRA'
fala['21-0376'] = 'JARDIM OTTAWA'
fala['21-0244'] = 'JARDIM SANTO AFONSO'
fala['21-0226'] = 'PARQUE DAS NAÇÕES'
fala['21-0959'] = 'PARQUE INDUSTRIAL'
fala['21-0651'] = 'PARQUE JANDAIA'
fala['21-0777'] = 'PARQUE SÃO MIGUEL'
fala['21-0854'] = 'PARQUE UIRAPURU'
fala['21-0779'] = 'SÍTIO SÃO FRANCISCO'
fala['21-0945'] = 'VILA ALZIRA'
fala['21-0233'] = 'VILA ANI'
fala['21-0599'] = 'VILA DINAMARCA'
fala['21-0474'] = 'VILA PARAÍSO'
fala['00-0000'] = 'ENCERRADO'
fala['00-0001'] = 'SEM SISTEMA'    


// Eventos no Button Chamar - Localidades
btChamarLocalidade.addEventListener('click', () => {

  if (places.length) {    

    let localidade = places.selectedIndex  
    let cod = places.options[localidade].value    

    // Exibe em Atendimento
    emAtendimento.innerHTML = fala[cod]
    
    // Adiciona em Atendidas
    localidadesAtendidas.appendChild(places.options[localidade])

    // Remove da lista
    places.remove(localidade);

    places.selectedIndex = 0; 

    // Enviando para o Painel
    enviarPainel(emAtendimento.innerText)
    falar(emAtendimento.innerText)

  }else{
    alert('Não há mais localidades...')
  }

});

btChamarAtentida.addEventListener('click', ()=> {

  if (localidadesAtendidas.length) {
    let localidade = localidadesAtendidas.selectedIndex
    let cod = localidadesAtendidas.options[localidade].value
  
    // Exibe em Atendimento    
    emAtendimento.innerHTML = fala[cod]

    //Enviar para o Painel
    enviarPainel(emAtendimento.innerText)
    falar(emAtendimento.innerText)

    // Posicionando para o 1ª registro
    //localidadesAtendidas.selectedIndex = 0

  }else{
    alert('Não há localidades atendidas...')
  }

});

btRepete.addEventListener('click', () => {

  //Enviar para o Painel
  enviarPainel(emAtendimento.innerText)
  falar('Última chamada, ' + emAtendimento.innerText)

});

const enviarPainel = text => {

  var messageObject = {              
    painel: 3,
    place: text
  };

  renderPlace(messageObject);
  socket.emit('sendMessage', messageObject);    
}

const repete = () => {
      
  var messageObject = {              
    painel: 3,
    place: emAtendimento.innerHTML
  };

  renderPlace(messageObject);
  socket.emit('sendMessage', messageObject);    
}

const load = () => {  

  while (places.length) places.remove(0);

  local.forEach(itens =>{   

    let option = document.createElement('option');
    
    option.value = itens[0];
    option.text = itens[1];  

    places.appendChild(option);    
  });

  places.selectedIndex = 0;  
}


// iniciando App

load();