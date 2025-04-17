function contar() {
  let inicio = window.document.getElementById("txti");
  let fim = window.document.getElementById("txtf");
  let passo = window.document.getElementById("txtp");
  let res = window.document.getElementById("res");
  if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
    res.innerHTML = `Impossível contar`;
  } else {
    res.innerHTML = `Contando: `;
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo inválido! Será considerado PASSO 1.");
      // Contagem crescente
      if (i < f) {
        for (let x = i; x <= f; x++) {
          res.innerHTML += ` ${x} \u{1F449}`;
        }
      } else {
        // contagem regressiva
        for (let x = i; x >= f; x--) {
          res.innerHTML += ` ${x} \u{1F449}`;
        }
      }
    } else {
      // Contagem crescente
      if (i < f) {
        for (let x = i; x <= f; x += p) {
          res.innerHTML += ` ${x} \u{1F449}`;
        }
      } else {
        // contagem regressiva
        for (let x = i; x >= f; x -= p) {
          res.innerHTML += ` ${x} \u{1F449}`;
        }
      }
    }
    res.innerHTML += ` \u{1F3C1}`;
  }
}
