// const campoInput = document.getElementById('meu-input');
// const elementoTexto = document.getElementById('texto-maquina');

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

function MaquinaDeEscrever(){
  campoInput.addEventListener('input', function() {
  efeitoMaquinaDeEscrever(campoInput.value, elementoTexto, velocidade);
});
}

function DesculpasParaPrgramadores(){
  const desculpas = ["O computador teve um ataque de pelanca e apagou a linha certa.",
  "A minha intuição disse que ia dar certo, mas a máquina discordou.",
  "O cabo de rede tropeçou em si mesmo e caiu.",
  "O sistema entrou em férias coletivas sem me avisar.",
  "O arquivo de configuração fugiu da pasta e se escondeu no lixo.",
  "O meu anjo da guarda do código estava de folga nessa hora.",
  "O teclado cuspiu um erro aleatório só para me testar.",
  "O monitor piscou duas vezes e apagou a lógica que eu tinha criado.",
  "O código estava tão perfeito que o computador ficou com inveja e travou."]

  const indiceAleatorio = Math.floor(Math.random() * desculpas.length);
  
  return desculpas[indiceAleatorio]
}

