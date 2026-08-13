

const velocidade = 80;
let intervalo;      

function efeitoMaquinaDeEscrever() {
  // Limpa qualquer animação que esteja rodando no momento
  clearInterval(intervalo);

  // Seleciona os elementos pelo ID do seu HTML
  const input = document.getElementById('meu-input');
  const elementoTexto = document.getElementById('texto-maquina');

  // Pega o texto digitado
  const texto = input.value;
  const atraso = 60; // Velocidade da digitação em milissegundos

  // Limpa o texto antigo antes de começar
  elementoTexto.textContent = '';

  let i = 0;

  // Inicia o efeito letra por letra
  intervalo = setInterval(function () {
    if (i < texto.length) {
      elementoTexto.textContent += texto.charAt(i);
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, atraso);
}

