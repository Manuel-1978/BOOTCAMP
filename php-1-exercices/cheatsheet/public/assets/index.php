<!DOCTYPE html>
<html lang="en">
<?php require 'partial/head.php'; ?>

<body>
 
<?php include $_SERVER['DOCUMENT_ROOT'] . '/partial/header.php'; ?>
  
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
    <?php require 'partial/footer.php'; ?>
</body>


</html>