"use strict";

const PromptSync = require("prompt-sync");

const prompt =require("prompt-sync")();

//Ejercicio 1

let fechaEntrega = new Date("31/10/2001").toLocaleDateString();
let nombreCiclo="DAW2";
let nombreModulo="DWEC";
let curso=2;
let nombreAlumno="Angel Urosa Nuñez";
let edad=20.3;

//Ejercicio 2
 class MonstrarInformacion{

    constructor(fechaEntrega,nombreCiclo,nombreModulo,curso,nombreAlumno,edad){
        this.fechaEntrega= new Date (fechaEntrega).toLocaleDateString();
        this.nombreCiclo=nombreCiclo;
        this.nombreModulo=nombreModulo;
        this.curso=curso;
        this.nombreAlumno=nombreAlumno;
        this.edad=edad;
        this.mostrarVersion();

    }

    mostrarVersion(){
        console.log(Fondo("*",100));
        console.log(Fondo("*",100));
        console.log(`
        fecha Entrega=${this.fechaEntrega}
        Nombre del ciclo=${this.nombreCiclo}
        Nombre del modulo=${this.nombreModulo}
        Nombre del curso=${this.curso}
        Nombre del Alumno=${this.nombreAlumno}
        Edad del Alumno=${this.edad}
        `);
        console.log(Fondo("*",100));
        console.log(Fondo("*",100));
    }

 }
 function Fondo(carater,numero) {

     let cadena="";
     let mitad=null;
     for (let index = 0; index < numero; index++) {
        cadena=cadena+carater;
        mitad=numero/2;
         if (index==mitad) {
             cadena=cadena+index;
         }

     }
     return cadena;
 }

 //Ejercicio 3 

 let Alumno=new MonstrarInformacion("3/4/2021","Daw","Dwic", 2,"urosa",4);

 let adivina = Math.floor(Math.random() * 101);
 console.log(adivina);
 let vidas=10;
 let numero;
 

 numero = prompt("Prueba con un numero");

while (vidas>=0) {
    
}
 if (numero == adivina) {
     console.log("Correcto has acertado")
 }else{
    console.log("Has fallado prueba con otro numero");
    console.log("Te quedan "+vidas+" vidas")
    if (numero>adivina) {
        console.log("El numero que buscas es mayor");
    }else{
        console.log("El numero que buscas en menor");
    }

    numero=prompt("¿Con que numero quieres probar ahora?");
vidas--;
 }