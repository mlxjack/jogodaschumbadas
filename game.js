// ============================================
// DADOS DAS CHUMBADAS
// ============================================

const chumbadas = [
  {
    "nome": "Aero",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Aero.jpg?v=1762177242",
    "dica": "Seu design aerodinâmico é ideal para longos arremessos."
  },
  {
    "nome": "Âncora",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Ancora_99717180-0e5c-4c4a-aca8-d8adea66124e.jpg?v=1762177359",
    "dica": "Possui garras para fixação em fundos de areia ou cascalho."
  },
  {
    "nome": "Aquazoom",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Aquazoom_542d79e0-1a6c-4806-a8ae-2d83afa47b12.png?v=1762177531",
    "dica": "Seu formato lembra um projétil, otimizado para velocidade na água."
  },
  {
    "nome": "Bananinha",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Bananinha.jpg?v=1762177738",
    "dica": "Com formato curvo, é muito usada em pescarias de fundo."
  },
  {
    "nome": "Bank",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Bank.jpg?v=1762177888",
    "dica": "Um formato clássico, ideal para rios e margens (banks)."
  },
  {
    "nome": "Barata",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Barata.jpg?v=1762178148",
    "dica": "Seu corpo achatado ajuda a evitar que role no fundo."
  },
  {
    "nome": "Beach Bomber",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Beach-Bomber.jpg?v=1762178914",
    "dica": "Projetada para arremessos longos em praias (beach)."
  },
  {
    "nome": "Belga",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Belga.jpg?v=1762179282",
    "dica": "Formato alongado e fino, com boa estabilidade no ar."
  },
  {
    "nome": "Belga Speedy",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/Belga-speedy.jpg?v=1762179282",
    "dica": "Uma variação da Belga, otimizada para maior velocidade (speedy) no arremesso."
  },
  {
    "nome": "Beluga",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa.jpg?v=1762179369",
    "dica": "Seu nome remete a uma baleia branca, indicando um formato robusto."
  },
  {
    "nome": "Bico de Pato",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa.jpg?v=1762179369",
    "dica": "Possui uma extremidade achatada, como o bico de um pato."
  },
  {
    "nome": "Bola",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_7b161968-4ac8-495c-934e-7f3f0dc2a13f.jpg?v=1762179473",
    "dica": "O formato mais simples e esférico, de uso geral."
  },
  {
    "nome": "Bola Guiada",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa.jpg?v=1762179486",
    "dica": "Uma esfera com um sistema que ajuda a guiar a linha durante o arremesso."
  },
  {
    "nome": "Bola Furada",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_39b9e2ac-bb50-433a-b818-63ea69492038.jpg?v=1762179519",
    "dica": "Uma esfera com um furo central, permitindo que deslize na linha."
  },
  {
    "nome": "Brinco",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/branco-capa.jpg?v=1762179561",
    "dica": "Pequena e discreta, lembra um acessório de orelha."
  },
  {
    "nome": "Bullet",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelhor-capa.png?v=1762179623",
    "dica": "Seu formato de bala (bullet) é ideal para penetrar a vegetação aquática."
  },
  {
    "nome": "Caixão",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/rosa-capa.png?v=1762179655",
    "dica": "Possui um formato retangular e alongado, como um caixão."
  },
  {
    "nome": "Capela",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa.png?v=1762179688",
    "dica": "Formato cônico, com a base mais larga, lembrando a cúpula de uma capela."
  },
  {
    "nome": "Capela Côncava",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa.png?v=1762179728",
    "dica": "Uma variação da Capela com uma base côncava para maior arrasto."
  },
  {
    "nome": "Carambola",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa.png?v=1762179943",
    "dica": "Seu formato se assemelha ao da fruta, com sulcos longitudinais."
  },
  {
    "nome": "Carambola com Cauda",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/verde-capa.png?v=1762179884",
    "dica": "Possui o formato da fruta e uma extensão para estabilidade."
  },
  {
    "nome": "Coifa",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/preto-capa.png?v=1762179980",
    "dica": "Seu formato lembra uma coifa de cozinha, com uma parte mais larga e outra estreita."
  },
  {
    "nome": "Colher",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa.png?v=1762180035",
    "dica": "Achatada e curva, como o utensílio de mesa."
  },
  {
    "nome": "Cone",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa_b31d4117-5fcc-445a-99f2-8b4cba379839.png?v=1762180054",
    "dica": "Formato simples de cone, bom para penetração na água."
  },
  {
    "nome": "Cone Bomba",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_2ca5f06a-d076-4818-affc-c3f65c58c1a0.png?v=1762180085",
    "dica": "Um cone mais robusto, com peso concentrado para arremessos explosivos (bomba)."
  },
  {
    "nome": "Corrico",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/capa_b1b93b2e-2606-4404-ac68-20e15c4db3ca.png?v=1762180112",
    "dica": "Projetada para a modalidade de pesca de corrico, onde a isca é arrastada."
  },
  {
    "nome": "Coxinha Sextavada",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/coxinha-sextavada.png?v=1762180227",
    "dica": "Seu formato lembra o salgado, mas com seis lados (sextavada)."
  },
  {
    "nome": "Down Shot",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/capa_13935180-bb56-4825-ba72-553a1d73dcd9.jpg?v=1762180248",
    "dica": "Usada na técnica 'Down Shot', mantendo a isca suspensa acima do peso."
  },
  {
    "nome": "Downrigger",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa_56985807-dd64-4933-b160-1e732ae020d1.png?v=1762180260",
    "dica": "Um peso pesado, usado para levar a isca a grandes profundidades."
  },
  {
    "nome": "Estrela",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/verde-capa_d5c4378e-be1d-4f4e-ad9f-e02e41f37d3c.png?v=1762180281",
    "dica": "Possui pontas que ajudam a fixar no fundo, como uma estrela."
  },
  {
    "nome": "Garatéia",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/capa_77fc95bb-0404-4e3d-8bb7-ac08743e4266.png?v=1762180289",
    "dica": "Um peso com formato que lembra o anzol de três pontas."
  },
  {
    "nome": "Garrafinha",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/roxo-capa.png?v=1762180313",
    "dica": "Seu formato alongado e com 'pescoço' lembra uma pequena garrafa."
  },
  {
    "nome": "Gota com Cauda",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_5a910c38-5e1d-481c-985d-877e32d680ee.png?v=1762180337",
    "dica": "Formato de lágrima com uma extensão para estabilidade no arremesso."
  },
  {
    "nome": "Gota Cônica",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa.png?v=1762180362",
    "dica": "Uma gota com a ponta mais afilada, facilitando a penetração na água."
  },
  {
    "nome": "Gota Lançamento Limitado",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_dca582b4-bec6-4671-8b1c-8bc44b3f2b46.png?v=1762180404",
    "dica": "Uma gota especial, feita para arremessos de longa distância."
  },
  {
    "nome": "Gota sem Cauda",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa_c1d327b4-40e7-41c4-96f0-58520e29bea3.png?v=1762180430",
    "dica": "O formato clássico de lágrima, sem a extensão estabilizadora."
  },
  {
    "nome": "Jet Pack",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_be3e855e-b009-481d-a94d-ed9f42784142.png?v=1762180438",
    "dica": "Seu nome sugere um impulso extra, com peso concentrado na ponta."
  },
  {
    "nome": "Lança Côncava",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/branco-capa.png?v=1762180449",
    "dica": "Formato de lança com uma superfície interna curvada."
  },
  {
    "nome": "Mega Bat",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa_26353c69-ec4a-4c7e-912c-0393dd526853.png?v=1762180494",
    "dica": "Grande e robusta, como um taco de beisebol (bat)."
  },
  {
    "nome": "Míssil Dread Fish",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/capa_58341a07-0ff2-4612-a443-d9a3b3fd12d4.png?v=1762180576",
    "dica": "Formato de míssil, ideal para arremessos de longa distância e penetração."
  },
  {
    "nome": "Moby Dick",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/branco-capa_453f6a9d-68d0-44e6-91ca-bb30b097adce.png?v=1762180592",
    "dica": "Nome de uma famosa baleia, sugerindo um peso considerável."
  },
  {
    "nome": "Moeda",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa_bdccd352-bf95-4fc3-909c-070d220ffd10.png?v=1762180605",
    "dica": "Pequena e redonda, com o formato de uma moeda."
  },
  {
    "nome": "Moskit",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/preto-capa_172c6d73-8bc1-4df7-b5fa-1ccf3e20900d.png?v=1762180616",
    "dica": "Pequena e leve, como um mosquito, ideal para águas rasas."
  },
  {
    "nome": "Oliva Furada",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-escuro.png?v=1762180632",
    "dica": "Formato oval (oliva) com um furo para deslizar na linha."
  },
  {
    "nome": "Pargueira Míssil",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa_6db9c10e-95e6-4fb7-b5c2-ede918f886f4.png?v=1762180654",
    "dica": "Usada na pesca de pargos, com formato de míssil para arremessos longos."
  },
  {
    "nome": "Pargueira Speedy",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-escuro_58763fe4-7864-4fb1-bb55-058e5f8d3185.png?v=1762180663",
    "dica": "Uma variação da Pargueira, com design otimizado para velocidade."
  },
  {
    "nome": "Peixe",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/rosa-capa_ea0930a0-cee1-41ad-a3ba-403d6986fbd2.png?v=1762180688",
    "dica": "Seu formato imita um pequeno peixe, ajudando na camuflagem."
  },
  {
    "nome": "Pertinax",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho.png?v=1762180731",
    "dica": "Formato cilíndrico, muito usado em montagens de fundo."
  },
  {
    "nome": "Pião",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_bac498ed-44b5-4517-8a43-9c40c0081b42.png?v=1762180743",
    "dica": "Seu formato lembra o brinquedo, com uma ponta fina e corpo mais largo."
  },
  {
    "nome": "Pingo de Seção Quadrada",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/rosa-capa_939ab2af-80c4-4535-87ff-6ca78b7986c3.png?v=1762180762",
    "dica": "Pequena, com formato de gota, mas com a seção transversal quadrada."
  },
  {
    "nome": "Pirâmide",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_69007f53-a32b-4315-be66-78586f7551d8.png?v=1762180774",
    "dica": "Formato clássico, ideal para fixação em fundos de areia."
  },
  {
    "nome": "Pirâmide Chata com Dois Olhais",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/branco-capa_04557702-26c0-48b8-84d6-701d0befdc84.png?v=1762180804",
    "dica": "Achatada e com dois pontos de fixação para montagens especiais."
  },
  {
    "nome": "Pirâmide Côncava",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_373413b7-a767-4739-bd89-ee28483af7e9.png?v=1762180855",
    "dica": "Uma pirâmide com a base curvada para dentro."
  },
  {
    "nome": "Pirâmide olhal de chumbo",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa_31d43785-edad-4bf9-a573-2c6c0c0e57d4.png?v=1762180825",
    "dica": "Pirâmide com o olhal feito do próprio material (chumbo)."
  },
  {
    "nome": "Pirâmide Furada",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/roxo-capa_d9abecdb-eac0-450c-97c5-84441d5fb6c0.png?v=1762180866",
    "dica": "Pirâmide com um furo central para deslizar na linha."
  },
  {
    "nome": "Pirâmide Rebaixada",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-escuro_e1d59933-e61c-4aed-bd3b-4a3b2fc15425.png?v=1762180885",
    "dica": "Uma pirâmide com a altura reduzida, mais 'rebaixada'."
  },
  {
    "nome": "Pirulito",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa_ba87910c-8d8d-40a1-b593-4cc4ce33c50a.jpg?v=1762180934",
    "dica": "Seu formato lembra o doce, com uma cabeça redonda e uma haste."
  },
  {
    "nome": "Prego Vazado",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa.jpg?v=1762181002",
    "dica": "Formato de prego, com um furo para a linha passar por dentro."
  },
  {
    "nome": "Poita",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/verde-capa.jpg?v=1762180971",
    "dica": "Um peso que lembra uma âncora de embarcação (poita)."
  },
  {
    "nome": "Portuguesa",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/rosa-capa.jpg?v=1762181022",
    "dica": "Um formato tradicional, muito popular em Portugal."
  },
  {
    "nome": "Pyramidon",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_f9e18f9c-c50f-464c-b4c5-2673dc72e77b.jpg?v=1762180898",
    "dica": "Um nome que sugere uma pirâmide pequena ou um diminutivo de pirâmide."
  },
  {
    "nome": "Sabonete",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-escuro-capa.jpg?v=1762181109",
    "dica": "Formato retangular e liso, como uma barra de sabão."
  },
  {
    "nome": "Sino",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_8b443388-68ca-4cef-a220-83cbb8a7347d.jpg?v=1762181128",
    "dica": "Seu formato lembra o de um sino, com a base mais larga."
  },
  {
    "nome": "Star Light Sinker",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/star-light-2.png?v=1762181145",
    "dica": "Um peso leve (light) com formato de estrela (star)."
  },
  {
    "nome": "Tacape",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/preto-capa.jpg?v=1762181159",
    "dica": "Formato que lembra um bastão ou clava indígena."
  },
  {
    "nome": "Top Shock",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_1439a72f-bb96-43e3-a8d1-c822eec1d88b.jpg?v=1762181171",
    "dica": "Projetada para absorver o impacto (shock) do arremesso."
  },
  {
    "nome": "Torpedo",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_b4f45fb4-c1cb-43f9-8c7f-a5f5d4d94aa7.jpg?v=1762181201",
    "dica": "Formato cilíndrico e pontiagudo, como um torpedo."
  },
  {
    "nome": "Torpedo com Asa",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/vermelho-capa_c2044b27-aff3-476d-91fb-5c0c0468ac37.jpg?v=1762181216",
    "dica": "Um torpedo com aletas (asas) para maior estabilidade."
  },
  {
    "nome": "Torpedo Guiado",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/amarelo-capa_3729bc64-08ff-453b-9122-9508b04fdb09.jpg?v=1762181235",
    "dica": "Um torpedo com um sistema que ajuda a manter a trajetória."
  },
  {
    "nome": "Torpedo Long Casting",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/azul-claro-capa_0b368847-6b5a-4ae7-8845-9c3a5dfed074.jpg?v=1762181264",
    "dica": "Um torpedo otimizado para arremessos de longa distância (long casting)."
  },
  {
    "nome": "Triângulo",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/laranja-capa_1af03663-90f4-417a-9f56-a96976b24adf.jpg?v=1762181274",
    "dica": "Formato simples de prisma triangular."
  },
  {
    "nome": "Triângulo Capela",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/natural-capa.jpg?v=1762181313",
    "dica": "Combina o formato triangular com a cúpula da Capela."
  },
  {
    "nome": "Tronco de Cone",
    "url_imagem": "https://cdn.shopify.com/s/files/1/0454/5845/6736/files/verde-capa_4b93fe49-79eb-49a1-8912-2385fc869138.jpg?v=1762181324",
    "dica": "Um cone com a ponta cortada, resultando em duas bases paralelas."
  }
];

// ============================================
// VARIÁVEIS DO JOGO
// ============================================

let gameState = {
    playerName: '',
    playerEmail: '',
    score: 0,
    currentRound: 1,
    totalRounds: 30,
    // Tempo de resposta inicial (em segundos). Alterado para 20s conforme solicitado.
    timeLeft: 20,
    maxTime: 20,
    isAnswering: false,
    currentChumbada: null,
    currentOptions: [],
    hintUsed: false,
    usedChumbadas: [],
    activePower: null,
    usedPowers: new Set(),
    timePaused: false,
    timerInterval: null
};

// ============================================
// ELEMENTOS DO DOM
// ============================================

const loginScreen = document.getElementById('loginScreen');
const gameScreen = document.getElementById('gameScreen');
const loginForm = document.getElementById('loginForm');
const playerNameInput = document.getElementById('playerName');
const playerEmailInput = document.getElementById('playerEmail');
const playerDisplayName = document.getElementById('playerDisplayName');
const scoreDisplay = document.getElementById('scoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const roundDisplay = document.getElementById('roundDisplay');
const chumbadaImage = document.getElementById('chumbadaImage');
const optionBtns = document.querySelectorAll('.option-btn');
const hintBtn = document.getElementById('hintBtn');
const hintText = document.getElementById('hintText');
const rankingBtn = document.getElementById('rankingBtn');
const rankingModal = document.getElementById('rankingModal');
const rankingList = document.getElementById('rankingList');
const resultModal = document.getElementById('resultModal');
const resultIcon = document.getElementById('resultIcon');
const resultText = document.getElementById('resultText');
const resultPoints = document.getElementById('resultPoints');
const closeBtn = document.querySelector('.close-btn');
const powerItems = document.querySelectorAll('.power-item');

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function getRandomChumbada() {
    let chumbada;
    do {
        chumbada = chumbadas[Math.floor(Math.random() * chumbadas.length)];
    } while (gameState.usedChumbadas.includes(chumbada.nome) && gameState.usedChumbadas.length < chumbadas.length);
    
    return chumbada;
}

function getRandomOptions(correctChumbada) {
    const options = [correctChumbada];
    const availableChumbadas = chumbadas.filter(c => c.nome !== correctChumbada.nome);
    
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * availableChumbadas.length);
        options.push(availableChumbadas[randomIndex]);
        availableChumbadas.splice(randomIndex, 1);
    }
    
    // Embaralha as opções
    return options.sort(() => Math.random() - 0.5);
}

function updateScore(points) {
    gameState.score += points;
    scoreDisplay.textContent = gameState.score;
    updatePowerAvailability();
}

function updatePowerAvailability() {
    const powers = [
        { element: document.getElementById('power1'), requiredPoints: 100 },
        { element: document.getElementById('power2'), requiredPoints: 150 },
        { element: document.getElementById('power3'), requiredPoints: 200 },
        { element: document.getElementById('power4'), requiredPoints: 250 }
    ];
    
    powers.forEach(power => {
        const powerName = power.element.dataset.power;
        const isUsed = gameState.usedPowers.has(powerName);
        
        if (isUsed) {
            power.element.classList.add('used');
            power.element.classList.remove('disabled');
        } else if (gameState.score >= power.requiredPoints) {
            power.element.classList.remove('disabled');
        } else {
            power.element.classList.add('disabled');
        }
    });
    
    // Habilita dica ao atingir 50 pontos
    if (gameState.score >= 50 && !gameState.hintUsed) {
        hintBtn.disabled = false;
    }
}

function startTimer() {
    gameState.timeLeft = gameState.maxTime;
    updateTimerDisplay();
    
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timerInterval = setInterval(() => {
        if (!gameState.timePaused) {
            gameState.timeLeft--;
            updateTimerDisplay();
            
            if (gameState.timeLeft <= 0) {
                clearInterval(gameState.timerInterval);
                handleTimeout();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerDisplay.textContent = gameState.timeLeft + 's';
}

function calculateTimeBonus() {
    return Math.max(0, gameState.timeLeft);
}

function showResultModal(isCorrect, bonus = 0) {
    resultIcon.textContent = isCorrect ? '✅' : '❌';
    resultText.textContent = isCorrect ? 'Acertou!' : 'Errou!';
    
    let points = 0;
    if (isCorrect) {
        points = 10 + bonus;
    } else {
        points = -1;
    }
    
    resultPoints.textContent = (points > 0 ? '+' : '') + points + ' pontos';
    resultModal.classList.add('active');
    
    setTimeout(() => {
        resultModal.classList.remove('active');
        if (gameState.currentRound < gameState.totalRounds) {
            loadNextRound();
        } else {
            endGame();
        }
    }, 2000);
}

function handleTimeout() {
    gameState.isAnswering = false;
    optionBtns.forEach(btn => btn.disabled = true);
    showResultModal(false);
}

function loadNextRound() {
    gameState.currentRound++;
    gameState.hintUsed = false;
    gameState.activePower = null;
    gameState.timePaused = false;
    hintText.classList.remove('active');
    hintText.textContent = '';
    
    // Reseta eliminações de poderes
    optionBtns.forEach(btn => {
        btn.classList.remove('eliminated', 'correct', 'incorrect');
        btn.disabled = false;
    });
    
    roundDisplay.textContent = gameState.currentRound + '/' + gameState.totalRounds;
    loadChumbada();
}

function loadChumbada() {
    const chumbada = getRandomChumbada();
    gameState.currentChumbada = chumbada;
    gameState.usedChumbadas.push(chumbada.nome);
    gameState.currentOptions = getRandomOptions(chumbada);
    
    chumbadaImage.src = chumbada.url_imagem;
    
    optionBtns.forEach((btn, index) => {
        btn.textContent = gameState.currentOptions[index].nome;
        btn.disabled = false;
        btn.onclick = () => handleAnswer(index);
    });
    
    gameState.isAnswering = true;
    startTimer();
}

function handleAnswer(optionIndex) {
    if (!gameState.isAnswering) return;
    
    gameState.isAnswering = false;
    clearInterval(gameState.timerInterval);
    
    const selectedOption = gameState.currentOptions[optionIndex];
    const isCorrect = selectedOption.nome === gameState.currentChumbada.nome;
    
    optionBtns.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        optionBtns[optionIndex].classList.add('correct');
        const timeBonus = calculateTimeBonus();
        updateScore(10 + timeBonus);
        showResultModal(true, timeBonus);
    } else {
        optionBtns[optionIndex].classList.add('incorrect');
        
        // Mostra a resposta correta
        const correctIndex = gameState.currentOptions.findIndex(
            opt => opt.nome === gameState.currentChumbada.nome
        );
        optionBtns[correctIndex].classList.add('correct');
        
        updateScore(-1);
        showResultModal(false);
    }
}

function usePower(powerName) {
    if (gameState.usedPowers.has(powerName) || gameState.isAnswering === false) return;
    
    gameState.activePower = powerName;
    gameState.usedPowers.add(powerName);
    updatePowerAvailability();
    
    switch(powerName) {
        case 'calm-sea':
            gameState.maxTime += 30;
            gameState.timeLeft += 30;
            updateTimerDisplay();
            break;
        case 'calm-fishing':
            gameState.timePaused = true;
            break;
        case 'fish-on-line':
            eliminateWrongAnswers();
            break;
        case 'official-fishing':
            revealCorrectAnswer();
            break;
    }
}

function eliminateWrongAnswers() {
    const correctIndex = gameState.currentOptions.findIndex(
        opt => opt.nome === gameState.currentChumbada.nome
    );
    
    let eliminated = 0;
    for (let i = 0; i < optionBtns.length; i++) {
        if (i !== correctIndex && eliminated < 2) {
            optionBtns[i].classList.add('eliminated');
            eliminated++;
        }
    }
}

function revealCorrectAnswer() {
    const correctIndex = gameState.currentOptions.findIndex(
        opt => opt.nome === gameState.currentChumbada.nome
    );
    optionBtns[correctIndex].style.background = 'rgba(39, 174, 96, 0.3)';
}

function useHint() {
    if (gameState.hintUsed || !gameState.currentChumbada) return;
    
    gameState.hintUsed = true;
    hintBtn.disabled = true;
    hintText.textContent = gameState.currentChumbada.dica;
    hintText.classList.add('active');
}

function endGame() {
    gameState.isAnswering = false;
    clearInterval(gameState.timerInterval);
    
    // Salva no Google Planilhas
    saveScoreToGoogleSheets();
    
    // Mostra mensagem de conclusão
    alert(`Parabéns ${gameState.playerName}! Você finalizou o jogo com ${gameState.score} pontos!`);
    
    // Volta para a tela de login
    loginScreen.classList.add('active');
    gameScreen.classList.remove('active');
    gameState = {
        playerName: '',
        playerEmail: '',
        score: 0,
        currentRound: 1,
        totalRounds: 30,
        // Reinicia o tempo para 20s na próxima partida
        timeLeft: 20,
        maxTime: 20,
        isAnswering: false,
        currentChumbada: null,
        currentOptions: [],
        hintUsed: false,
        usedChumbadas: [],
        activePower: null,
        usedPowers: new Set(),
        timePaused: false,
        timerInterval: null
    };
}

// ============================================
// INTEGRAÇÃO COM GOOGLE PLANILHAS
// ============================================

function saveScoreToGoogleSheets() {
    // Você precisará configurar uma URL de webhook do Google Apps Script
    // Por enquanto, vamos usar localStorage como fallback
    
    const scores = JSON.parse(localStorage.getItem('chumbadaScores') || '[]');
    scores.push({
        name: gameState.playerName,
        email: gameState.playerEmail,
        score: gameState.score,
        date: new Date().toISOString()
    });
    localStorage.setItem('chumbadaScores', JSON.stringify(scores));
    
    console.log('Score salvo:', {
        name: gameState.playerName,
        email: gameState.playerEmail,
        score: gameState.score
    });
}

function loadRankingFromGoogleSheets() {
    // Carrega do localStorage (fallback)
    const scores = JSON.parse(localStorage.getItem('chumbadaScores') || '[]');
    
    // Ordena por pontuação
    scores.sort((a, b) => b.score - a.score);
    
    // Exibe os top 10
    rankingList.innerHTML = '';
    
    if (scores.length === 0) {
        rankingList.innerHTML = '<p class="loading">Nenhum score registrado ainda.</p>';
        return;
    }
    
    scores.slice(0, 10).forEach((score, index) => {
        const position = index + 1;
        const item = document.createElement('div');
        item.className = `ranking-item ${position <= 3 ? 'top-' + position : ''}`;
        
        const medal = position === 1 ? '🥇' : position === 2 ? '🥈' : position === 3 ? '🥉' : position;
        
        item.innerHTML = `
            <div class="ranking-position">${medal}</div>
            <div class="ranking-info">
                <div class="ranking-name">${score.name}</div>
                <div class="ranking-email">${score.email}</div>
            </div>
            <div class="ranking-score">${score.score}</div>
        `;
        
        rankingList.appendChild(item);
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    gameState.playerName = playerNameInput.value.trim();
    gameState.playerEmail = playerEmailInput.value.trim();
    
    if (gameState.playerName && gameState.playerEmail) {
        playerDisplayName.textContent = gameState.playerName;
        loginScreen.classList.remove('active');
        gameScreen.classList.add('active');
        
        // Reseta o jogo
        gameState.score = 0;
        gameState.currentRound = 1;
        gameState.usedChumbadas = [];
        gameState.usedPowers = new Set();
        scoreDisplay.textContent = '0';
        roundDisplay.textContent = '1/30';
        
        loadChumbada();
    }
});

optionBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => handleAnswer(index));
});

hintBtn.addEventListener('click', useHint);

rankingBtn.addEventListener('click', () => {
    loadRankingFromGoogleSheets();
    rankingModal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    rankingModal.classList.remove('active');
});

rankingModal.addEventListener('click', (e) => {
    if (e.target === rankingModal) {
        rankingModal.classList.remove('active');
    }
});

powerItems.forEach(power => {
    power.addEventListener('click', () => {
        if (!power.classList.contains('disabled') && !power.classList.contains('used')) {
            usePower(power.dataset.power);
        }
    });
});

// Inicializa a disponibilidade de poderes
updatePowerAvailability();
