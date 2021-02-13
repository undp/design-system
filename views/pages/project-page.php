<?php

use helpers\View;
use helpers\Svg;

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Project']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>


<div class="project-page overflow-hidden">

    <?php View::render('organisms/hero/project-hero'); ?>

    <?php View::render('organisms/text/headline-text'); ?>

    <?php View::render('organisms/text/featured-callout-bullets'); ?>

    <?php View::render('organisms/text/related-table'); ?>

    <?php View::render('organisms/stats/listed-stats'); ?>

    <?php
        View::render('organisms/carousel/small-stats-slider', [
            'heading' => 'Countries we support',
            'cards' => [
                ['title' => 'Cook Island'],
                ['title' => 'Federated States of Micronesia'],
                ['title' => 'Fiji'],
                ['title' => 'Kingdom of Tonga'],
                ['title' => 'Kiribati'],
                ['title' => 'Nauro']
            ]
        ]);
    ?>


    <div class="explore-more grid-container" data-view-more data-scroll-up data-load-step="16">
        <div class="grid-x">
            <div class="cell medium-offset-1 medium-11">
                <h2 class="heading h2">Explore More</h2>
            </div>
            <div class="cell">
                <?php View::render('partials/project-page/explore-more-cards') ?>

                <div class="cta-button flex-container">
                    <button class="btn blue view-more" data-view-more-btn>
                        View More
                    </button>
                </div>

                <div class="scroll-up" data-scroll-btn>
                    <?php Svg::render('angle-right') ?>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
