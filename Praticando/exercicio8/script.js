/* 8. Faça um programa para o cálculo de uma folha de pagamento, sabendo que os
descontos são do imposto de Renda, que depende do salário bruto (conforme tabela
abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do salário bruto, mas
não é descontado (é a empresa que deposita.)
O salário líquido corresponde ao salário bruto menos os descontos O programa
deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no
mês.
a. Desconto do IR;
b. Salário Bruto ate R$900,00 (inclusive) – Isento;
c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%;
d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%;
e. Salário bruto acima de 2500 – Desconto de 20%.
Imprima na tela as informações, dispostas conforme o exemplo abaixo, no exemplo
valor da hora é 5 e a quantidade de horas é 220.
Salário bruto (5 * 220) : R$ 1.100,00
( – ) IR (5%) : R$ 55,00
( – ) INSS ( 10% ) : R$ 110,00
FGTS ( 11%) : R$ 121,00
Total de descontos : R$ 165,00
Salário Líquido : R$ 935,00*/
function calculo()
{
    let precoHora = parseFloat(document.getElementById('vhora').value);
    let quantHoras = parseFloat(document.getElementById('qhora').value);
    let salario = precoHora * quantHoras;
    let inss = salario * 0.10;
    let fgts = salario * 0.11;

    if(salario<=900){
        ir=0 //IMPOSTO DE RENDA
        totalDescontos = ir + inss;
        salarioLiquido = salario - totalDescontos;

    }
    else if(salario > 900 && salario <= 1500)
    {
        ir=salario*0.05;
        totalDescontos=ir + inss;
        salarioLiquido= salario- totalDescontos;
    }
    else if(salario>1500 && salario<=2500)
    {
        ir=salario*0.10;
        totalDescontos=ir+inss;
        salarioLiquido=salario-totalDescontos;
    }
    else if (salario>2500)
    {
        ir=salario*0.20;
        totalDescontos=ir+inss;
        salarioLiquido=salario-totalDescontos;
    }
    resposta.innerHTML=  "Salário Bruto: R$" + salario.toFixed(2) + "<br>" + 
    " IR: R$" + ir.toFixed(2) + "<br>" +
    " INSS:R$" + inss.toFixed(2) + "<br>" +
     "FGTS:R$" + fgts.toFixed(2) + "<br>" +
     "Total de descontos : R$" + totalDescontos.toFixed(2) + "<br>" +
     "Salario Liquido: R$" + salarioLiquido.toFixed(2) ;   
    
}

