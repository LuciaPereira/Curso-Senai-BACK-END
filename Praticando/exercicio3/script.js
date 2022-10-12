/* 3. Faça um programa que se uma letra é vogal ou consoante.*/
function verifica()
{
    let letra = document.getElementById("char").value;
    letra = letra.toLowerCase();
    if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u' || 
        letra=='A' || letra=='E' || letra=='I' || letra=='O' || letra=='U')
    {
        resposta.innerHTML=  letra + ' é Vogal!  ' ;
    }
    else{
        resposta.innerHTML=  letra + ' é Consoante!  ' ;
    }     
}