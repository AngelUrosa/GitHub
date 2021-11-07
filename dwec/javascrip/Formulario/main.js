const inputs = document.querySelectorAll(".confi");

const nombre = document.getElementById("nombre");

const apellidos = document.getElementById("apellidos");

const dni = document.getElementById("dni");

const email = document.getElementById("email");

const contraseña1 = document.getElementById("contraseña1");

const contraseña2 = document.getElementById("contraseña2");

const parrafo = document.getElementById("parrafoConfi");

let numeros = [0,1,2,3,4,5,6,7,8,9];

let arrayDni = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

let errorNombre = false;
let errorContraseñas = false;
let errorDni = false;
let errorApellidos = false;


let formulario = document.getElementById("formulario");

inputs.forEach(input => {
    console.log(input);

    input.addEventListener('change', cambio);
    input.addEventListener('focus',ayuda);
});

function cambio(event) {
    if (event.currentTarget.value.trim()=="") {
        event.currentTarget.style.borderColor="red"; //Rojo si vacio
        errorNombre=true;

    } else{
        event.currentTarget.style.borderColor="black";
        errorNombre=false;
    }

    if (event.currentTarget.id=="nombre" || event.currentTarget.id=="apellidos") { //rojo si numero
        for (let numero of numeros){
            if(event.currentTarget.value.includes(numero)){
               
                event.currentTarget.style.borderColor="red";
                errorApellidos=true;
                
                
                

            }
        }
    }
    if (event.currentTarget.id=="contraseña1" || event.currentTarget.id=="contraseña2") { //rojo si numero

        if (contraseña1.value!=contraseña2.value) {

            contraseña1.style.borderColor="red";
            contraseña2.style.borderColor="red";
            errorContraseñas=true;
        }else{
            contraseña1.style.borderColor="black";
            contraseña2.style.borderColor="black";
            errorContraseñas=false;
        }


    }
    


    if (event.currentTarget.id=="dni") {

        let cadenaDni = dni.value;
        console.log(cadenaDni.substring(0, cadenaDni.length-1));
        let numeroDni = parseFloat(cadenaDni.substring(0, cadenaDni.length-1));
        let resultadoDni = numeroDni%23;
        console.log(resultadoDni);
        console.log(arrayDni[resultadoDni]);
  
      if(arrayDni[resultadoDni]==cadenaDni.substring(cadenaDni.length-1,cadenaDni.length) && cadenaDni.length==9){
          console.log("Funciona");
          dni.style.borderColor="black";
          errorDni=false;
      }else{
  
          dni.style.borderColor="red";
          errorDni=true;
      }
    }



}



function ayuda(event) {

    switch (event.currentTarget.id) {
        case "nombre":
            parrafo.innerHTML="Escribe el nombre sin numeros";
            break;
    
        case "apellidos":
            parrafo.innerHTML="Escribe el apellido sin numeros";
            break;
        case "dni":
            parrafo.innerHTML="Escribe el DNI con 8 numeros y la letra correcta (Mirar consola para ver la correcta)";
            break;
        case "email":
            parrafo.innerHTML="Escribe el correo correcto";
            break;
        case "contraseña1":
            parrafo.innerHTML="Escribe una Contraseña que sea igual en ambos campos";
            break;
        case "contraseña2":
            parrafo.innerHTML="Escribe una Contraseña que sea igual en ambos campos";
            break;
        
    }

}

let validarFormulario = function(event) {
    if (errorNombre==true || errorApellidos==true || errorContraseñas==true || errorDni==true ) {
        event.preventDefault(); //No recarga la pagina
    }
    

 }

formulario.addEventListener("submit", validarFormulario, true); 

