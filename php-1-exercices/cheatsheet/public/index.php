<!DOCTYPE html>
<html lang="en">
<?php include $_SERVER['DOCUMENT_ROOT'] . '/partial/head.php'; ?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola, Pedro</h1>
    <p>Hoy es <strong>
    <?php 
    setlocale(LC_TIME, "spanish");
    $today= getdate();
    echo $today['l'];
    ?>
    </strong>.
    ¿Que tal estás?</p>
</body>
</html>