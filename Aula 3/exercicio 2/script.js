const verificaIdade = function (idade){
    if (idade <= 0 || typeof idade != 'number'){
        return `Idade inválida`;
    }else{
        return `Você tem ${idade} anos.`;
    }    
}
console.log(verificaIdade(0));
console.log(verificaIdade(27));