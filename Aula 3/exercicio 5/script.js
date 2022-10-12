/*Escreva uma função que recebe a idade de uma pessoa. Se ela tem mais de 18
anos ela pode entrar na auto escola, imprima uma mensagem informando isso.
Se ela tem menos, ela não pode, imprima outra mensagem com este aviso.
Execute a função nos dois casos.*/
const idade= prompt("informe a idade");

console.log(permiteEntrarNaAutoEscola(idade));

function permiteEntrarNaAutoEscola(idade){
    if (idade >= 18){
        return 'Você pode entrar na Auto Escola!'
    } else{
        return 'Você ainda não tem idade para entrar na Auto Escola!'
    }
    
}
