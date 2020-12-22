<?php
use Helpers\View;
?>
<div class="search-select-group show-for-large">
    <p class="tag uppercase">Filter by:</p>
    <?php
        View::render('partials/multi-select', [
            'class' => 'regions-select',
            'ariaLabel' => 'Regions',
            'title' => 'Region',
            'dataType' => 'region'
        ])
    ?>
    <?php
        View::render('partials/multi-select', [
            'class' => 'office-type-select',
            'ariaLabel' => 'Offices',
            'title' => 'Office type',
            'dataType' => 'office'
        ])
    ?>

    <div class="active-filters" data-container-filters></div>
</div>