// API SpeechSynthesis

const utterance = new SpeechSynthesisUtterance()

const setTextMessage = text => {
  utterance.text = text
}

const speakText = () => {
  speechSynthesis.speak(utterance)
}

const falar = texto => {
    setTextMessage(texto)
    speakText()
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
