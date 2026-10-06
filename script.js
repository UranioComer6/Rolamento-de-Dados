const quantidadeInput = document.getElementById("quantidade");
const ladosSelect = document.getElementById("lados");

const dado = document.getElementById("dado");
const numeroDado = document.getElementById("numeroDado");

const resultados = document.getElementById("resultados");
const somaElemento = document.getElementById("soma");

const listaHistorico = document.getElementById("listaHistorico");


// Atualiza o número mostrado no dado
ladosSelect.addEventListener("change", function () {

    numeroDado.textContent = this.value;

});


// Função para gerar número aleatório
function numeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}


// Função principal
function rolarDados() {

    const quantidade = parseInt(quantidadeInput.value);
    const lados = parseInt(ladosSelect.value);

    // Verifica quantidade válida
    if (quantidade < 1 || quantidade > 50) {

        alert("Escolha uma quantidade entre 1 e 50.");

        return;
    }

    // Animação
    dado.classList.remove("rolando");

    // Força o navegador a reiniciar a animação
    void dado.offsetWidth;

    dado.classList.add("rolando");


    const valores = [];

    let soma = 0;


    // Gera os resultados
    for (let i = 0; i < quantidade; i++) {

        const resultado = numeroAleatorio(1, lados);

        valores.push(resultado);

        soma += resultado;

    }


    // Mostra os resultados
    resultados.innerHTML = "";

    valores.forEach((valor) => {

        const elemento = document.createElement("span");

        elemento.classList.add("resultado-individual");

        elemento.textContent = valor;

        resultados.appendChild(elemento);

    });


    // Mostra a soma
    somaElemento.textContent = soma;


    // Adiciona ao histórico
    adicionarHistorico(quantidade, lados, valores, soma);

}


// Adiciona uma rolagem ao histórico
function adicionarHistorico(quantidade, lados, valores, soma) {

    // Remove mensagem de histórico vazio
    const vazio = document.querySelector(".vazio");

    if (vazio) {
        vazio.remove();
    }


    const item = document.createElement("div");

    item.classList.add("item-historico");


    const textoDados =
        quantidade + "d" + lados;


    item.innerHTML = `
        <span>
            🎲 ${textoDados}
            <br>
            <small>
                [${valores.join(", ")}]
            </small>
        </span>

        <strong>
            ${soma}
        </strong>
    `;


    listaHistorico.prepend(item);

}


// Limpa o histórico
function limparHistorico() {

    listaHistorico.innerHTML = `
        <p class="vazio">
            Nenhuma rolagem ainda.
        </p>
    `;

}