<!DOCTYPE html>
<html lang="en">

<?php   include("./head.php")  ?>

<body>
 
  <?php   include("./links.php")  ?>
  
    <?php
    $weeekDays = [
        1 => 'lunes',
        2 => 'martes',
        3 => 'miércoles',
        4 => 'jueves',
        5 => 'viernes',
        6 => 'sábado',
        7 => 'domingo',
    ];
    ?>
    <?php 
       
    ?>
    <h1>Hola, Carlos</h1>
    <p>Hoy es <strong><?= $weeekDays[date('N')]; ?></strong>. ¿Qué tal estás?</p>
    <script src="/public/main.js"></script>
</body>


</html>