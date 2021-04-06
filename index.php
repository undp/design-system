<?php
require "vendor/autoload.php";

use helpers\View;

$subpath = $_SERVER['REQUEST_URI'];
$query = $_SERVER['QUERY_STRING'];

if(!empty($query)) {
    $subpath = str_replace('?' . $query, '', $subpath); // Get URI without query params
} else {
    $subpath = str_replace('?', '', $subpath); // Just in case
}

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
    case '/ar/country-page':
        View::render('pages/country-page');
        break;
    case '/country-page':
        View::render('pages/country-page');
        break;
    case '/country-page-2':
        View::render('pages/country-page-2');
        break;
    case '/country-page-3':
        View::render('pages/country-page-3');
        break;
    case '/country-page-4':
        View::render('pages/country-page-4');
        break;
    case '/about-us':
        View::render('pages/standard-page');
        break;
    case '/about-us-2':
        View::render('pages/standard-page-2');
        break;
    case '/project-page':
        View::render('pages/project-page');
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
    case '/components':
        View::render('pages/components-index');
        break;
    case '/components/leadership':
        View::render('pages/components/leadership');
        break;
    case '/components/photo':
        View::render('pages/components/photo');
        break;
    case '/components/text':
        View::render('pages/components/text');
        break;
    case '/components/stats':
        View::render('pages/components/stats');
        break;
    case '/components/forms':
        View::render('pages/components/forms');
        break;
    case '/components/hero':
        View::render('pages/components/hero');
        break;
    case '/molecules/buttons':
        View::render('pages/molecules/buttons');
        break;
    default:
        View::render('pages/home');
}
