<?php

//var_dump(dirname(__DIR__).'/../../../../assets/js/render-data/json-files/modals/search/search-results.json');

$jsonFile = file_get_contents(dirname(__DIR__).'/../../../../assets/js/render-data/json-files/modals/search/search-results.json');

$json = json_decode($jsonFile, true);

echo json_encode($json);