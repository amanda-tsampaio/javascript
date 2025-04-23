let num = document.querySelector("input#fnum");
let lista = document.getElementById("flista");
let res = window.document.getElementById("res");
let valores = [];

function adicionar() {
  if (numero.value.length == 0 || numero.value > 100 || numero.value < 1) {
    window.alert("Por favor, digite um número entre 1 e 100.");
  } else {
    let n = Number(numero.value);
    let item = document.createElement("option");
    item.text = `Valor ${n} adicionado`;
    // serve para selecionar, no caso pro backend
    // item.value = `valores${x}`;
    valores.appendChild(item);
  }
}

function finalizar() {
  if (item < 1) {
    window.alert("Por favor, adicione valores antes de finalizar.");
  } else {
  }
}
