function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(2, 9));

//parametros opcionais para devolver o valor zero caso a pessoa digite apenas um num
function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

console.log(soma(2));
