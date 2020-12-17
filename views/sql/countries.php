<?php
//update credentials
$servername = "localhost";
$database = "undp";
$username = "";
$password = "";

$conn = mysqli_connect($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    $query = "SELECT * FROM countries";

    $result = $conn->query($query)->fetch_all(MYSQLI_ASSOC);

    echo json_encode($result);
}