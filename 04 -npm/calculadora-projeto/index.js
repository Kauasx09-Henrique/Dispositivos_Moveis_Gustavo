

import { soma, sub, multi, div } from "./calculadora.js"



console.log("Soma ", soma(10, 5));
console.log("Subtração", sub(10, 5))
console.log("Mult", multi(10, 5))
console.log("Divisao", div(10, 5))


import moment from 'moment';

function calcuidade(anonascimento) {
    return anoatual - anonascimento

}

const anonascimento = 1990;
const anoatual = moment().year()
const idade = calcuidade(anonascimento, anoatual);
console.log(`Idade: ${idade} anos`);