<?php
 
require 'dbconnect.php';
$conn    = Connect();
$name    = $conn->real_escape_string($_POST['name']);
$email   = $conn->real_escape_string($_POST['email']);
$descr   = $conn->real_escape_string($_POST['descr']);
$query   = "INSERT into datavisrequest (name,email,descr) VALUES('" . $name . "','" . $email . "','" . $descr . "')";
$success = $conn->query($query);

 
if (!$success) {
    die("Couldn't enter data: ".$conn->error);
 
}
 
echo "Thank you for your request and comment. <br>";
 
$conn->close();

header("Location: {$_SERVER['HTTP_REFERER']}");
exit; 

?>
