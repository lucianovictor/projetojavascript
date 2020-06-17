let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");
}

    let adultos = inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;

    let qdtTotalCarne = carnePP(duracao)* adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalcerveja = cervejaPP(duracao)* adultos ;
    let qdtTotalbedidas = bedidasPP(duracao)* adultos + (bedidasPP(duracao) / 2 * criancas);


    resultado.innerHTML  = `<p>${qdtTotalCarne / 1000} KG de Carne`
    resultado.innerHTML += `<p>${qdtTotalcerveja} ML de Cerveja`
    resultado.innerHTML += `<p>${qdtTotalbedidas} ML de Bedidas`


    




function carnePP(duracao) {
    if(duracao >=6) {

        return 650;
    }else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao >=6) {

        return 2000;
    }else {
        return 1200;
    }
}

function bedidasPP(duracao) {
    if(duracao >=6) {

        return 1500;
    }else {
        return 1000;
    }
}