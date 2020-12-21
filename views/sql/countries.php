<?php
include '../../database-connection.php';


function getQuery($query)
{
    $connection = connection();

    $result = $connection->query($query)->fetch_all(MYSQLI_ASSOC);
    $connection->close();

    return json_encode($result);
}

if (isset($_GET['type'])) {
    $query = '';
    switch ($_GET['type']) {
        case 'countries':
            $query = 'SELECT * FROM countries';
            break;
        case 'region':
            $query = 'SELECT * FROM region';
            break;
        case 'office_type':
            $query = 'SELECT * FROM offices';
            break;
    }

    echo getQuery($query);
}
die();