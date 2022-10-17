class Conta
{
    constructor(saldo){
        this.saldo = saldo
    }
    get verSaldo(){
        return 'O saldo e ' + this.saldo;
    }
    set novoSaldo(value){
        this.saldo = value;

    }
    sacar(valor)
    {
        console.log("valor: " + valor);
        console.log("saldo: " + saldo);
        if(saldo >= valor)
        {
            this.saldo = saldo - valor;
            console.log("Sacado: " + valor);
            console.log("Novo saldo: " + saldo + "\n");
        } else {
                console.log("Saldo insuficiente. Faça um depósito\n");
        }
    }
    depositar(saldo1)
    {
        this.saldo  = saldo + saldo1;
        console.log("Depositado: " + saldo1);
        console.log("Novo saldo: " + saldo + "\n");
    }       
    imprimir(){
        console.log("\tEXTRATO");
        console.log("Saldo atual: %.2f\n",this.saldo);
    } 
}
    let saldo = prompt ("Entre com o saldo inicial na conta: ");
    //Criando a conta 
    let minhaConta = new Conta(saldo);
    let saldo1  = prompt ("Entre com o valor  que deseja depositar na conta: ");
    minhaConta.depositar(saldo1);
    let valor = prompt ("Entre com o valor  que deseja sacar na conta: ");
    minhaConta.sacar(valor);
    minhaConta.imprimir();
    