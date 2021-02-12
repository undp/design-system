<?php

use helpers\View;

?>

<section id="modal-popular-search" class="menu-modal modal-popular-search hide">
    <div class="modal-content" data-modal-search>
        <div class="modal-body grid-container">
            <div class="grid-x grid-margin-x">
                <div class="cell">
                    <?php
                    View::render('molecules/forms/search-input', [
                        'id' => 'search',
                        'label' => 'Search',
                        'additionalClass' => 'big-search'
                    ]);
                    ?>
                </div>
            </div>
            <div class="results-and-filters-container">
                <div class="search-filters">
                    <div class="mobile-filters-open">
                        <button class="btn blue">Filters &nbsp;<span class="counter"></span></button>
                    </div>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'language-select',
                        'title' => 'Language',
                        'dataType' => 'language',
                        'actionListener' => 'data-language-filter'
                    ]);
                    ?>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'content-type-select',
                        'title' => 'Content Type',
                        'dataType' => 'content-type',
                        'actionListener' => 'data-content-type-filter'
                    ]);
                    ?>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'regions-countries-select',
                        'title' => 'Regions & Countries',
                        'dataType' => 'region-countries',
                        'actionListener' => 'data-regions-countries-filter'
                    ]);
                    ?>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'topic-select',
                        'title' => 'Topic',
                        'dataType' => 'topic',
                        'actionListener' => 'data-topic-filter'
                    ]);
                    ?>

                    <div class="active-filters" data-active-filters></div>

                    <div class="mobile-filters-close">
                        <button class="btn">Show Results</button>
                    </div>
                </div>
                <div class="search-results">
                    <div class="grid-x grid-margin-x" data-search-results>
                        <?php //Quick Links and Popular Searches columns are added via JS ?>
                    </div>
                </div>
            </div>
        </div>
</section>
