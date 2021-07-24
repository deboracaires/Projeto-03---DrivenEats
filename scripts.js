

function selecionarPrato(elemento){

    const botaoMarcado = document.querySelector(".prato.selecionado");
    if(botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionado")
    }
    elemento.classList.add("selecionado");
}

function selecionarBebida(elemento){

    const botaoMarcado = document.querySelector(".bebida.selecionado");
    if(botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionado")
    }
    elemento.classList.add("selecionado");
}

function selecionarSobremesa(elemento){

    const botaoMarcado = document.querySelector(".sobremesa.selecionado");
    if(botaoMarcado !== null){
        botaoMarcado.classList.remove("selecionado")
    }
    elemento.classList.add("selecionado");
}