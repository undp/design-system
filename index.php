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
        View::render('pages/standard-page');
        break;
    case '/news-centre':
        View::render('pages/news-centre');
        break;
    case '/article-deepdive':
        View::render('pages/article-deepdive');
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
    case '/single-publication':
        View::render('pages/single-publication');
        break;
    case '/single-publication-2':
        View::render('pages/single-publication-2');
        break;
    case '/single-publication-3':
        View::render('pages/single-publication-3');
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
