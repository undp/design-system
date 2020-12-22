<?php

use helpers\View;

include '../../database-connection.php';


function ourExpertise($data)  {
    foreach($data as $index => $item) {
        echo View::render('modules/our-expertise-card', [
            'title' => $item['title'],
            'description' => $item['description'],
            'videoUrl' => $item['video_url'],
            'imageUrl' => $item['image_url'],
            'index' => $index,
        ]);
    }
}

function getQuery($query)
{
    $connection = connection();

    $result = $connection->query($query)->fetch_all(MYSQLI_ASSOC);
    $connection->close();

    return $result;
}

if (isset($_GET['type'])) {
    $query = '';
    switch ($_GET['type']) {
        case 'countries':
            $query = 'SELECT * FROM countries';
            break;
        case 'regions':
            $query = 'SELECT * FROM regions';
            break;
        case 'offices':
            $query = 'SELECT * FROM offices';
            break;
        case 'our_expertise':
            $query = 'SELECT * FROM our_expertise';
            $results=  getQuery($query);
            ourExpertise($results);
//            die();
            break;
    }

//    echo getQuery($query);
}
die();