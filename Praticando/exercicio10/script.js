/* 10.Faça um programa que lê as duas notas parciais obtidas por um aluno numa
disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos
obedece à tabela abaixo:
Média de aproveitamento Conceito
Entre 9.0 e 10.0 A
Entre 7.5 e 9.0 B
Entre 6.0 e 7.5 C
Entre 4.0 e 6.0 D
Entre 4.0 e 0 E*/
function calculaMedia()
{
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);

    if(nota1<=10 && nota2<=10 && nota1>=0 && nota2>=0 )
    {    
        let media = ((nota1 + nota2) / 2); 
        if (media >= 9.1  &&  media <=10 ){
            resposta.innerHTML= ('Media = ' + media + ' Conceito = A');
        }
        else if (media >=7.6 &&  media <=9) {
            resposta.innerHTML= ('Media = ' + media + ' Conceito = B');
        }
        else if (media >=6.1 && media <=7.5 ){
            resposta.innerHTML= ('Media = ' + media + ' Conceito = C');
        }
        else if (media >4.1 && media<=6 ){
            resposta.innerHTML= ('Media = ' + media + ' Conceito = D');
        }
        else if (media>=0 && media<=4 ){
            resposta.innerHTML= ('Media = ' + media + ' Conceito = E');
        }

    }
    else {
            resposta.innerHTML= ('Erro - As notas tem que ser menores que 10 ou maiores que 0 .');
    }
    
    
}
