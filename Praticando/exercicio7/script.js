/*7. As organizações CSM resolveram dar um aumento de salário aos seus colaboradores
e lhe contrataram para desenvolver o programa que calculará os reajustes.
a. Faça um programa que recebe o salário de um colaborador e o reajuste
segundo o seguinte critério, baseado no salário atual;
b. Salários até R$ 280,00 (incluindo): aumento de 20%;
c. Salários entre R$ 280,00 e R$700,00: aumento de 15%;
d. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%;
e. Salários de R$ 1500,00 em diante: aumento de 5%
Após o aumento ser realizado; informe na tela;
O salário antes do reajuste;
O percentual de aumento aplicado;
O valor do aumento;
O novo salário, após o aumento.*/
function calculo(){
    let salario = parseFloat(document.getElementById('sal').value);
    let salarioNovo;
    let percentual;
    if(salario <=280){
        salarioNovo = salario *1.20;
        percentual = 20;
    }
    else if (salario > 280 && salario <700)
    {
        salarioNovo = salario*1.15;
        percentual = 15; 
    }
    else if(salario >=700 && salario < 1500)
    {
        salarioNovo = salario*1.10;
        percentual = 10;
    }
    else {
        salarioNovo = salario*1.05;
        percentual = 5;
    }
    let aumento = salarioNovo - salario;
    resposta.innerHTML=  "Seu antigo salário era: R$" + salario.toFixed(2) + ", seu aumento foi de: " + percentual + 
    "%, o que resultou em um aumento de: R$" + aumento.toFixed(2) + ". Seu novo salário é de: R$" + salarioNovo.toFixed(2);
    

}