<?php
    
    $jsondata = array();

            $jsondata["success"] = false;
			$jsondata["data"]["users"] = array("jesus","jose","maria");
			$jsondata["data"]["id"] = array("1","2","3");
            /*$jsondata["data"] = array(
            'message' => 'No se encontró ningún resultado.'
            )*/;
            

 
        
  
    //print_r($jsondata);echo "<br/>";
    header('Content-type: application/json; charset=utf-8');
    echo json_encode($jsondata, JSON_FORCE_OBJECT);
    


exit();                            ?>