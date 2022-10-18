//DECLARAÇÃO DAS VARIÁVEIS

/*let n1; 
let n2; 
let n3;  
let n4; 
let n5;  
let n6;
let n7;
let n8;
let n9;
let n10;
let n11;
let n12;
let n13;
let n14;
let n15;

//CÓDIGO MEGASENA

let numeros = [n1, n2, n3, n4, n5, n6];*/

// MELHORAR CÓDIGO PARA NÃO TER QUE ESCREVER A COMPARAÇÃO DE CADA NÚMERO

// CÓDIGO ANTIGO
/*document.getElementById("rollButton").onclick = function(){

    n1 = Math.floor(Math.random() * 60) + 1;
    n2 = Math.floor(Math.random() * 60) + 1;
    n3 = Math.floor(Math.random() * 60) + 1;
    n4 = Math.floor(Math.random() * 60) + 1;
    n5 = Math.floor(Math.random() * 60) + 1;
    n6 = Math.floor(Math.random() * 60) + 1;
     
   while(n1 === n2 || n1 === n3 || n1 === n4 || n1 === n5 || n1 === n6 || n2 === n3 || n2 === n4 || n2 === n5 || n2 === n6 || n3 === n4 || n3 === n5 || n3 === n6 || n4 === n5 || n4 === n6 || n5 === n6){
    n1 = Math.floor(Math.random() * 60) + 1;
    n2 = Math.floor(Math.random() * 60) + 1;
    n3 = Math.floor(Math.random() * 60) + 1;
    n4 = Math.floor(Math.random() * 60) + 1;
    n5 = Math.floor(Math.random() * 60) + 1;
    n6 = Math.floor(Math.random() * 60) + 1;
   }

    document.getElementById("n1Label").innerHTML = n1;
    document.getElementById("n2Label").innerHTML = n2;
    document.getElementById("n3Label").innerHTML = n3;
    document.getElementById("n4Label").innerHTML = n4;
    document.getElementById("n5Label").innerHTML = n5;
    document.getElementById("n6Label").innerHTML = n6;
}*/

// NOVO CÓDIGO - CÓDIGO NÃO FUNCIONA REFAZER
/*document.getElementById("rollButton").onclick = function(){

    n1 = Math.floor(Math.random() * 60) + 1;
    n2 = Math.floor(Math.random() * 60) + 1;
    n3 = Math.floor(Math.random() * 60) + 1;
    n4 = Math.floor(Math.random() * 60) + 1;
    n5 = Math.floor(Math.random() * 60) + 1;
    n6 = Math.floor(Math.random() * 60) + 1;

    //VERIFICAR SE EXISTE ALGUM NÚMERO REPETIDO:

    function compararNumeros (){
        for (i=0; i < numeros.length -1; i++){
            for (j=1; j < numeros.length; j++){
                if (numeros[i] === numeros[j]){
                    return true;
                } else {
                    return false;
                }
            }
           }
    }
     
   while(compararNumeros == true){
    n1 = Math.floor(Math.random() * 60) + 1;
    n2 = Math.floor(Math.random() * 60) + 1;
    n3 = Math.floor(Math.random() * 60) + 1;
    n4 = Math.floor(Math.random() * 60) + 1;
    n5 = Math.floor(Math.random() * 60) + 1;
    n6 = Math.floor(Math.random() * 60) + 1;
   }

    document.getElementById("n1Label").innerHTML = n1;
    document.getElementById("n2Label").innerHTML = n2;
    document.getElementById("n3Label").innerHTML = n3;
    document.getElementById("n4Label").innerHTML = n4;
    document.getElementById("n5Label").innerHTML = n5;
    document.getElementById("n6Label").innerHTML = n6;
}*/

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

// CÓDIGO LOTOFÁCIL - CÓDIGO QUEBRADO REFAZER

// CÓDIGO REFEITO

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

    