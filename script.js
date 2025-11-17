function cliqueAqui() {
  let nome = document.getElementById("nome").value;
  let peso = document.getElementById("Peso").value
  let altura = document.getElementById("Altura").value
  let resposta = document.getElementById("resposta");
      const newImage = document.createElement('img');
          newImage.src = "pig2.png";

resposta.innerHTML = "";

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        resposta.textContent = nome + " está abaixo do peso. IMC: " + imc.toFixed(2);

        const img = document.createElement("img");
        img.src = "abaixo.png";   // imagem para este caso
        resposta.appendChild(img);

    } else if (imc >= 18.5 && imc < 24.9) {
        resposta.textContent = nome + " está com peso normal. IMC: " + imc.toFixed(2);

        const img = document.createElement("img");
        img.src = "normal.png";   // imagem para peso normal
        resposta.appendChild(img);

    } else if (imc >= 25 && imc < 29.9) {
        resposta.textContent = nome + " está com sobrepeso. IMC: " + imc.toFixed(2);

        const img = document.createElement("img");
        img.src = "sobrepeso.png"; // imagem para sobrepeso
        resposta.appendChild(img);

    } else {
        resposta.textContent = nome + " está com obesidade. IMC: " + imc.toFixed(2);

        const img = document.createElement("img");
        img.src = "obesidade.png"; // imagem para obesidade
        resposta.appendChild(img);
    }
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
