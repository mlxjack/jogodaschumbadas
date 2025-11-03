/*
 * Script para o Jogo da Chumbada Oficial
 * Implementa a lógica do jogo, incluindo a leitura das chumbadas, perguntas,
 * pontuação, dicas, poderes e ranking. Este código usa apenas JavaScript
 * vanilla para facilitar a integração com HTML e CSS.
 */

// Lista de chumbadas com seus nomes e imagens. As dicas são geradas
// dinamicamente com base no nome (primeira e última letras) para dar
// alguma orientação ao jogador quando ele desbloquear a opção de dica.
const chumbadasData = [];
(() => {
  // Matriz contendo pares "nome: url" extraídos do arquivo fornecido.
  const raw = `Aero: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Aero.jpg?v=1762177242
Âncora: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Ancora_99717180-0e5c-4c4a-aca8-d8adea66124e.jpg?v=1762177359
Aquazoom: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Aquazoom_542d79e0-1a6c-4806-a8ae-2d83afa47b12.png?v=1762177531
Bananinha: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Bananinha.jpg?v=1762177738
Bank: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Bank.jpg?v=1762177888
Barata: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Barata.jpg?v=1762178148
Beach Bomber: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Beach-Bomber.jpg?v=1762178914
Belga: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Belga.jpg?v=1762179282
Belga Speedy: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Belga-speedy.jpg?v=1762179282
Beluga: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa.jpg?v=1762179369
Bico de Pato: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa.jpg?v=1762179369
Bola: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_7b161968-4ac8-495c-934e-7f3f0dc2a13f.jpg?v=1762179473
Bola Guiada: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa.jpg?v=1762179486
Bola Furada: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_39b9e2ac-bb50-433a-b818-63ea69492038.jpg?v=1762179519
Brinco: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/branco-capa.jpg?v=1762179561
Bullet: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelhor-capa.png?v=1762179623
Caixão: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/rosa-capa.png?v=1762179655
Capela: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa.png?v=1762179688
Capela Côncava: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa.png?v=1762179728
Carambola: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa.png?v=1762179943
Carambola com Cauda:https://cdn.shopify.com/s/files/1/0454/5845/6736/files/verde-capa.png?v=1762179884
Coifa: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/preto-capa.png?v=1762179980
Colher: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa.png?v=1762180035
Cone: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa_b31d4117-5fcc-445a-99f2-8b4cba379839.png?v=1762180054
Cone Bomba: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_2ca5f06a-d076-4818-affc-c3f65c58c1a0.png?v=1762180085
Corrico: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/capa_b1b93b2e-2606-4404-ac68-20e15c4db3ca.png?v=1762180112
Coxinha Sextavada: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/coxinha-sextavada.png?v=1762180227
Down Shot: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/capa_13935180-bb56-4825-ba72-553a1d73dcd9.jpg?v=1762180248
Downrigger: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa_56985807-dd64-4933-b160-1e732ae020d1.png?v=1762180260
Estrela: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/verde-capa_d5c4378e-be1d-4f4e-ad9f-e02e41f37d3c.png?v=1762180281
Garatéia: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/capa_77fc95bb-0404-4e3d-8bb7-ac08743e4266.png?v=1762180289
Garrafinha: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/roxo-capa.png?v=1762180313
Gota com Cauda: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_5a910c38-5e1d-481c-985d-877e32d680ee.png?v=1762180337
Gota Cônica:https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa.png?v=1762180362
Gota Lançamento Limitado: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_dca582b4-bec6-4671-8b1c-8bc44b3f2b46.png?v=1762180404
Gota sem Cauda: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa_c1d327b4-40e7-41c4-96f0-58520e29bea3.png?v=1762180430
Jet Pack: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_be3e855e-b009-481d-a94d-ed9f42784142.png?v=1762180438
Lança Côncava: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/branco-capa.png?v=1762180449
Mega Bat: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa_26353c69-ec4a-4c7e-912c-0393dd526853.png?v=1762180494
Míssil Dread Fish: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/capa_58341a07-0ff2-4612-a443-d9a3b3fd12d4.png?v=1762180576
Moby Dick: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/branco-capa_453f6a9d-68d0-44e6-91ca-bb30b097adce.png?v=1762180592
Moeda: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa_bdccd352-bf95-4fc3-909c-070d220ffd10.png?v=1762180605
Moskit: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/preto-capa_172c6d73-8bc1-4df7-b5fa-1ccf3e20900d.png?v=1762180616
Oliva Furada: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-escuro.png?v=1762180632
Pargueira Míssil: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa_6db9c10e-95e6-4fb7-b5c2-ede918f886f4.png?v=1762180654
Pargueira Speedy: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-escuro_58763fe4-7864-4fb1-bb55-058e5f8d3185.png?v=1762180663
Peixe: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/rosa-capa_ea0930a0-cee1-41ad-a3ba-403d6986fbd2.png?v=1762180688
Pertinax: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho.png?v=1762180731
Pião: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_bac498ed-44b5-4517-8a43-9c40c0081b42.png?v=1762180743
Pingo de Seção Quadrada: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/rosa-capa_939ab2af-80c4-4535-87ff-6ca78b7986c3.png?v=1762180762
Pirâmide: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_69007f53-a32b-4315-be66-78586f7551d8.png?v=1762180774
Pirâmide Chata com Dois Olhais: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/branco-capa_04557702-26c0-48b8-84d6-701d0befdc84.png?v=1762180804
Pirâmide Côncava: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_373413b7-a767-4739-bd89-ee28483af7e9.png?v=1762180855
Pirâmide olhal de chumbo: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa_31d43785-edad-4bf9-a573-2c6c0c0e57d4.png?v=1762180825
Pirâmide Furada: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/roxo-capa_d9abecdb-eac0-450c-97c5-84441d5fb6c0.png?v=1762180866
Pirâmide Rebaixada: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-escuro_e1d59933-e61c-4aed-bd3b-4a3b2fc15425.png?v=1762180885
Pirulito: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa_ba87910c-8d8d-40a1-b593-4cc4ce33c50a.jpg?v=1762180934
Prego Vazado: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa.jpg?v=1762181002
Poita: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/verde-capa.jpg?v=1762180971
Portuguesa: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/rosa-capa.jpg?v=1762181022
Pyramidon: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_f9e18f9c-c50f-464c-b4c5-2673dc72e77b.jpg?v=1762180898
Sabonete: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-escuro-capa.jpg?v=1762181109
Sino: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_8b443388-68ca-4cef-a220-83cbb8a7347d.jpg?v=1762181128
Star Light Sinker: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/star-light-2.png?v=1762181145
Tacape: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/preto-capa.jpg?v=1762181159
Top Shock: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_1439a72f-bb96-43e3-a8d1-c822eec1d88b.jpg?v=1762181171
Torpedo: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_b4f45fb4-c1cb-43f9-8c7f-a5f5d4d94aa7.jpg?v=1762181201
Torpedo com Asa: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa_c2044b27-aff3-476d-91fb-5c0c0468ac37.jpg?v=1762181216
Torpedo Guiado: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_3729bc64-08ff-453b-9122-9508b04fdb09.jpg?v=1762181235
Torpedo Long Casting: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_0b368847-6b5a-4ae7-8845-9c3a5dfed074.jpg?v=1762181264
Triângulo: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa_1af03663-90f4-417a-9f56-a96976b24adf.jpg?v=1762181274
Triângulo Capela: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa.jpg?v=1762181313
Tronco de Cone: https://cdn.shopify.com/s/files/1/0454/5845/6736/files/verde-capa_4b93fe49-79eb-49a1-8912-2385fc869138.jpg?v=1762181324`;
  // Parse each line into an object
  raw.split("\n").forEach((line) => {
    if (!line.includes(":")) return;
    const parts = line.split(":");
    const name = parts[0].trim();
    const url = parts.slice(1).join(":").trim();
    if (name && url) {
      const first = name[0];
      const last = name[name.length - 1];
      const hint = `Dica: começa com "${first}" e termina com "${last}".`;
      chumbadasData.push({ name, image: url, hint });
    }
  });
})();

// Número de rodadas a serem jogadas em cada partida. Será selecionado um subconjunto
// aleatório das chumbadas disponíveis.
const GAME_ROUNDS = 30;

// Variáveis de estado do jogo
let playerName = "";
let playerEmail = "";
let currentScore = 0;
let currentIndex = 0;
let timerInterval = null;
let currentTime = 10;
let maxTime = 10;
let selectedChumbadas = [];
let usedHint = false;
const usedPowers = { power1: false, power2: false, power3: false, power4: false };
let freezeTimeActive = false;

// Elementos da DOM
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const playerForm = document.getElementById("player-form");
const playerDisplay = document.getElementById("player-display");
const scoreDisplay = document.getElementById("score-display");
const timeDisplay = document.getElementById("time-display");
const imageEl = document.getElementById("chumbada-image");
const answerButtonsEl = document.getElementById("answer-buttons");
const loadingMessageEl = document.getElementById("loading-message");
const controlsContainer = document.querySelector(".controls");
const timerContainer = document.querySelector(".timer");
const hintButton = document.getElementById("hint-button");
const hintTextEl = document.getElementById("hint-text");
const powerButtons = {
  power1: document.getElementById("power1"),
  power2: document.getElementById("power2"),
  power3: document.getElementById("power3"),
  power4: document.getElementById("power4"),
};

const endScoreEl = document.getElementById("final-score");
const playAgainBtn = document.getElementById("play-again");
const startRankingContainer = document.getElementById("start-ranking");
const endRankingContainer = document.getElementById("end-ranking");

// Exibe a contagem de perguntas (ex: 3/30) durante o jogo
const questionCounterEl = document.getElementById("question-counter");

// Função utilitária para embaralhar um array (Fisher-Yates)
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Início do jogo após preenchimento do formulário
playerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  playerName = document.getElementById("player-name").value.trim();
  playerEmail = document.getElementById("player-email").value.trim();
  if (!playerName || !playerEmail) return;
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  resetGame();
  startGame();
});

// Clique para jogar novamente
playAgainBtn.addEventListener("click", () => {
  endScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  // Limpar ranking de fim de jogo
  endRankingContainer.innerHTML = "";
  // Carregar ranking na tela inicial novamente
  fetchRanking(startRankingContainer);
});

// Função para resetar os estados do jogo
function resetGame() {
  currentScore = 0;
  currentIndex = 0;
  usedHint = false;
  freezeTimeActive = false;
  usedPowers.power1 = false;
  usedPowers.power2 = false;
  usedPowers.power3 = false;
  usedPowers.power4 = false;
  playerDisplay.textContent = playerName;
  scoreDisplay.textContent = `Pontos: ${currentScore}`;
  hintTextEl.textContent = "";
  // Selecionar 30 chumbadas aleatórias
  const shuffled = shuffle(chumbadasData);
  selectedChumbadas = shuffled.slice(0, GAME_ROUNDS);
}

// Função para iniciar a partida
function startGame() {
  // carregar ranking na tela inicial durante o jogo (utilizado se o jogador voltar)
  fetchRanking(startRankingContainer);
  showQuestion();
}

// Função para mostrar a pergunta atual
function showQuestion() {
  // Limpa textos e conteúdos anteriores
  hintTextEl.textContent = "";
  answerButtonsEl.innerHTML = "";
  // Se esgotou as rodadas, terminar
  if (currentIndex >= selectedChumbadas.length) {
    return endGame();
  }
  const current = selectedChumbadas[currentIndex];
  // Preparar opções de respostas (1 correta + 3 aleatórias)
  const wrongChoices = shuffle(chumbadasData.filter((c) => c.name !== current.name)).slice(0, 3);
  const options = shuffle([current, ...wrongChoices]);
  // Mostrar mensagem de carregamento enquanto a imagem não terminar de carregar
  if (loadingMessageEl) loadingMessageEl.classList.remove('hidden');
  // Ocultar botões de resposta e controles e temporizador durante o carregamento
  answerButtonsEl.classList.add('hidden');
  if (controlsContainer) controlsContainer.classList.add('hidden');
  if (timerContainer) timerContainer.style.visibility = 'hidden';
  // Pré-carregar imagem
  const preImg = new Image();
  preImg.onload = () => {
    // Definir imagem final no elemento e remover mensagem de carregamento
    imageEl.src = preImg.src;
    imageEl.alt = current.name;
    if (loadingMessageEl) loadingMessageEl.classList.add('hidden');
    // Gerar botões de resposta
    options.forEach((option) => {
      const btn = document.createElement('button');
      btn.textContent = option.name;
      btn.dataset.correct = option.name === current.name;
      btn.addEventListener('click', handleAnswer);
      answerButtonsEl.appendChild(btn);
    });
    // Exibir botões e controles
    answerButtonsEl.classList.remove('hidden');
    if (controlsContainer) controlsContainer.classList.remove('hidden');
    if (timerContainer) timerContainer.style.visibility = 'visible';
    // Habilitar/desabilitar dica
    hintButton.disabled = !(currentScore >= 50 && !usedHint);
    // Atualizar estado dos poderes
    updatePowerButtons();
    // Configurar eventos para poderes
    powerButtons.power1.onclick = () => usePower(1);
    powerButtons.power2.onclick = () => usePower(2);
    powerButtons.power3.onclick = () => usePower(3);
    powerButtons.power4.onclick = () => usePower(4);
    // Configurar botão de dica
    hintButton.onclick = () => {
      if (usedHint || currentScore < 50) return;
      hintTextEl.textContent = current.hint;
      usedHint = true;
      hintButton.disabled = true;
    };
    // Iniciar temporizador
    maxTime = 10;
    currentTime = maxTime;
    freezeTimeActive = false;
    updateTimeDisplay();
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!freezeTimeActive) {
        currentTime -= 1;
        updateTimeDisplay();
        if (currentTime <= 0) {
          clearInterval(timerInterval);
          timeUp();
        }
      }
    }, 1000);
    // Atualizar contador de perguntas
    if (questionCounterEl) {
      questionCounterEl.textContent = `${currentIndex + 1}/${selectedChumbadas.length}`;
    }
  };
  preImg.src = current.image;
}

// Atualiza a exibição do tempo
function updateTimeDisplay() {
  timeDisplay.textContent = freezeTimeActive ? "∞" : Math.max(0, Math.ceil(currentTime));
}

// Lógica quando o tempo acaba
function timeUp() {
  // Penalizar ponto
  currentScore -= 1;
  if (currentScore < 0) currentScore = 0;
  scoreDisplay.textContent = `Pontos: ${currentScore}`;
  // Destacar a resposta correta
  Array.from(answerButtonsEl.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
  // Passar para a próxima pergunta após breve intervalo
  setTimeout(() => {
    currentIndex++;
    showQuestion();
  }, 1000);
}

// Função de tratamento de clique de resposta
function handleAnswer(e) {
  const btn = e.target;
  // Evitar múltiplos cliques
  if (btn.disabled) return;
  // Parar temporizador
  clearInterval(timerInterval);
  // Recuperar se é a resposta correta
  const isCorrect = btn.dataset.correct === "true";
  // Calcular pontos
  let timePoints = freezeTimeActive ? 10 : Math.max(0, Math.ceil(currentTime));
  if (isCorrect) {
    currentScore += 10 + timePoints;
    btn.classList.add("correct");
  } else {
    currentScore -= 1;
    if (currentScore < 0) currentScore = 0;
    btn.classList.add("wrong");
  }
  scoreDisplay.textContent = `Pontos: ${currentScore}`;
  // Destacar a resposta correta e desabilitar botões
  Array.from(answerButtonsEl.children).forEach((b) => {
    b.disabled = true;
    if (b.dataset.correct === "true") {
      b.classList.add("correct");
    }
  });
  // Após pequeno intervalo, passar para próxima pergunta
  setTimeout(() => {
    currentIndex++;
    showQuestion();
  }, 1000);
}

// Atualiza o estado dos botões de poder conforme a pontuação
function updatePowerButtons() {
  // Mar calmo: +30s a partir de 100 pontos
  powerButtons.power1.disabled = !(currentScore >= 100 && !usedPowers.power1);
  // Pesca tranquila: parar tempo a partir de 150 pontos
  powerButtons.power2.disabled = !(currentScore >= 150 && !usedPowers.power2);
  // Tem peixe na linha: elimina 2 respostas erradas a partir de 200 pontos
  powerButtons.power3.disabled = !(currentScore >= 200 && !usedPowers.power3);
  // Pescaria oficial: mostra resposta correta a partir de 250 pontos
  powerButtons.power4.disabled = !(currentScore >= 250 && !usedPowers.power4);
}

// Ação dos poderes
function usePower(number) {
  const currentQuestion = selectedChumbadas[currentIndex];
  switch (number) {
    case 1: // Mar calmo: adicionar 30s
      if (usedPowers.power1 || currentScore < 100) return;
      maxTime += 30;
      currentTime += 30;
      usedPowers.power1 = true;
      updatePowerButtons();
      updateTimeDisplay();
      break;
    case 2: // Pesca tranquila: parar temporizador
      if (usedPowers.power2 || currentScore < 150) return;
      usedPowers.power2 = true;
      freezeTimeActive = true;
      updatePowerButtons();
      updateTimeDisplay();
      break;
    case 3: // Tem peixe na linha: eliminar 2 opções erradas
      if (usedPowers.power3 || currentScore < 200) return;
      usedPowers.power3 = true;
      updatePowerButtons();
      // Encontrar botões errados
      const wrongBtns = Array.from(answerButtonsEl.children).filter((btn) => btn.dataset.correct !== "true" && !btn.disabled);
      shuffle(wrongBtns).slice(0, 2).forEach((btn) => {
        btn.disabled = true;
        btn.style.visibility = "hidden";
      });
      break;
    case 4: // Pescaria oficial: mostrar resposta correta
      if (usedPowers.power4 || currentScore < 250) return;
      usedPowers.power4 = true;
      updatePowerButtons();
      Array.from(answerButtonsEl.children).forEach((btn) => {
        if (btn.dataset.correct === "true") {
          btn.classList.add("correct");
        }
      });
      break;
  }
}

// Função para encerrar o jogo
function endGame() {
  // Limpar temporizador
  if (timerInterval) clearInterval(timerInterval);
  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  endScoreEl.textContent = `Você fez ${currentScore} pontos!`;
  // Enviar pontuação para planilha (dependendo da configuração)
  postScore(playerName, playerEmail, currentScore);
  // Carregar ranking
  fetchRanking(endRankingContainer);
}

// Busca ranking em uma planilha pública do Google via API.
// Esta função utiliza a API do opensheet.elk.sh, que transforma
// planilhas públicas em JSON. Se preferir outra API, ajuste aqui.
async function fetchRanking(container) {
  // ID e nome da aba da planilha
  const sheetId = "1pYUm3D4MemjLShWK5H1P6d3fCuwIwLPZpO4iUxg1OLY";
  const sheetName = "Pagina1";
  const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
  container.innerHTML = "<p>Carregando ranking...</p>";
  try {
    const res = await fetch(url);
    const data = await res.json();
    // data deve ser um array de linhas com colunas Nome, Email, Pontos e Data
    // Filtrar entradas válidas e ordenar pela pontuação decrescente
    const ranking = data
      .filter((row) => row.Pontos && !isNaN(parseInt(row.Pontos)))
      .sort((a, b) => parseInt(b.Pontos) - parseInt(a.Pontos));
    // Construir tabela
    let html = '<table class="ranking-table"><tr><th>Posição</th><th>Nome</th><th>Pontos</th><th>Data</th></tr>';
    ranking.slice(0, 10).forEach((row, index) => {
      html += `<tr><td>${index + 1}</td><td>${row.Nome || row.Name}</td><td>${row.Pontos}</td><td>${row.Data || ''}</td></tr>`;
    });
    html += '</table>';
    container.innerHTML = html;
  } catch (err) {
    container.innerHTML = "<p>Não foi possível carregar o ranking no momento.</p>";
  }
}

// Envia a pontuação do jogador para a planilha por meio de um endpoint
// configurável. Para que funcione, o usuário deverá configurar uma API
// (por exemplo, via Google Apps Script, SheetDB ou qualquer serviço
// equivalente) que aceite requisição POST com os campos nome, email, pontos e data.
async function postScore(name, email, points) {
  // URL do script responsável por gravar os dados na planilha.
  // Substitua por sua URL quando estiver configurado.
  // URL do Apps Script fornecido para gravar as pontuações. Esta URL deve
  // aceitar uma chamada POST com JSON contendo Nome, Email, Pontos e Data.
  const scriptUrl = 'https://script.google.com/macros/s/AKfycby0ElmQ6Ie6gdtae7O6GbZNAVyL5C5xQT9GpdQ0AwFAQ0SRCxhLtOYlaIfsdObEZ4-t/exec';
  if (!scriptUrl) {
    console.log("Salvamento de pontuação não configurado.");
    return;
  }
  try {
    await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Nome: name, Email: email, Pontos: points, Data: new Date().toLocaleDateString('pt-BR') })
    });
  } catch (err) {
    console.error('Erro ao enviar pontuação: ', err);
  }
}

// Carregar ranking inicial na página de boas-vindas
fetchRanking(startRankingContainer);