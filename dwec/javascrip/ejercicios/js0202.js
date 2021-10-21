"use strict";

const prompt = require('prompt-sync')();

let numeros = [];

let x = "Default";

let i = 0;

let sum=0;

while (x!="") {
    x=prompt("Escribe un numero: ");

numeros[i]=x;

i++;
}

console.log(numeros.pop()); 

console.log("La longitud del array es: "+numeros.length);

for (let index = 0; index < numeros.length; index++) {
    sum=parseInt( numeros[index])+sum;
}

console.log("La suma de los numeros da: "+sum);

console.log("Los numeros en orden de introduccion");

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}

console.log("Los numeros en orden inverso");

for (let index = numeros.length-1; index >= 0; index--) {
    console.log(numeros[index]);
}

