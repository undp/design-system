<?php

use helpers\View;


View::render('partials/select', [
    'name' => 'location',
    'placeholder' => 'Location',
    'options' => [
        [
            'id' => 'location-1',
            'label' => 'Location 1'
        ],
        [
            'id' => 'location-2',
            'label' => 'Location 2'
        ],
        [
            'id' => 'location-3',
            'label' => 'Location 3'
        ]
    ]
]);

View::render('partials/select', [
    'name' => 'office',
    'placeholder' => 'Office',
    'options' => [
        [
            'id' => 'office-1',
            'label' => 'Office 1'
        ],
        [
            'id' => 'office-2',
            'label' => 'Office 2'
        ],
        [
            'id' => 'office-3',
            'label' => 'Office 3'
        ]
    ]
]);

View::render('partials/select', [
    'name' => 'publication',
    'placeholder' => 'Publication',
    'options' => [
        [
            'id' => 'publication-1',
            'label' => 'Publication 1'
        ],
        [
            'id' => 'publication-2',
            'label' => 'Publication 2'
        ],
        [
            'id' => 'publication-3',
            'label' => 'Publication 3'
        ]
    ]
]);
