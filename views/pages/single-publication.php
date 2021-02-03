<?php

use helpers\Svg;
use helpers\View;

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - Single Publication']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main-justify') ?>

<div class="single-publication">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-offset-1 large-4 medium-6 medium-offset-0 featured-publication">
                <div class="publication">
                    <div class="publication-image">
                        <img class="image lazy" data-src="/assets/images/placeholder/publication-1.png">
                    </div>
                    <div class="publication-social">
                        <div class="grid-x social-container">
                            <div class="cell large-6">
                                <div class="download-btn flex-container">
                                    <div class="download">Download</div>
                                    <div class="icon-download">
                                        <div class="icon-item">
                                            <?php Svg::render('icon-download') ?>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cell large-6">
                                <div class="social-icons">
                                    <div class="icon-item"><?php Svg::render('icon-facebook') ?></div>
                                    <div class="icon-item"><?php Svg::render('icon-twitter') ?></div>
                                    <div class="icon-item"><?php Svg::render('icon-instagram') ?></div>
                                    <div class="icon-item"><?php Svg::render('icon-linkedin') ?></div>
                                    <div class="icon-item"><?php Svg::render('icon-youtube') ?></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell large-offset-1 large-6 medium-6 medium-offset-0 small-offset-1 small-11">
                <?php View::render('organisms/single-publication/featured-publication'); ?>

                <div class="related-publications">
                    <div class="heading h2 related-title">Related Publications</div>
                    <div class="grid-x grid-margin-x related-items-content">
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'Content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action…",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'What we are doing',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action…",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action…",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action…",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action…",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action…",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action…",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                        <div class="cell medium-6 card-item">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'content Tag',
                                'title' => 'Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed do ',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action…",
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
