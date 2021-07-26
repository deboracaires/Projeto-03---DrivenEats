let pratoSelecionado = 0;
let bebidaSelecionado = 0;
let sobremesaSelecionado = 0;
let strPrato = [];
let strBebida = [];
let strSobremesa = [];
let valorPratoString = [];
let valorBebidaString = [];
let valorSobremesaString = [];
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;
let valorFinal = 0;


function selecionarPrato(elemento){

    const botaoMarcado = document.querySelector(".prato.selecionado");
    pratoSelecionado = 1;
    if(botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    
    habilitarPedido();
}
function verificaPrato(elemento){
    const botaoMarcado = document.querySelector(".prato.selecionado");
    if(botaoMarcado !== null){
        strPrato = elemento.querySelector(".prato-conteiner .titulo-produto").innerHTML;
        strPrato = strPrato.replace("\n", "");                  
        strPrato = strPrato.replace("                    ", "");
        strPrato = strPrato.replace("\n", "");
        
        valorPratoString = elemento.querySelector(".prato-conteiner .valor-produto").innerHTML;
        valorPratoString = valorPratoString.replace("R$ "," ");
        valorPratoString = valorPratoString.replace("\n"," ");
        valorPratoString = valorPratoString.replace("\n"," ");
        valorPratoString = valorPratoString.replace(",",".");

        valorPrato = parseFloat(valorPratoString);
        
    }
}

function transformaValor(valorString){
    let tamanho = valorString.length;
    
}

function selecionarBebida(elemento){

    const botaoMarcado = document.querySelector(".bebida.selecionado");
    bebidaSelecionado = 1;
    if(botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    strBebida = document.querySelector(".bebida-conteiner .titulo-produto").innerHTML;
    habilitarPedido();
}
function verificaBebida(elemento){
    const botaoMarcado = document.querySelector(".bebida.selecionado");
    if(botaoMarcado !== null){
        strBebida = elemento.querySelector(".bebida-conteiner .titulo-produto").innerHTML;

        strBebida = strBebida.replace("\n", "");                  
        strBebida = strBebida.replace("                    ", "");
        strBebida = strBebida.replace("\n", "");

        valorBebidaString = elemento.querySelector(".bebida-conteiner .valor-produto").innerHTML;
        valorBebidaString = valorBebidaString.replace("R$ "," ");
        valorBebidaString = valorBebidaString.replace("\n"," ");
        valorBebidaString = valorBebidaString.replace("\n"," ");
        valorBebidaString = valorBebidaString.replace(",",".");

        valorBebida = parseFloat(valorBebidaString);
    }
}
 
function selecionarSobremesa(elemento){

    const botaoMarcado = document.querySelector(".sobremesa.selecionado");
    sobremesaSelecionado = 1;
    if(botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    habilitarPedido();
    strSobremesa = document.querySelector(".sobremesa-conteiner .titulo-produto").innerHTML;
}

function verificaSobremesa(elemento){
    const botaoMarcado = document.querySelector(".sobremesa.selecionado");
    if(botaoMarcado !== null){
        strSobremesa = elemento.querySelector(".sobremesa-conteiner .titulo-produto").innerHTML;
        
        strSobremesa = strSobremesa.replace("\n", "");                  
        strSobremesa = strSobremesa.replace("                    ", "");
        strSobremesa = strSobremesa.replace("\n", "");

        valorSobremesaString = elemento.querySelector(".sobremesa-conteiner .valor-produto").innerHTML;
        valorSobremesaString = valorSobremesaString.replace("R$ "," ");
        valorSobremesaString = valorSobremesaString.replace("\n"," ");
        valorSobremesaString = valorSobremesaString.replace("\n"," ");
        valorSobremesaString = valorSobremesaString.replace(",",".");

        valorSobremesa = parseFloat(valorSobremesaString);
    }
}



function habilitarPedido(){
    const elemento = document.querySelector(".selecionar-pedido");
    
    if(pratoSelecionado === 1 && bebidaSelecionado === 1 && sobremesaSelecionado === 1){
        elemento.classList.add("pedido-finalizado");
        elemento.innerHTML = "Fechar pedido";
    }

}




function finalizarPedido(elemento){
    const botaoMarcado = document.querySelector(".selecionar-pedido.pedido-finalizado");
    valorFinal = (valorPrato + valorBebida + valorSobremesa).toFixed(2);

    const textoWpp = "Olá, gostaria de fazer o *pedido*:\n- *Prato*:  " + strPrato + "\n- *Bebida*:  " + strBebida + "\n- *Sobremesa*:  " + strSobremesa + "\n*Total*: R$  " + valorFinal;
    
    const link = 'https://wa.me/5562982420560?text=' + encodeURIComponent(textoWpp);
    if(botaoMarcado !== null){
        window.open(link);
    }else{
        alert("Você ainda não selecionou todos os pedidos necessários para a finalização!");
    }
    
}

