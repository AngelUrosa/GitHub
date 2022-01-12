<?php
//file_get_contents devuelve el fichero a un string en str_json
$str_json = file_get_contents('php://input');


//En el json_decode pongo true para que devuelva un array asociativo y no un objeto (false)
$object = json_decode($str_json, true);

//Peticion a la BD con host-> localhost
$db_host = "localhost";
$db_name = "bd_angel_urosa_nunez";
$db_user = "root";
$db_password = "";

$conection = mysqli_connect($db_host, $db_user, $db_password, $db_name);

if(mysqli_connect_errno()) {
    echo "Error al conectar con la Base de Datos!";
    exit(); //exit para que salga y no intente la query
}

/*sintaxis de clase
$conexion = Conexion:singleton_conexion();
$consulta ="SELECT...";
$query= conexion->preparar();
$bindParam = $query->bindParam(1,$variable); 

*/


//acentos y caracteres latinos
mysqli_set_charset($conection, "utf8");

$consulta = "SELECT * FROM clientes WHERE nombre LIKE '".$object['Campo']."%'";

$resultados = mysqli_query($conection, $consulta);
//Array vacio para aniadir cada linea del resultado
$ResultadoJSon = array();

//El fetchRow: Conversion a array de una fila del resultado (cuando lo ejecutas otra vez pasa a la siguiente)
//Si puede hacer el fetch row de la siguinte linea de resultados es porque queda info
while (($fila=mysqli_fetch_row($resultados)) == true) {

    array_push($ResultadoJSon, $fila);

}

echo $Jsonfinal = json_encode($ResultadoJSon, JSON_FORCE_OBJECT); 






/* MANERA DE HACER LO MISMO MOSTRANDO LA INFORMACION EN EL PROPIO PHP
$str_json = file_get_contents('php://input');

//En el json_decode pongo true para que devuelva un array asociativo y no un objeto (false)
$object = json_decode($str_json, true);
var_dump($object);
echo("La query seria a ".$object["Campo"]);

//Peticion a la BD
$db_host = "localhost";
$db_name = "bd_naharro_lopez";
$db_user = "root";
$db_password = "";

$conection = mysqli_connect($db_host, $db_user, $db_password, $db_name);

if(mysqli_connect_errno()) {
    echo "Error al conectar con la Base de Datos";
    exit(); //exit para que salga y no intente la query
}

//acentos y caracteres latinos
mysqli_set_charset($conection, "utf8");

$consulta = "SELECT * FROM clientes";

$resultados = mysqli_query($conection, $consulta);

echo "<br>";

//El fetchRow: Conversion a array de una fila del resultado (cuando lo ejecutas otra vez pasa a la siguiente)
//Si puede hacer el fetch row de la siguinte linea de resultados es porque queda info
while (($fila=mysqli_fetch_row($resultados)) == true) {
    //Cuento la longitud de cada con cada iteracion del while una nueva
    $longitudFila = count($fila);
    $count=0;

    //Manera de pasar la fila a json
    echo $json_info = json_encode($fila, JSON_FORCE_OBJECT);  
    //sin el JSON_FORCE_OBJECT ["1","060010001","000000000","Ra\u00fal","Garc\u00eda","Guijarro","123456aas","123546","Por internet","1"]

    echo "<h2> La longitud es ".$longitudFila."</h2>";

    //Le resto 1 a la longitud ya que empieza en 0 y acaba en longitudFila-1
    while ($count <= $longitudFila-1) {
        echo $fila[$count] . " ";
        $count++;
    }
    
    echo "<br>";
}

*/
?>