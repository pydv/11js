"use strict"

function hola_consola(){
    console.log("Hola consola!!!");
}

function cuadrado(num){
    document.frmCuadrado.resultado.value = num * num;
}

function fibo(len){
    // Generando números fibos
    var a = 0;
    var b = 1;
    var aux;
    var resultado = "";
    for(let contador = 0; contador < len; contador++){
        if(contador != len - 1) resultado = resultado + a + " - ";
        else resultado = resultado + a;
        aux = b;
        b = a + b;
        a = aux;
    }

    document.frmFibo.resultado.value = resultado;
}

function esPrimo(num){
    var c = 0;
    var resultado = "";
    for(let contador = 1; contador <= num; contador++)
        if(num%contador == 0)c++;
    if(c == 2) resultado = "Es primo";
    else resultado = "No es primo"
    document.frmPrimo.resultado.value = resultado;

}

function genPrimos(limite){
    var primos = "";
    var candidato = 2;
    var i = 1;
    while(i <= limite){
        var c = 0;
        for(let cont = 1; cont <= candidato; cont++)
            if(candidato%cont == 0)c++;
        if(c == 2){
            if (i == limite)primos = primos + candidato;
            else primos = primos + candidato + " - ";
            i++;
        }
        candidato++;
    }
    document.frmGenPrimos.resultado.value = primos;
}

function ordenaNumero(numero){
    let numOrd = 0;
    let auxNum = 0;
    for(let i = 9; i >= 0; i--){
        while(numero != 0){
            let digito = numero % 10;
            if(digito == i)numOrd = numOrd * 10 + digito;
            else auxNum = auxNum * 10 + digito;
            numero = parseInt(numero / 10);            
        }
        numero = auxNum;
        auxNum = 0;
    }
    document.frmOrdena.resultado.value = numOrd;
}

function leerArray(longitud){
    var miArray = [];
    for(let i = 0; i < longitud; i++)
        miArray[i] = prompt("Elemento "+(i+1)+": ");

    // ordenar array
    var sw = true;
    while(sw){
        sw = false;
        for(let i = 0; i < longitud - 1; i++){
            if(miArray[i] > miArray[i + 1]){
                var aux = miArray[i];
                miArray[i] = miArray[i + 1];
                miArray[i + 1] = aux;
                sw = true;
            }
        }
    }

    document.frmOrdenaArray.resultado.value = miArray;
    
}