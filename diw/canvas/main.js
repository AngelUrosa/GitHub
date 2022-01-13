// Obtengo la refeencia al elemento HTML.
const canvas = document.getElementById('lienzo');

// Obtengo el contexto de dibujado
// Un canvas solo puede tener asociado un contexto de dibujado
const ctx = canvas.getContext('2d');

let tamaño = tamañoInicial[nivelDificultad];
tiempo= tiempoInicial[nivelDificultad];

const tamañoInicial = [100,80,60];
const tiempoInicial = [100,80,60];
const decrementoCuadrado = [1,4,8];
const decrementoTiempo = [1,10,100];
 

window.addEventListener("load",()=>{
    document.getElementById("facil").addEventListener("click", () => Partida(0));
    document.getElementById("media").addEventListener("click", () => Partida(1));
    document.getElementById("dificil").addEventListener("click", () => Partida(2));
});



function Partida(niveldificultad) {

    nivelDificultad=niveldificultad;
    tamaño


    //Refrescar pantalla

    refrescarPantalla();

//document.getElementById("juego").addEventListener("click",on)


var x = (Math.random()*250)+1;
var y = (Math.random()*250)+1;
var H = 100;
var W = 100;





ctx.fillStyle = "black";
ctx.fillRect(x, y, H, W);

A = new MouseEvent(typeArg, clientX); 
B = new MouseEvent(typeArg, clientY);

ctx.addEventListener("click",A,B);


}
//----------------------------------------------------------------
function refrescarPantalla(){
    dibujarMarcador();
    dibujarTiempo();
    dibujarCuadrado();
}
//----------------------------------------------------------------
function dibujarMarcador(){
//Puntuacion
ctx.save();
var puntuacion = "100";
ctx.fillStyle = "black";
ctx.fillRect(300, 10, 80, 20);
ctx.fillStyle = "white";
ctx.font = '20px serif';
ctx.fillText(puntuacion, 300, 25);
ctx.restore
}


function dibujarTiempo(){
//Tiempo
var tiempo = "1000";
ctx.fillStyle = "black";
ctx.fillRect(300, 360, 80, 20);
ctx.fillStyle = "red";
ctx.font = '20px serif';
ctx.fillText(tiempo, 300, 375);
}
//----------------------------------------------------------------
function dibujarCuadrado(){

 x = (Math.random()*250)+1;
 y = (Math.random()*250)+1;
 H = H-10;
 W = W-10;

ctx.fillStyle = "black";
ctx.fillRect(x, y, H, W);
}