function tabuada() {
  let numero = window.document.getElementById("txtn");
  let tab = document.getElementById("seltab");
  if (numero.value.length == 0) {
    window.alert("Por favor, digite um número.");
  } else {
    let n = Number(numero.value);
    let x = 1;
    // para limpar a tabuada antes de calcular outra
    tab.innerHTML = ``;
    while (x <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${x} = ${n * x}`;
      // serve para selecionar, no caso pro backend
      item.value = `tab${x}`;
      tab.appendChild(item);
      x++;
    }
  }
}
