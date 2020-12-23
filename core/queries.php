<?php

namespace core;
include $_SERVER['DOCUMENT_ROOT'] . '/database-connection.php';

class Queries
{

    function getQuery($query)
    {
        $connection = connection();
        $result = $connection->query($query)->fetch_all(MYSQLI_ASSOC);
        $connection->close();
        return $result;
    }
}