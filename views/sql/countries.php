<?php
include '../../database-connection.php';

$connection = connection();

$query = "SELECT * FROM countries";

$result = $connection->query($query)->fetch_all(MYSQLI_ASSOC);

echo json_encode($result);

mysqli_close($connection);