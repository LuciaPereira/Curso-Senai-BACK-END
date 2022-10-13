/*9. Faça um programa que receba um número e exiba o dia correspondente da semana.
(1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido).*/
function exiba(){
    let diaSemana = parseInt(document.getElementById('dia').value);
    if (diaSemana == 1){
        resposta.innerHTML= ('Domingo');
    }
    else if( diaSemana == 2){
        resposta.innerHTML= ('Segunda - Feira');
    }
    else if (diaSemana == 3){
        resposta.innerHTML=  ('Terça - Feira');
    }
    else if(diaSemana == 4 ){
        resposta.innerHTML= ('Quarta - Feira');
    }
    else if(diaSemana == 5 ){
        resposta.innerHTML= ('Quinta - Feira');
    }
    else if(diaSemana == 6){
        resposta.innerHTML= ('Sexta - Feira');
    }
    else if(diaSemana == 7 ){
        resposta.innerHTML= ('Domingo');
    }
    else
    resposta.innerHTML= ('Valor Invalido. Dia não encontrado.');

}