<?php
require "vendor/autoload.php";
use helpers\View;

$subpath = $_SERVER['REQUEST_URI'];

if($subpath == '/styleguide'){
    View::render('pages/styleguide');
}else{
    View::render('pages/home');
}
