const form = document.getElementById("formulario");
const campo = document.getElementById("campo");
const optionPeticion = document.getElementById("optionPeticion");
const optionImpres = document.getElementById("optionImpres");
const tableDiv = document.getElementById("tableDiv");
const table = document.getElementById("table");

async function envioRecogida(event){ //Accion al Enviar formulario
    //Cancela el envio del formulario y refresh de la pagina
    event.preventDefault();

    //funcion asincroma que envia el formulario en json 
    //y espera la promise que ejecuta la peticion del texto que busca el php en la BD
    const lanzado = await new Promise(function (resolve, reject) {

        if (optionImpres.value == 'javaScript' && optionPeticion.value == 'xmlhttp') {

            //CONVERSION a JSON del formulario
            let jsonForm = JSON.stringify({ Campo: campo.value, OpcionPeticion: optionPeticion.value, OpcionImpresion: optionImpres.value });
            console.log(jsonForm);

            //PETICION xmlhttp
            var req = new XMLHttpRequest();

            req.onload = function () {
                // uso var para llamarlo fuera si lo necesito
                var responseText = this.responseText;
                resolve(responseText);
            };

            //ENVIO del json
            //true para que no este bloqueando el resto de ejecucion hasta q termine
            req.open("POST", "script.php", true);
            req.setRequestHeader("Content-type", "application/json");
            req.send(jsonForm);

        } else {
            alert("La opcion de impresion debe ser JS! Y la de peticion xmlhttp!");
            reject("La opcion de impresion debe ser JS! Y la de peticion xmlhttp!");
        }

    }).then(function(responseText) {

        //Para controlar el error de la zona de php imprimo la frase de abajo
        if(responseText.includes("Error al conectar con la Base de Datos!")){

            alert("Se ha producido un error al conectar con la Base de Datos!")

        }else if(responseText == "{}"){
            alert("No hay elementos");
        }else{ pintarTabla(responseText); }

    }).catch(function (err) {console.log(err);});

}

function pintarTabla(responseText){ //Pasa el json a objeto
    console.log(responseText);
    let jsonDecode = JSON.parse(responseText);
    console.log("RECORRIENDO EL JSON");

    //GENERACION DE LA TABLA
    table.innerHTML = "";
    let tblBody = document.createElement("tbody");

    //items es cada objeto dentro del array que los envuelve
    for (let items in jsonDecode){

        var hilera = document.createElement("tr");
        console.log("Se ha creado un TR");
        console.log(jsonDecode[items]);

        for (let atr in jsonDecode[items]){
            console.log(jsonDecode[items][atr]);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(jsonDecode[items][atr]);
            console.log("Se ha creado un TD Y SU TEXTO");
            
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }

    table.appendChild(tblBody);
    //Pongo el border con js para que no se vea cuando esta vacia
    table.setAttribute("border", "2"); 

}

window.addEventListener("DOMContentLoaded", ()=>{ //MAIN
    form.addEventListener("submit", envioRecogida);
    
});






     
      
