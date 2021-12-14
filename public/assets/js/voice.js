// API SpeechSynthesis
const vozSelecionada = document.querySelector('#vozes')

const utterance = new SpeechSynthesisUtterance()

const falar = texto => {    
  utterance.text = texto
  speechSynthesis.speak(utterance)  
}

// Escolhendo Vozes

let voices = []

const setVoice = event => {
  //console.log(event.target.value)
  const selectedVoice = voices.find(voice => voice.name === event.target.value)
  utterance.voice = selectedVoice
  //speechSynthesis.speak(utterance)
}

speechSynthesis.addEventListener('voiceschanged', () => {
  
  voices = speechSynthesis.getVoices()
  
  voices.forEach(({ name, lang }) => {
    
    if(lang == 'pt-BR'){
      const option = document.createElement('option')

      option.value = name
      option.textContent = `${lang} | ${name} `
      
      vozSelecionada.appendChild(option)
    }

  })

  // Visual
  vozSelecionada.selectedIndex = 2  
  // Seleciona a voz do google pt-br manualmente
  utterance.voice = voices[16]  

})

vozSelecionada.addEventListener('change', setVoice)
