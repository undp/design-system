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
        <div class="grid-x grid-margin-x">
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

                <div class="related-publications">
                    <div class="heading h2 related-title">Related Publications</div>
                    <div class="grid-x grid-margin-x related-items-content">
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'url' => '/single-publication',
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'Content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'url' => '/single-publication',
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'What we are doing',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'url' => '/single-publication',
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'url' => '/single-publication',
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'url' => '/single-publication',
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'url' => '/single-publication',
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'url' => '/single-publication',
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'url' => '/single-publication',
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
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
