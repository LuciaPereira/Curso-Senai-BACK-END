/* Faça um programa que pergunte em que turno você estuda. Peça para digitar M-
matutino ou V-vespertino ou N-noturno. Imprima a mensagem “Bom dia!” ou “Boa
Noite” ou “Valor inválido”, conforme o caso.*/
function verifica(){
    var turno = document.getElementById("char").value;
    turno = turno.toLowerCase();
    let resposta = document.getElementById('resposta');

    if(turno=='m'||turno=='M'){
        resposta.innerHTML= ("Bom dia!");
    }
    else if(turno=='v'||turno=='V'){
        resposta.innerHTML= ("Boa tarde!");
    }
    else if (turno=='n'||turno=='N'){
        resposta.innerHTML= ("Boa noite!");
    }else{
        resposta.innerHTML= ("Valor inválido");
    }
    
}
