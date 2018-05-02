<?php

$servername = "localhost";
$username= "abdulaziz14h";
$password= "";
$database = "c9";

$conn =  new mysqli ($servername,$username,$password,$database);

 if($conn -> connect_error){
     echo("Failed to connect to database");
        die( 'connect_error');
    }
?>