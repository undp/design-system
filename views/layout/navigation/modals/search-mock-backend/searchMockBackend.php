<?php
$resultsPerPage = 10;
$currentPage = isset($_POST['page']) ? $_POST['page'] : 1;
$search = isset($_POST['search']) ? $_POST['search'] : "";
$filters = isset($_POST['filters']) ? $_POST['filters'] : [];

$jsonFile = file_get_contents(dirname(__DIR__).'/../../../../assets/js/render-data/json-files/modals/search/search-results.json');
$dummyDatabase = json_decode($jsonFile, true);

$filteredResults = [];

foreach($dummyDatabase as $databaseRow) {
    if($search === "" || stripos($databaseRow['title'], $search) !== false
        || stripos($databaseRow['description'], $search) !== false) {
        array_push($filteredResults, $databaseRow);
    }
}

$indexesToRemove = [];

if(count($filters)) {
    foreach($filteredResults as $index => $databaseRow) {
        $staysInResults = true;

        foreach($filters as $filterCategory => $filterValues){
            $matchesFilterValue = false;

            foreach($filterValues as $value) {
                if(stripos($databaseRow[$filterCategory], $value) !== false){
                    $matchesFilterValue = true;
                }
            }

            $staysInResults = $matchesFilterValue;
        }

        if(!$staysInResults) {
            array_push($indexesToRemove, $index);
        }
    }
}

$filteredResults = array_diff_key($filteredResults, $indexesToRemove);

$totalResults = count($filteredResults);

$start = $currentPage * $resultsPerPage - $resultsPerPage;
$slice = array_slice($filteredResults, $start, $resultsPerPage);

echo json_encode(['results' => $slice, 'total' => $totalResults]);