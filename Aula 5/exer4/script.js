/*Crie uma regex que valide endereços de IP; Ex: 127.0.0.1.*/
let validaIp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/

ip = prompt("informe o ip");
console.log(validaIp.test(ip));
