/*Escreva uma função que detecta o tipo de dado passado. Verifque se é um:
number, boolean ou string e retorne uma mensagem para cada tipo. Execute
uma função para cada caso.*/
const tipoDado = dado => typeof dado;

console.log('O Tipo é: '+tipoDado(1));
console.log(tipoDado("Oi"));
console.log(tipoDado(5.5));
console.log(tipoDado(1 == 1));
console.log(tipoDado(false));
console.log(tipoDado(array = []));