
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
  "O código estava tão perfeito que o computador ficou com inveja e travou.",
  "O robô do sistema acordou de mau humor hoje.",
  "Eu disse pro computador o que fazer, mas ele fingiu que não ouviu.",
  "Passei metade do dia procurando o erro e era só uma vírgula esquecida.",
  "O código se assustou quando viu que todo mundo tava olhando.",
  "Ontem de noite funcionava, hoje o programa acordou com amnésia.",
  "A culpa é do meu gato, ele pisou no teclado e apagou a mágica.",
  "Fui mexer no que já tava funcionando e o castelo de cartas caiu.",
  "O botão de salvar sumiu e eu fiquei com medo de fechar a tela.",
  "O sistema não quebrou, só resolveu tirar uma soneca.",
  "Faltou café no meu sangue pro programa fazer sentido.",
  "Pediram só uma 'mudancinha de nada' e explodiu tudo.",
  "O computador resolveu atualizar bem na hora de entregar.",
  "O programa funcionou de primeira, aí eu desconfiei e estraguei tentando melhorar.",
  "A inteligência artificial me jurou de pé junto que ia dar certo.",
  "O código travou de vergonha da gambiarra que eu fiz.",
  "Isso não é um erro, é uma surpresa pro usuário não ficar entediado.",
  "A internet deu uma piscada e levou meu raciocínio junto.",
  "Tava tudo pronto, mas o programa resolveu inventar moda na última hora.",
  "Eu fiz exatamente o que me pediram, o problema foi o que me pediram.",
  "O aplicativo entrou em greve por melhores condições de trabalho.",
  "Apertei o botão certo, mas o computador entendeu totalmente errado.",
  "Minha cabeça já tava no fim de semana e o código foi junto.",
  "Não tá travado, só tá pensando muito sobre a vida.",
  "O sistema tá perfeito, a tela do usuário que tá interpretando mal.",
  "Esqueci de ligar a opção 'fazer funcionar' no código.",
  "Eu apertei CTRL+Z tantas vezes que voltei pra semana passada.",
  "O código se recusou a rodar porque ainda não tomou café hoje.",
  "Coloquei uma letra maiúscula onde devia ser minúscula e o sistema chorou.",
  "O robô do programa resolveu fazer pirraça bem na hora da apresentação.",
  "Eu fiz a lógica com carinho, mas a máquina entendeu com rancor.",
  "O sistema tá funcionando sim, só tá num ritmo mais lento de férias.",
  "O botão verde virou vermelho do nada e ninguém sabe o motivo.",
  "Eu troquei um ponto por uma vírgula e o programa explodiu.",
  "A tela congelou de frio por causa do ar condicionado.",
  "O programa deu um nó cego e tô tentando desatar até agora.",
  "A máquina resolveu atualizar sozinha e esqueceu onde parou.",
  "O código tava ótimo no meu pensamento, mas na prática foi um desastre.",
  "Eu disse 'roda', o computador entendeu 'paralisa'.",
  "O sistema tá fingindo de morto pra ver se todo mundo vai embora.",
  "Apertei o botão de salvar, mas o computador salvou no mundo da lua.",
  "A culpa não é minha, o programa que não tem senso de humor.",
  "O site tá num momento de reflexão profunda antes de carregar.",
  "Esqueci de avisar a máquina que hoje era dia de entrega.",
  "A barrinha de carregamento resolveu morar nos 99% pra sempre.",
  "O código dormiu na metade do caminho e não acorda mais.",
  "Eu chamei a função, mas ela fingiu que não tava em casa.",
  "O computador cismou com a minha cara e travou por pirraça.",
  "Tudo funcionava bem até eu tentar mostrar pro meu chefe.",
  "O programa resolveu brincar de esconde-esconde com os dados.",
  "Apertamos a tecla certa, mas a máquina entendeu outro idioma."]

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