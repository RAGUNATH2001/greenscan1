<?php
$t_name=$_POST['medi_name'];
$medicion_quantity=$_POST['quantity'];


//connection

$host="localhost";
$dbusername="root";
$dbpassword="";
$dbname="greenscan";

//database connection
$con=new mysqli($host,$dbusername,$dbpassword,$dbname);
if($con->connect_error){
  echo 'error';

}
else{
$sql="INSERT INTO medicion_order(name,quantity) VALUES ('$t_name','$medicion_quantity')";
if($con->query($sql)){

   echo "<script>alert('Sussesfully your medicion  order,Page redirect to Home Page');document.location='/greenscan/shopping/user/index/'</script>";

}
else{
  echo 'Eroor';
}

}
$con->close();


?>