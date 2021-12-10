
const xhr = new XMLHttpRequest();

const formulario = new FormData(document.getElementById('form'));
formulario.append('valor3','1');

xhr.open('POST','suma.php');

xhr.onload=function () {
    
    const resultado = xhr.responseText;
    monstrarResultado(resultado);
};


xhr.send(formulario);

function mostrarResultado(resultado) {
    document.getElementById('resultado').value = resultado;
}