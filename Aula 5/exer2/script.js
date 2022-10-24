/*Crie uma regex que só aceite strings terminadas com ID.*/
        let validaString = / ^[A-Z]|[^ID]?$/;
        let s =   prompt("Informe os caracteres:");
        console.log(validaString.test(s));
        