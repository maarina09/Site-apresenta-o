
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

  let desculpa = document.getElementById("desculpa").textContent = desculpas[indiceAleatorio]
  
}

document.addEventListener('DOMContentLoaded', () => {
  const displayCor = document.getElementById('displayCor');
  const codigoHex = document.getElementById('codigoHex');
  const btnGerar = document.getElementById('btnGerar');
  const btnCopiar = document.getElementById('btnCopiar');

  // TRAVA DE SEGURANÇA: Só executa se os elementos existirem na página atual
  if (btnGerar && btnCopiar) {

    // Gera o código Hexadecimal aleatório
    function gerarCorAleatoria() {
      const caracteres = '0123456789ABCDEF';
      let cor = '#';
      for (let i = 0; i < 6; i++) {
        cor += caracteres[Math.floor(Math.random() * 16)];
      }
      return cor;
    }

    // Atualiza a interface
    function atualizarCor() {
      const novaCor = gerarCorAleatoria();
      displayCor.style.backgroundColor = novaCor;
      codigoHex.innerText = novaCor;
    }

    // Evento do botão gerar
    btnGerar.addEventListener('click', atualizarCor);

    // Evento do botão copiar
    btnCopiar.addEventListener('click', () => {
      const texto = codigoHex.innerText;

      navigator.clipboard.writeText(texto).then(() => {
        btnCopiar.innerText = 'Copiado! ✓';
        btnCopiar.style.backgroundColor = '#10b981';

        setTimeout(() => {
          btnCopiar.innerText = 'Copiar';
          btnCopiar.style.backgroundColor = '';
        }, 1500);
      });
    });

    // Gera a primeira cor assim que o usuário entra na página
    atualizarCor();
  }
});