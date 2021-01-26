<?php

use helpers\View;


View::render('partials/multi-select', [
    'id' => 'content-type-select',
    'class' => 'content-type-select',
    'ariaLabel' => 'Content Types',
    'title' => 'Content Types',
    'dataType' => 'content-type',
    'dataIdentifier' => ''
]);
