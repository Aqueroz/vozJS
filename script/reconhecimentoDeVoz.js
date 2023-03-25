const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition,lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

//ouvir e dizer o que foi dito
function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

//o que será escrito dentro do html
//a crase é usada quando se precisa linkar algo de outro doucmento, nesse caso o html
function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse: </div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())