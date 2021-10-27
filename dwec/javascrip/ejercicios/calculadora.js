"use strict;"
const prompt = require ('prompt-sync')();

let calculadora = {
    
    pantalla : 0,
    memoria : 0,
//Operadores binarios
    '+' : function (x) {this.pantalla=this.pantalla + x; },
    '-' : function (x) {this.pantalla=this.pantalla - x; },

//Operadores unarios
    'C' : function (x) {this.pantalla=0; },
    'M' : function (x) {this.pantalla=this.pantalla; },
    'R' : function (x) {this.pantalla=this.memoria; },

}

//const OPERADORES_UNARIOS="CMR";
const OPERADORES_UNARIOS= new Set();
OPERADORES_UNARIOS.add(C);
OPERADORES_UNARIOS.add(M);
OPERADORES_UNARIOS.add(R);


function menuCalculadora() {
    let fin = false
    while (!fin) {
        console.log("pantalla = "+calculadora.pantalla);queueMicrotask
        console.log("memoria = "+calculadora.memoria);

        try {
//Lee la operacion
        let operacion = prompt ("Operacion (-, + , * , / , C , M , R ,q) :")
        if (!calculadora.hasOwnProperty[operacion] || typeof calculadora[operacion] != 'function' ) {
            throw "La operacion no esta soportada"
        }

        //Si es unario
        
        if (OPERADORES_UNARIOS.has(operacion) >=0 ) {

         calculadora[operacion]();

        }
        else{
            
        

        if (operacion == 'q') {
            fin = true;
        }else{

        
       
            
          if ((calculadora.hasOwnProperty)(operacion)) {
            
            let operando = prompt("Inserta un numero : ");
            operando = Number(operando);

            calculadora[operacion](operando);


          }
                
                
        } 
        }
        } catch (error) {
            console.log (error);
        }
    }
}


//Programar principal
menuCalculadora();