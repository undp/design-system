<?php

use helpers\Svg;
use helpers\View;

?>

<section id="modal-popular-search" class="menu-modal modal-popular-search hide">
    <div class="modal-content">
        <div class="modal-body grid-container">
            <div class="grid-x grid-margin-x search-bar">
                <div class="cell">
                    <div class="flex-container align-middle input-group">
                        <div class="icon">
                            <?php Svg::render('icon-search-black', true, 'Search Icon Input') ?>
                        </div>
                        <label class="show-for-sr" for="search">Search</label>
                        <input class="input-search title" type="search" name="search" id="search">
                    </div>
                </div>
            </div>
            <div class="grid-x grid-margin-x results-and-filters-container">
                <div class="cell large-4 search-filters">
                    <?php
                    View::render('partials/multi-select', [
                        'id' => 'content-type-select',
                        'class' => 'content-type-select white',
                        'ariaLabel' => 'Content Types',
                        'title' => 'Content Types',
                        'dataType' => 'content-type',
                        'dataIdentifier' => 'data-content-type-filter'
                    ]);
                    ?>

                    <div class="flex-container active-filters" data-active-filters></div>
                </div>
                <div class="cell large-8 search-results">
                    <div class="grid-x" data-modal-search>
                        <?php //Quick Links and Popular Searches columns are added via JS ?>
                    </div>
                </div>
            </div>
        </div>
</section>
