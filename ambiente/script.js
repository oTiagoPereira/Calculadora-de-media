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
    resposta.innerHTML = `<p><span class="span-red">Reprovado</span>.</p> 
    <p>Você precisa de <span class="span-red">${final}</span> pontos para ser aprovado na avaliação final.</p>`;
  } else if (soma >= 14) {
    media = soma / 2;
    resposta.innerHTML = `<p>A sua média foi <span class="span-green">${media}</span>.</p>
    <p>Você está <span class="span-green">APROVADO</span>.</p>`;
  }
}

function limpar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resposta").innerHTML = "";
}
