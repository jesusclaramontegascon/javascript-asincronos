<?php
	$metodo = $_SERVER["REQUEST_METHOD"];
	echo $metodo;echo "<br>";
	$ruta = implode("/", array_slice(explode("/", $_SERVER["REQUEST_URI"]), 3));
	$datos = json_decode(file_get_contents("php://input"));
	
    echo $metodo;echo "<br>";echo "<br/>";
	echo $ruta;echo "<br>";echo "<br/>";
	print_r ($datos);echo "<br/>";
	
	switch($metodo):
	case 'POST':
			switch ($ruta) {
				case 'usuario':
					$nombreUsuario = $datos->nombre;
					//Aquí podríamos acceder a otras propiedades
					echo json_encode("Guardamos un nuevo usuario con el nombre " . $nombreUsuario);
					break;
				case 'venta':
					echo json_encode("Guardamos una venta");
					break;
			}
		break;
	endswitch;
	?>