//Ejercicio 1

let fechaEntrega = new Date("31/10/2001").toLocaleDateString();
let nombreCiclo="DAW2";
let nombreModulo="DWEC";
let curso=2;
let nombreAlumno="Angel Urosa Nuñez";
let edad=20.3;
console.log(fechaEntrega);
//Ejercicio 2
 class MonstrarInformacion{

    constructor(fechaEntrega,nombreCiclo,nombreModulo,curso,nombreAlumno,edad){
        this.fechaEntrega= new Date (fechaEntrega).toLocaleDateString();
        this.nombreCiclo=nombreCiclo;
        this.nombreModulo=nombreModulo;
        this.curso=curso;
        this.nombreAlumno=nombreAlumno;
        this.edad=edad;

        
    }

 }
