<?php
    session_start();
    if ($_SESSION['us_tipo'] == 1 || $_SESSION['us_tipo'] == 3 || $_SESSION['us_tipo'] == 2) {
        include_once 'layouts/header.php';
    ?>        
        <title>Adm | Bienvenido</title>
       
        <!-- Tell the browser to be responsive to screen width -->
        <?php include_once 'layouts/nav.php'; ?>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
           
            <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>
                            <img class="wave" src="../img/wave2.png" width="200" height="846">
        
           <!-- Sidebar user (optional) -->
                            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                                <h1>  Bienvenido: </h1>
                                <div class="image">
                            
                                  <img id="avatar4" src="../img/avatar.png" class="img-circle elevation-2" alt="User Image">
                                  
                                 </div>
                              
                              
                                <div class="info">
                              
                                  <a href="#" class="d-block"><?php echo $_SESSION['nombre_us'] ?></a>
                            </div>   
          


                            </h1>
                        </div>
                       
                    </div>
                </div><!-- /.container-fluid -->



               
            <!-- Main content -->

                <!-- /.content -->
                </div>
        <!-- /.content-wrapper --> 
    <?php
        include_once 'layouts/footer.php';
    }else{
        header('Location: ../index.php');
    }
?>
<script src="../js/catalogo.js"></script>
<script src="../js/carrito.js"></script>