function verifica(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    var resposta = document.getElementById('resposta');
     
    let maior = numero1
    if(numero2 > maior)
    maior = numero2
    resposta.innerHTML= 'Numero Maior:  ' + maior;
    
  }