/*Escreva uma função que recebe uma string. Se o texto conter mais de 10
caracteres imprima “Texto muito longo”. Se conter menos, imprima “Texto dentro
do limite”.*/

limiteString("ABCDEFGHIJ");
limiteString("ABCDEFGHIJk");

function limiteString(texto){
    if(texto.length > 10){
            console.log("Texto muito long");
        }else{
             console.log("Texto dentro do Limite");
         }
 }