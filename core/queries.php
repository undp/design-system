<?php

namespace core;
include $_SERVER['DOCUMENT_ROOT'] . '/database-connection.php';

class Queries
{

    function getQuery($query)
    {
        $connection = connection();
        $result = $connection->query($query)->fetch_all(MYSQLI_ASSOC);
        $connection->close();
        return $result;
    }

    function formatDataCountries($data)
    {
        $response = [];
        foreach ($data as $index => $country) {
            $countryRow = (object)$country;
            $languages = [];
            if(isset($countryRow->languages)) {
                $languagesRow = json_decode($countryRow->languages);
                foreach ($languagesRow as $languageItem) {
                    $languageObject = (object)$languageItem;
                    $languages[] = (object)[
                        'url' => $languageObject->url,
                        'name' => $languageObject->name,
                    ];
                }
            }

            $response[] = (object)[
                'index' => $index,
                'name' => $countryRow->name ? $countryRow->name : '',
                'office' => $countryRow->office ? strtolower($countryRow->office) : '',
                'continent' => $countryRow->continent ? strtolower($countryRow->continent) : '',
                'languages' => $languages,
            ];
        }
        return $response;
    }

    function formatDataOurExpertise($data)
    {
        $response = [];
        foreach ($data as $index => $item) {

            $response[] = (object)[
                'index' => $index,
                'title' => $item['title'] ?? '',
                'videoUrl' => $item['video_url'] ?? '',
                'imageUrl' => $item['image_url'] ?? '',
                'description' => $item['description'] ?? '',

            ];
        }
        return $response;
    }

    function getCountries()
    {
        $query = 'SELECT * FROM countries';
        $dataQuery = $this->getQuery($query);
        return $this->formatDataCountries($dataQuery);
    }

    function getOurExpertise()
    {
        $query = 'SELECT * FROM our_expertise';
        $dataQuery = $this->getQuery($query);
        return $this->formatDataOurExpertise($dataQuery);
    }
}