
const pantalla=document.getElementById("valor");

const numeros = document.getElementsByName("numero");

const borrar = document.getElementById("borrar");

const sumar = document.getElementById("sumar");

const restar = document.getElementById("restar");

const multiplica = document.getElementById("multiplica");

const divide = document.getElementById("divide");

const igual = document.getElementById("igual");

const masMenos = document.getElementById("masMenos");

const coma = document.getElementById("coma");

const porcentaje = document.getElementById("porcentaje");



class calculadora{
    operando1
    operando2
    operacion
    resultado

    constructor(operando1,operando2,operacion,resultado){
        this.operando1=operando1
        this.operando2=operando2
        this.operacion=operacion
        this.resultado=resultado
    }
    

    suma(){
        this.resultado=this.operando1 + this.operando2
    }
    resta(){
        this.resultado=this.operando1 - this.operando2
    }
    multi(){
        this.resultado=this.operando1 * this.operando2
    }
    divi(){
        this.resultado=this.operando1 / this.operando2
    }
    porcentaje(){
        this.resultado=this.operando1 / 100 
    }


}

let calculadora1 = new calculadora(null,null,null,null);

console.log(borrar);
console.log(sumar);

numeros.forEach(numero => {

    numero.addEventListener('click',imprimir)

});

function imprimir(event) {

    
    
    pantalla.innerHTML= pantalla.innerHTML + event.target.innerHTML;


}

borrar.addEventListener('click', limpiar) //borrar

function limpiar() {
    
    pantalla.innerHTML="";

}

masMenos.addEventListener('click', unMenos) //Añadir -

function unMenos() {
    
    pantalla.innerHTML="-"+pantalla.innerHTML;

}

coma.addEventListener('click', unaComa) //Añadir -

function unaComa() {
    
    pantalla.innerHTML=pantalla.innerHTML+".";

}

porcentaje.addEventListener('click', hacerPorcentaje) //Porcentaje

function hacerPorcentaje() {
    
    calculadora1.operando1=parseFloat(pantalla.innerHTML);
    calculadora1.porcentaje();
    pantalla.innerHTML=calculadora1.resultado;
    

}

sumar.addEventListener('click', btnSumar)  //sumar

function btnSumar() {
    
    calculadora1.operando1=parseFloat(pantalla.innerHTML);
    pantalla.innerHTML="";
    console.log(calculadora1.operando1);
    calculadora1.operacion="suma"
}

restar.addEventListener('click', btnResta)  //restar

function btnResta() {
    
    calculadora1.operando1=parseFloat(pantalla.innerHTML);
    pantalla.innerHTML="";
    console.log(calculadora1.operando1);
    calculadora1.operacion="resta"
}

multiplica.addEventListener('click', btnMultiplica)  //Multiplica

function btnMultiplica() {
    
    calculadora1.operando1=parseFloat(pantalla.innerHTML);
    pantalla.innerHTML="";
    console.log(calculadora1.operando1);
    calculadora1.operacion="multiplica"
}

divide.addEventListener('click', btnDivide)  //Divide

function btnDivide() {
    
    calculadora1.operando1=parseFloat(pantalla.innerHTML);
    pantalla.innerHTML="";
    console.log(calculadora1.operando1);
    calculadora1.operacion="divide"
}


igual.addEventListener('click', btnIgual) 

function btnIgual() { //Boton igual

    
 

    switch (calculadora1.operacion) {
        case "suma":
            calculadora1.operando2=parseFloat(pantalla.innerHTML);
            calculadora1.suma();
            break;
    
        case "resta":
            calculadora1.operando2=parseFloat(pantalla.innerHTML);
            calculadora1.resta();
            break;

        case "multiplica":
            calculadora1.operando2=parseFloat(pantalla.innerHTML);
            calculadora1.multi();
            break;
        case "divide":
            calculadora1.operando2=parseFloat(pantalla.innerHTML);
            calculadora1.divi();
            break;
    }
    
    pantalla.innerHTML=calculadora1.resultado;
 
}