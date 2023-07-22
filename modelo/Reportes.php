<?php



$conn = mysqli_connect("localhost", "root", "", "ferreteria");
$sql = "SELECT l.id_lote, l.stock, l.vencimiento, prod.nombre AS Nombre_producto
FROM lote l 
JOIN proveedor pv ON pv.id_proveedor=l.lote_id_prov 
JOIN producto prod ON prod.id_producto=l.lote_id_prod 
JOIN laboratorio lab ON lab.id_laboratorio=prod.prod_lab 
JOIN tipo_producto tp ON tp.id_tip_prod=prod.prod_tip_prod 
JOIN presentacion pre ON pre.id_presentacion=prod.prod_present 
WHERE prod.nombre NOT LIKE '' ORDER BY prod.nombre ASC;
";
$result = mysqli_query($conn, $sql);



?>
