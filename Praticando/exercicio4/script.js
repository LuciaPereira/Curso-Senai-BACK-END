/* Faça um programa que receba três números, e mostre o maior e o menor deles;*/
function verifica(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    let numero3 = parseInt(document.getElementById('num3').value);
    let maior = Math.max(numero1, numero2, numero3);
    let menor = Math.min(numero1, numero2, numero3);

   let resp = document.body.appendChild(document.createElement('resp'));
   resp.textContent += ' O maior é ' + maior + ' e o menor é ' + menor;
    
}