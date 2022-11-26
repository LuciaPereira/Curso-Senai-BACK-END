const express   = require('express');               //Importando pacote/módulo Express
const exphbs    = require('express-handlebars');    //Importando pacote/módulo Handlebars
const app       = express();

app.engine('handlebars', express.engine());
app.set('view engine', 'handlebars');

//Rota principal da aplicação
app.get('/',(req,res)=>{
    app.render('main', {layout:false})
});

//Executar o servidor
app.listen(3000);