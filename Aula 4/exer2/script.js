/*Cria uma classe que simula um carrinho de compras de um e-commerce;
Propriedades itens, quantidade total, valor total; Crie os métodos para adicionar
e remover itens.*/
class Carrinho
{ 
    constructor(itens, quant, valor){
        this.itens = itens;
        this.quant = quant;
        this.valor = valor;
    }    
    adicionar()    
    {          
        itens = this.itens + quant;  
        console.log('Quantidade de itens no carrinho apos adicionar: ', + itens);        
    }
    remover(){
        itens = itens - quant;
        console.log('Quantidade de itens no carrinho apos remover: ', + itens); 
    }
    imprimir(){
        console.log("Imprimindo")
        console.log('Itens no carrinho:', + itens); 
        console.log('valor dos itens no carrinho: R$', + this.valor); 
    }
}
let itens = prompt ("Entre quantidade de itens: ");
let quant = prompt ("Entre quantidade de itens que deseja adicionar: ");
let carrinho = new Carrinho(itens,quant,5);
carrinho.adicionar(); 

let quant2 = prompt ("Entre quantidade de itens que deseja remover: ");
carrinho.remover();
carrinho.imprimir();





