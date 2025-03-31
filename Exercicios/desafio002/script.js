function verificar() {
  var data = new Date();
  var anoatual = data.getFullYear();
  var txtano = window.document.getElementById("txtano");
  var ano = Number(txtano.value);
  var res = window.document.getElementById("res");
  //   txtano.value substitui o Number(txtano.value)
  //   txtano.value.length == 0 -> se não for digitado nenhum valor na caixinha
  if (txtano.value.length == 0 || txtano.value > anoatual) {
    window.alert(`[ERRO] Verifique os dados e tente novamente!`);
  } else {
    // só faz sentido calcular essas outras variaveis dentro do else caso o usuario digite corretamente
    var sexo = window.document.getElementsByName("radsex");
    var idade = anoatual - ano;
    var genero = "";
    // criar a variavel img no javascript
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (sexo[0].checked) {
      genero = "Mulher";
      if (idade <= 10) {
        // criança
        img.setAttribute("src", "imagens/mulher-criança-p.png");
      } else if (idade > 10 && idade <= 25) {
        // jovem
        img.setAttribute("src", "imagens/mulher-jovem-p.png");
      } else if (idade > 25 && idade <= 50) {
        // adulto
        img.setAttribute("src", "imagens/mulher-adulta-p.png");
      } else {
        // idoso
        img.setAttribute("src", "imagens/mulher-idosa-p.png");
      }
    } else if (sexo[1].checked) {
      genero = "Homem";
      if (idade <= 10) {
        // criança
        img.setAttribute("src", "imagens/homem-criança-p.png");
      } else if (idade > 10 && idade <= 25) {
        // jovem
        img.setAttribute("src", "imagens/homem-jovem-p.png");
      } else if (idade > 25 && idade <= 50) {
        // adulto
        img.setAttribute("src", "imagens/homem-adulto-p.png");
      } else {
        // idoso
        img.setAttribute("src", "imagens/homem-idoso-p.png");
      }
    }
  }
  res.innerHTML = `Detectamos ${genero} de ${idade} anos`;
  res.appendChild(img);
  // coloca-se apenas o sinal de = para substituir a outra msg
  //   res.style.textAlign = 'center' -> forma de centralizar no javascript
}
