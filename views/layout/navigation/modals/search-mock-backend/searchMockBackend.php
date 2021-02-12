<?php
$resultsPerPage = 10;
$jsonFile = file_get_contents(dirname(__DIR__).'/../../../../assets/js/render-data/json-files/modals/search/search-results.json');
$resultsArray = json_decode($jsonFile, true);

$totalResults = count($resultsArray);
$currentPage = isset($_POST['page']) ? $_POST['page'] : 1;

$start = $currentPage * $resultsPerPage - $resultsPerPage;
$slice = array_slice($resultsArray, $start, $resultsPerPage);

echo json_encode(['results' => $slice, 'total' => $totalResults]);