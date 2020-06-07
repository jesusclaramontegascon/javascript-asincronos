
  $(document).ready(function() {

  	$( "#fecha_inicio" ).datepicker({
      changeMonth: true,
      changeYear: true
    });

     $( "#fecha_final" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
	
	 $( "#camponumero6" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
boton_modal_vertodos();
cargar_pagina();
boton_aceptar();


  })
  
 function boton_modal_vertodos()
 {
  $("#modal_vertodos").unbind( "click" );
  $("#modal_vertodos" ).bind( "click", function() {
  console.log("hasta aki");

  
	})
  
  
 }
 
 function pasar_ajax()
 {
  var fecha1=$("#fecha_inicio").val();
  var fecha2=$("#fecha_final").val();
  
  
var posicion=$('input:radio[id=posicion]:checked').val();
var descripcion=$("#descripcion").val();
var activo=$("#activo").val();
var link=$("#link").val();
console.log("he llegao");


			var parametros = {
                "posicion" : posicion,
                "descripcion" : descripcion,
				"activo" : activo,
				"link" : link,
				"fecha1" : fecha1,
				"fecha2" : fecha2
				
        };
        $.ajax({
                data:  parametros, //datos que se envian a traves de ajax
                url:   'ejemplo_ajax_proceso.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                       $("#resultado").html("Procesando, espere por favor...");
                      
                        
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                       $("#resultado").html(response);
						
          
                }
        });//hasta aki

 }
 
 function cargar_pagina()
 {
  $("#ver_todos").load('ver.php')
  $("#ver_todos").html('hola mundo');
 }
 

 
 function boton_aceptar()
{
     $( "#boton_aceptar").unbind( "click" );
     $( "#boton_aceptar2" ).bind( "click", function() {
      console.log("hemos llegao");
      $('#modal_vertodos').modal('hide');
    });
}


function fechas()
{
console.log("fechas");
var fecha1="10/01/2017";
var fecha2="11/01/2017";
var x=fecha1.split("/");
var y=fecha2.split("/");
var fecha1_final=x[1]+"-"+x[0]+"-"+x[2];
var fecha2_final=y[1]+"-"+y[0]+"-"+y[2];
console.log(fecha1_final);
console.log(fecha2_final);
  if (fecha1_final>fecha2_final)
  {
    console.log("fecha1 es mayor que fecha dos");
  }
  else {console.log("fecha2 es mayor que fecha uno");}
//item.ejercicio + "/" + item.serie + "/" + item.numero,
//console.log(fecha1_final);
}