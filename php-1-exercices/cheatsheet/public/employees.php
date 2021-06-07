<?php
  
$people = [
  ['name' => 'Carlos', 'email' => 'carlos@correo.com', 'age' => 20, 'city' => 'Benalmádena'],
  ['name' => 'Carmen', 'email' => 'carmen@correo.com', 'age' => 15, 'city' => 'Fuengirola'],
  ['name' => 'Carmelo', 'email' => 'carmelo@correo.com', 'age' => 17, 'city' => 'Torremolinos'],
  ['name' => 'Carolina', 'email' => 'carolina@correo.com', 'age' => 18, 'city' => 'Málaga'],
]; 
?>
<!DOCTYPE html>

<html lang="en">
<?php   include("./head.php")  ?>
<body>

<?php   include("./links.php")  ?>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <?php
  foreach($people as $people):  ?>     
     <tr>      
      <td><?= $people['name'];?></td>
      <td><?= $people['email'];?></td>
      <td><?= $people['age'];?></td>
      <td><?= $people['city'];?></td>
    </tr>
  <?php endforeach ?> 
  <tbody>
   
  
  </tbody>
</table>
</body>
</html>