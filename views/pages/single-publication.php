<?php
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - Single Publication']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>

<div class="single-publication">
    <?php  ?>
    <?php View::render('organisms/single-publication/modal-publication-download'); ?>

    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-offset-1 large-4 medium-6 medium-offset-0">
                <?php
                View::render('partials/breadcrumb', [
                    'links' => [
                        ['link' => '/single-publication', 'name' => 'Publications'],
                    ]
                ])
                ?>
                <?php View::render('molecules/cards/publication-featured-card', [
                    'image' => '/assets/images/placeholder/publication-1.png'
                ]); ?>
            </div>
            <div class="cell large-offset-1 large-6 medium-6 medium-offset-0 small-offset-1 small-11">
                <?php View::render('organisms/single-publication/featured-publication-text'); ?>


                <div class="related-publications" data-view-more-less data-load-step="8">
                    <div class="heading h2 related-title">Related Publications</div>
                    <div class="grid-x grid-margin-x related-items-content cards-container">
                        <?php View::render('partials/single-publication/publication-cards'); ?>
                    </div>
                    <div class="cta-button flex-container">
                        <button class="btn blue view-more" data-view-more>
                            View More
                        </button>
                        <button class="btn blue view-less" data-view-less>
                            View Less
                        </button>
                    </div>
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
