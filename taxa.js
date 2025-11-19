function cliqueAqui() {
    let nome = document.getElementById("nome").value;
    let peso = parseFloat(document.getElementById("Peso").value);
    let altura = parseFloat(document.getElementById("Altura").value);
    let idade = parseInt(document.getElementById("Idade").value);
    let resposta = document.getElementById("resposta");

    // pegar sexo selecionado
    let sexo = document.querySelector("input[name='sexo']:checked");


     if (nome === "" || peso === "" || altura === "" || idade === "" || !sexo) {
        alert("Por favor, preencha todos os campos antes de calcular.");
        return;
     }
    if (!sexo) {
        resposta.textContent = "Selecione o sexo.";
        return;
    }

    sexo = sexo.value;

    let basal = 0;

    if (sexo === "Masculino") {
        // Fórmula para homens
        basal = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    } else {
        // Fórmula para mulheres
        basal = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }

    resposta.textContent =
        `${nome} tem uma taxa metabólica basal de ${basal.toFixed(2)} kcal/dia.`;
}
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Tamanho do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Letras do efeito
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const matrix = letras.split("");

const tamanhoFonte = 16;
const colunas = canvas.width / tamanhoFonte;

// posição de cada "gota"
const gotas = [];

for (let i = 0; i < colunas; i++) {
    gotas[i] = 1;
}

function desenhar() {
    // fundo preto com rastro
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00"; // verde do Matrix
    ctx.font = tamanhoFonte + "px monospace";

    for (let i = 0; i < gotas.length; i++) {
        const texto = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(texto, i * tamanhoFonte, gotas[i] * tamanhoFonte);

        // reinicia quando chega embaixo
        if (gotas[i] * tamanhoFonte > canvas.height && Math.random() > 0.975) {
            gotas[i] = 0;
        }

        gotas[i]++;
    }
}

setInterval(desenhar, 33);