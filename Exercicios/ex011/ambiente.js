let num = [5, 8, 9, 3];
console.log(`Nosso vetor é o ${num}`);

num[4] = 10;
console.log(num);

// para add na proxima casa vazia
num.push(7);
console.log(num);

// para contar quantos elementos
console.log(`${num.length} posições`);

console.log(`${num[0]}`);

num.sort();
console.log(num);

for (let p = 0; p <= num.length; p++) {
  console.log(num[p]);
}

// forma mais abreviada (apenas array e object)
for (let p in num) {
  console.log(num[p]);
}

console.log(`A posição do numero 10 é ${num.indexOf(10)} `);
