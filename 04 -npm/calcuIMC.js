//Criando um módulo no meu projeto
//Exportadno funcionalidade desse módulo

export function calcuIMC(peso, altura){
    return peso / (altura * altura)
}
export const tabelaIMC = [
    {Limite: 18.5, classificaca: "Magreza"},
    {Limite: 24.9, classificaca: "Normal"},
    {Limite: 29.9, classificaca: "Sobrepesso"},
    {Limite: 34.9, classificaca: "Obesidade Grau I"},
    {Limite: 39.9, classificaca: "Obesidade Grau II"},
    {Limite: 40.0, classificaca: "Obesidade Grau III"},
    

]