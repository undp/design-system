<?php
use helpers\View;
?>

<section id="modal-popular-search" class="menu-modal modal-popular-search hide">
    <div class="modal-content">
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
            <div class="grid-x grid-margin-x results-and-filters-container">
                <div class="cell large-4 search-filters">
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'language-select',
                        'ariaLabel' => 'Language',
                        'title' => 'Language',
                        'dataType' => 'language',
                        'actionListener' => 'data-language-filter'
                    ]);
                    ?>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'content-type-select',
                        'ariaLabel' => 'Content Type',
                        'title' => 'Content Type',
                        'dataType' => 'content-type',
                        'actionListener' => 'data-content-type-filter'
                    ]);
                    ?>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'region-select',
                        'ariaLabel' => 'Region',
                        'title' => 'Region',
                        'dataType' => 'region',
                        'actionListener' => 'data-region-filter'
                    ]);
                    ?>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'topic-select',
                        'ariaLabel' => 'Topic',
                        'title' => 'Topic',
                        'dataType' => 'topic',
                        'actionListener' => 'data-topic-filter'
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
