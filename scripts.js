let pratoSelecionado = 0;
let bebidaSelecionado = 0;
let sobremesaSelecionado = 0;


function selecionarPrato(elemento){

    const botaoMarcado = document.querySelector(".prato.selecionado");
    if(botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionado");
        pratoSelecionado = 1;
    }
    elemento.classList.add("selecionado");
    pratoSelecionado = 1;
    habilitarPedido();
    
}



function selecionarBebida(elemento){

    const botaoMarcado = document.querySelector(".bebida.selecionado");
    if(botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionado");
        bebidaSelecionado = 1;

    }
    elemento.classList.add("selecionado");
    bebidaSelecionado = 1;
    habilitarPedido();
    
    
}
 
function selecionarSobremesa(elemento){

    const botaoMarcado = document.querySelector(".sobremesa.selecionado");
    if(botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionado");
        sobremesaSelecionado = 1;
    }
    elemento.classList.add("selecionado");
    sobremesaSelecionado = 1;
    habilitarPedido();
    
}
function habilitarPedido(){
    const elemento = document.querySelector(".selecionar-pedido");
    if(pratoSelecionado === 1 && bebidaSelecionado === 1 && sobremesaSelecionado === 1){
        elemento.classList.add("pedido-finalizado");
    }
}


function finalizarPedido(elemento){
    const botaoMarcado = document.querySelector(".selecionar-pedido");
    if(pratoSelecionado === 1 && bebidaSelecionado === 1 && sobremesaSelecionado === 1){
        elemento.getElementById("selecionar-pedido").disabled = true;
    }else{
        elemento.getElementById("selecionar-pedido").disabled = false;
    }
    
}