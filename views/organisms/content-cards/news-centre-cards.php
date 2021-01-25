<?php use helpers\View; ?>

<section class="news-centre-cards">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-3">
                <?php View::render('partials/news-centre/cards-filter') ?>
            </div>

            <div class="cell large-9 search-results cards-container">
                <?php View::render('partials/news-centre/cards-results') ?>

                <div class="cta-button">
                    <button class="btn blue">
                        View More
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
