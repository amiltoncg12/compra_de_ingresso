function comprar() {
    // declarando as variaveis
    let tipo = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);



    switch(tipo) {
        case "pista" :
            comprarPista(quantidade);
        break;

        case "superior":
            comprarSuperior(quantidade);
        break;

        case "inferior":
            comprarInferior(quantidade);
        break

        default: 
            console.log("Algo deu errado");
    }

};

function comprarPista(qtd) {

    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    
    if(qtd > qtdPista) {
       
        alert("Quantidade indisponível para tipo pista");

    } else {
        
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Comprar realizada com sucesso");
    
    }
}

function comprarSuperior(qtd) {
    
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    
    if(qtd > qtdSuperior) {
       
        alert("Quantidade indisponível para tipo superior");

    } else {
        
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Comprar realizada com sucesso");
    
    }
}

function comprarInferior(qtd) {
    
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    
    if(qtd > qtdInferior) {
       
        alert("Quantidade indisponível para tipo Inferior");

    } else {
        
        qtdInferior = qtdInferior - qtd;
        document.getElementById("qtd-superior").textContent = qtdInferior;
        alert("Comprar realizada com sucesso");
    
    }
}