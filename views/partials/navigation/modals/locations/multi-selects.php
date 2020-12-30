<?php

use Helpers\View;

?>
<div>
    <div class="search-select-group show-for-large">
        <?php
        View::render('partials/multi-select', [
            'id' => 'regions-select',
            'class' => 'regions-select',
            'ariaLabel' => 'Regions',
            'title' => 'Region',
            'dataType' => 'region'
        ])
        ?>
    </div>
</div>
<div>
    <div class="search-select-group show-for-large">
        <?php
        View::render('partials/multi-select', [
            'id' => 'office-type-select',
            'class' => 'office-type-select',
            'ariaLabel' => 'Offices',
            'title' => 'Office type',
            'dataType' => 'office'
        ])
        ?>
    </div>
</div>
