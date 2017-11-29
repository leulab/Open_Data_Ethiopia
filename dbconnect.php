<?php
function Connect()
{
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "1140Admas8la";
 $dbname = "requests";
 
 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);
 
 return $conn;
}
 
?>