function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  msg.innerHTML = `Agora são exatamente ${hora}h${minuto}min.`;
  if (hora >= 5 && hora < 12) {
    //bom dia
    img.src = "imagens/manha-p.png";
    document.body.style.background = "#E4CCB9";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    document.body.style.background = "#925C63";
    img.src = "imagens/tarde-p.png";
  } else {
    //boa noite
    img.src = "imagens/noite-p.png";
    document.body.style.background = "#275687";
  }
}
