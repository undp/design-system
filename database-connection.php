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

require('vendor/autoload.php');

function connection()
{
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    if ($_ENV['DB_HOST'] && $_ENV['DB_USERNAME'] && $_ENV['DB_PASSWORD'] && $_ENV['DB_DATABASE']) {
        $conn = new mysqli($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_DATABASE']);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        return $conn;
    }
    return false;

}