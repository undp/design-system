<?php use helpers\View; ?>

<section class="news-centre-cards">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell medium-4 large-3">
                <?php
                    View::render('partials/multi-select', [
                        'id' => 'content-type-select',
                        'class' => 'content-type-select',
                        'ariaLabel' => 'Content Types',
                        'title' => 'Content Types',
                        'dataType' => 'content-type',
                        'dataIdentifier' => 'data-content-type-filter'
                    ]);
                ?>
                <div class="flex-container active-filters show-for-large" data-active-filters></div>
            </div>

            <div class="cell medium-8 large-9 search-results cards-container">
                <?php View::render('partials/news-centre/cards-results') ?>

                <div class="cta-button">
                    <button class="btn blue load-more hide">
                        View More
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
