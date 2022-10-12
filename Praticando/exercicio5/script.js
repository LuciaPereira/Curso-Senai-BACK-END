/* Faça um programa que pergunte o preço de três produtos e informe qual produto
você deve comprar, sabendo que a decisão é sempre o mais barato.*/
function verifica(){
    let produto1 = parseFloat(document.getElementById('prod1').value);
    let produto2 = parseFloat(document.getElementById('prod2').value);
    let produto3 = parseFloat(document.getElementById('prod3').value);
    let resposta = document.getElementById('resposta');
    
    if (produto1 < produto2)
    {
        if (produto1 < produto3){
            resposta.innerHTML=("Voce deve comprar o primeiro produto!");}
        else{
            resposta.innerHTML=("Voce deve comprar o terceiro produto!");}
    }
    else{
        if (produto2 < produto3){
            resposta.innerHTML=("Voce deve comprar o segundo produto!");}
        else{
            resposta.innerHTML=("Voce deve comprar o terceiro produto!");}
    }
}