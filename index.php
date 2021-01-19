<?php
require "vendor/autoload.php";

use helpers\View;

$subpath = $_SERVER['REQUEST_URI'];


switch ($subpath) {
    case '/sdgs':
        View::render('pages/sdgs');
        break;
    case '/sierra-leone':
        View::render('pages/sierra-leone');
        break;
    case '/sierra-leone-article':
        View::render('pages/sierra-leone-article');
        break;
    case '/country-page':
        View::render('pages/country-page');
        break;
    case '/about-us':
        View::render('pages/about-us');
        break;
    case '/sierra-leone-news-centre':
        View::render('pages/sierra-leone-news-centre');
        break;
    case '/stories':
        View::render('pages/stories');
        break;
    case '/search-results-page':
        View::render('pages/search-results-page');
        break;
    case '/author-page':
        View::render('pages/author-page');
        break;
    case '/next-gen-undp':
        View::render('pages/next-gen-undp');
        break;
    case '/documentation':
        View::render('pages/docs');
        break;
    case '/styleguide':
        View::render('pages/styleguide');
        break;
    default:
        View::render('pages/home');
}
