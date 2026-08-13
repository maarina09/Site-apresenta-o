const campoInput = document.getElementById('meu-input');
const elementoTexto = document.getElementById('texto-maquina');

const velocidade = 80;
let intervalo;      

function efeitoMaquinaDeEscrever(texto, elemento, atraso) {
 
  clearInterval(intervalo);
  
  elemento.textContent = '';
  
  let i = 0;
  
  intervalo = setInterval(function() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, atraso);
}

campoInput.addEventListener('input', function() {
  efeitoMaquinaDeEscrever(campoInput.value, elementoTexto, velocidade);
});