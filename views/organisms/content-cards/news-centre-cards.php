<?php
    use helpers\Svg;
    use helpers\View;
?>

<section class="news-centre-cards">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell medium-4 large-3 flex-container flex-dir-column">
                <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'content-type-select',
                        'class' => 'white',
                        'title' => 'Content Types',
                        'dataType' => 'content-type',
                        'actionListener' => 'data-content-type-filter'
                    ]);
                ?>
                <div class="flex-container active-filters" data-active-filters></div>
            </div>

            <div class="cell medium-8 large-9 search-results cards-container" data-scroll-up>
                <?php View::render('partials/news-centre/cards-results') ?>

                <div class="cta-button">
                    <a href="" class="btn blue load-more visibility-hidden">
                        View More
                    </a>
                </div>

                <div class="scroll-up" data-scroll-btn>
                    <?php Svg::render('angle-right') ?>
                </div>
            </div>
        </div>
    </div>
</section>
