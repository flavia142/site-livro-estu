const perguntas = [
    {
        pergunta: "Qual a capital do Brasil?",
        opcoes: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        resposta: 1
    },
    {
        pergunta: "Qual o maior planeta do Sistema Solar?",
        opcoes: ["Terra", "Marte", "Júpiter", "Saturno"],
        resposta: 2
    },
    {
        pergunta: "Qual é a fórmula da água?",
        opcoes: ["H2O", "O2", "CO2", "NaCl"],
        resposta: 0
    }
];

let perguntaAtual = 0;
let acertos = 0;

const perguntaEl = document.getElementById('pergunta');
const opcoesEl = document.getElementById('opcoes');
const resultadoEl = document.getElementById('resultado');
const resultadoTextoEl = document.getElementById('resultado-texto');
const proximaEl = document.getElementById('proxima');
const reiniciarEl = document.getElementById('reiniciar');

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    perguntaEl.innerText = pergunta.pergunta;
    opcoesEl.innerHTML = '';
    pergunta.opcoes.forEach((opcao, index) => {
        const button = document.createElement('button');
        button.innerText = opcao;
        button.classList.add('opcao');
        button.addEventListener('click', () => verificarResposta(index));
        opcoesEl.appendChild(button);
    });
}

function verificarResposta(opcaoEscolhida) {
    if (opcaoEscolhida === perguntas[perguntaAtual].resposta) {
        acertos++;
    }
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById('quiz-container').classList.add('hidden');
    resultadoEl.classList.remove('hidden');
    resultadoTextoEl.innerText = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
}

reiniciarEl.addEventListener('click', () => {
    perguntaAtual = 0;
    acertos = 0;
    resultadoEl.classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    carregarPergunta();
});

// Inicializa o quiz
carregarPergunta();
