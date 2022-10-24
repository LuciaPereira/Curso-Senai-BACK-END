/*Crie uma regex que valide nome de usuários no sistema; Aceita letras de a-z, _
e - , números de 0-9, mínimo de 3 caracteres e máximo de 16.*/
let validaUsuarios = /^[a-zA-Z0-9]{3,16}$/;
id = prompt("informe o nome do usuario");
console.log(validaUsuarios.test(id));
