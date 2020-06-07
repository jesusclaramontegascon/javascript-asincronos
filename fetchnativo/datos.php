<?php 
$variable=$_GET["user"];
$resultado="Esto leer datos y el get vale ";
$resultado.=$variable;
echo json_encode($resultado);
?>