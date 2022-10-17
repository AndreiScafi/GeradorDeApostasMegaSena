//DECLARAÇÃO DAS VARIÁVEIS

let n1; 
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

let numeros = [n1, n2, n3, n4, n5, n6];

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

// NOVO CÓDIGO
document.getElementById("rollButton").onclick = function(){

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
}

// CÓDIGO LOTOFÁCIL

let numeros2 = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15];

document.getElementById("rollButton1").onclick = function(){

    n1 = Math.floor(Math.random() * 25) + 1;
    n2 = Math.floor(Math.random() * 25) + 1;
    n3 = Math.floor(Math.random() * 25) + 1;
    n4 = Math.floor(Math.random() * 25) + 1;
    n5 = Math.floor(Math.random() * 25) + 1;
    n6 = Math.floor(Math.random() * 25) + 1;
    n7 = Math.floor(Math.random() * 25) + 1;
    n8 = Math.floor(Math.random() * 25) + 1;
    n9 = Math.floor(Math.random() * 25) + 1;
    n10 = Math.floor(Math.random() * 25) + 1;
    n11 = Math.floor(Math.random() * 25) + 1;
    n12 = Math.floor(Math.random() * 25) + 1;
    n13 = Math.floor(Math.random() * 25) + 1;
    n14 = Math.floor(Math.random() * 25) + 1;
    n15 = Math.floor(Math.random() * 25) + 1;

    //VERIFICAR SE EXISTE ALGUM NÚMERO REPETIDO:

    function compararNumeros2 (){
        for (i=0; i < numeros2.length -1; i++){
            for (j=1; j < numeros2.length; j++){
                if (numeros2[i] === numeros2[j]){
                    return true;
                } else {
                    return false;
                }
            }
           }
    }
     
   while(compararNumeros2 == true){
    n1 = Math.floor(Math.random() * 25) + 1;
    n2 = Math.floor(Math.random() * 25) + 1;
    n3 = Math.floor(Math.random() * 25) + 1;
    n4 = Math.floor(Math.random() * 25) + 1;
    n5 = Math.floor(Math.random() * 25) + 1;
    n6 = Math.floor(Math.random() * 25) + 1;
    n7 = Math.floor(Math.random() * 25) + 1;
    n8 = Math.floor(Math.random() * 25) + 1;
    n9 = Math.floor(Math.random() * 25) + 1;
    n10 = Math.floor(Math.random() * 25) + 1;
    n11 = Math.floor(Math.random() * 25) + 1;
    n12 = Math.floor(Math.random() * 25) + 1;
    n13 = Math.floor(Math.random() * 25) + 1;
    n14 = Math.floor(Math.random() * 25) + 1;
    n15 = Math.floor(Math.random() * 25) + 1;
   }

    document.getElementById("n1Label2").innerHTML = n1;
    document.getElementById("n2Label2").innerHTML = n2;
    document.getElementById("n3Label2").innerHTML = n3;
    document.getElementById("n4Label2").innerHTML = n4;
    document.getElementById("n5Label2").innerHTML = n5;
    document.getElementById("n6Label2").innerHTML = n6;
    document.getElementById("n7Label2").innerHTML = n7;
    document.getElementById("n8Label2").innerHTML = n8;
    document.getElementById("n9Label2").innerHTML = n9;
    document.getElementById("n10Label2").innerHTML = n10;
    document.getElementById("n11Label2").innerHTML = n11;
    document.getElementById("n12Label2").innerHTML = n12;
    document.getElementById("n13Label2").innerHTML = n13;
    document.getElementById("n14Label2").innerHTML = n14;
    document.getElementById("n15Label2").innerHTML = n15;
}