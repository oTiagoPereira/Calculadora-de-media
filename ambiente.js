let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
function calcular() {
  N1 = document.getElementById("num1");
  N2 = document.getElementById("num2");
  soma = 0;
  soma = Number(N1.value) + Number(N2.value);

  if (soma < 14) {
    media = soma / 2;
    final = 10 - media;
    resposta.innerHTML = `A sua média foi ${media}. Você precisa de ${final} para ser aprovado na avaliação final.`;
  } else if (soma >= 14) {
    media = soma / 2;
    resposta.innerHTML = `A sua média foi ${media}. Você está APROVADO.`;
  }
}

function limpar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resposta").innerHTML = "";
}
