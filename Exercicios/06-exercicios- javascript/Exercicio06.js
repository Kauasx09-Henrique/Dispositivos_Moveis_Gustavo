let array = [10,20,30,40,50];

let maiorNumero= Math.max(...array)
let menorNumero= Math.min(...array)

array.push(60);

console.log(array)

array.pop()
console.log(array)
console.log(maiorNumero)
console.log(menorNumero)