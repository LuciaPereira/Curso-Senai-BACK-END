/*Escreva uma função que retorne um número aleatório. O número máximo
retornado deve ser passado via parâmetro.*/
function numAlet(numMax){
         return Math.floor(Math.random() * numMax) + 1;
}
 console.log(numAlet(10000));