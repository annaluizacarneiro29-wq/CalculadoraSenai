// Seleciona os elementos do DOM
const btnCalcular = document.getElementById("btnCalcular");
const inputDistancia = document.getElementById("distancia");
const inputConsumo = document.getElementById("consumo");
const areaResultado = document.getElementById("areaResultado");
const mensagemResultado = document.getElementById("mensagemResultado");

// Adiciona evento de clique ao botão
btnCalcular.addEventListener("click", function () {
  // Captura e converte os valores
  const distancia = Number(inputDistancia.value);
  const consumo = Number(inputConsumo.value);

  // Validação de dados (não confie cegamente no input do usuário)
  if (distancia <= 0 || consumo <= 0 || isNaN(distancia) || isNaN(consumo)) {
    alert("Por favor, insira valores válidos e maiores que zero.");
    return;
  }

  // Realiza o cálculo
  const litrosNecessarios = distancia / consumo;

  // Formata e exibe a mensagem no DOM
  mensagemResultado.innerHTML = `Para percorrer ${distancia} km, serão necessários ${litrosNecessarios.toFixed(2)} litros de combustível.`;
  areaResultado.style.display = "block";
});
