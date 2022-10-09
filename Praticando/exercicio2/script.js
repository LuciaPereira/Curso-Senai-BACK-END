function verifica(){
    let numero = parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta')
     if(numero > 0){
        resposta.innerHTML=  numero + ' é Positivo!  ' 
     }
     else if(numero < 0){
        resposta.innerHTML=  numero + ' é Negativo!  ' 
    }
     else{
        resposta.innerHTML= ' Nem positivo nem negativo, nulo! '
     }    
  }