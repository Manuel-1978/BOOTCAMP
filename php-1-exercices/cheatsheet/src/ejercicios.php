<?php

declare(strict_types=1);

//EjercicioSumArrayTest
function sumArray(array $array):int{
    $sum=0;
    foreach($array as $element){
    
      $sum += $element;

    }
    return $sum;
};
//EjercicioFindMaxTest
function findMax(array $array):int{
    $max= $array[0];
    for($index = 0; $index <= count($array)-1; $index++){
        if ($array[$index]>$max){
            $max=$array[$index];
        }
    }
    return $max;
};

//EjercicioAgeAverageTest
function averangeAge (array $people){
    return array_sum(array_column($people, 'age'))/count($people)
};
  