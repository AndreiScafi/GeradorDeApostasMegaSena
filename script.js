//CÓDIGO MEGASENA

var megaSena = [];

document.getElementById("rollButton").onclick = function(){

function sorteio(){
    return Math.floor(Math.random() * 60 + 1)
}

while (megaSena.length < 6) {

    var resultado = sorteio();

    if (megaSena.indexOf(resultado) === -1){
        megaSena.push(resultado);
    }
}
for (let i = 0; i < megaSena.length; i++) {
    const numeroSorteado = megaSena[i];

    document.getElementById("n" + (i + 1) + "Label").innerHTML = numeroSorteado;
}

megaSena = [];
}

// CÓDIGO LOTOFÁCIL 

var lotoFacil = [];

document.getElementById("rollButton1").onclick = function(){

    function sorteio1(){
        return Math.floor(Math.random() * 25 + 1)
    }
    
    while (lotoFacil.length < 15) {
    
        var resultado1 = sorteio1();
    
        if (lotoFacil.indexOf(resultado1) === -1){
            lotoFacil.push(resultado1);
        }
    }
    for (let i = 0; i < lotoFacil.length; i++) {
        const numeroSorteado = lotoFacil[i];
    
        document.getElementById("n" + (i + 1) + "Label2").innerHTML = numeroSorteado;
    }
    
    lotoFacil = [];
}

    