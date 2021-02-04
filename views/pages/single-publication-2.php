<?php
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - Single Publication']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>

<div class="single-publication">
    <?php
        View::render('organisms/single-publication/modal-publication-download', [
            'image' => '/assets/images/placeholder/publication-2.png',
            'chapters' => [
                ['title' => 'Lorem Ipsum Title Goes Here', 'metadata' => 'PDF (1.9 MB)', 'lang' => ''],
                ['title' => 'Lorem Ipsum Title Goes Here', 'metadata' => 'PDF (1.9 MB)', 'lang' => ''],
                ['title' => 'Lorem Ipsum Title Goes Here', 'metadata' => 'PDF (1.9 MB)', 'lang' => ''],
                ['title' => 'Lorem Ipsum Title Goes Here', 'metadata' => 'PDF (1.9 MB)', 'lang' => ''],
                ['title' => 'Lorem Ipsum Title Goes Here', 'metadata' => 'PDF (1.9 MB)', 'lang' => ''],
                ['title' => 'Lorem Ipsum Title Goes Here', 'metadata' => 'PDF (1.9 MB)', 'lang' => ''],
                ['title' => 'Lorem Ipsum Title Goes Here', 'metadata' => 'PDF (1.9 MB)', 'lang' => '']
            ]
        ]);
    ?>

    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell large-offset-1 large-4 medium-6 medium-offset-0">
                <?php
                    View::render('partials/breadcrumb', [
                        'links' => [
                            ['link' => '/single-publication', 'name' => 'Publications'],
                        ]
                    ]);

                    View::render('molecules/cards/publication-featured-card', [
                        'image' => '/assets/images/placeholder/publication-2.png'
                    ]);
                ?>
            </div>
            <div class="cell large-offset-1 large-5 medium-6 medium-offset-0">
                <?php View::render('organisms/single-publication/featured-publication-text'); ?>


                <div class="related-publications" data-load-step="8" data-view-more-less>
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
