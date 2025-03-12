//codigo para executar 


import {calcuIMC, tabelaIMC } from "./calcuIMC.js"

console.log(">>> Calculadora IMC <<<<")
console.table(tabelaIMC)


const peso = 57
const altura  = 1.49

const resultado = calcuIMC(peso, altura)


console.log("Resultado IMC:")
console.log(resultado.toFixed(2))

import moment from "moment"

const hoje = moment().locale('pt-br')

console.log("Data:")
console.log(hoje.format("DD/MM/YYYY"))