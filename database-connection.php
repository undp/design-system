<?php

/*
 * create database-credentials.php on root folter and add the following variables
 * fill them with your local information
 *
 * $servername = 'localhost';
 * $username = '';
 * $password = '';
 * $database = 'undp';
 *
 * */

include 'database-credentials.php';

function connection(){
    global $servername, $username, $password, $database;

    $conn = mysqli_connect($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}