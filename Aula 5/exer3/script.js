/*Crie uma regex que aceite a seguinte expressão “Marca: nomeDaMarca”;*/


let validaString = /^[Marca: nomeDaMarca-a-zA-Z]/;
        let s =   prompt("Informe a expressao:");
        console.log(validaString.test(s));
       