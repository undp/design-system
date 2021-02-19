<?php

use helpers\Svg;
use helpers\View;

?>

<section class="hero global-hero-1">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-9 small-offset-1 large-6 large-offset-0">
                <?php View::render('partials/breadcrumb', [
                    'links' => $breadcrumbLinks ?? '',
                    'classes' => 'accent-white'
                ]) ?>
                <div class="heading h2 title scroll-track left-right delay-1"><?= $title ?? '' ?></div>
                <div class="cta-arrow show-for-medium">
                    <?php Svg::render('hero-arrow-down', true, 'Scroll Down', 'assets/images/arrows/') ?>
                </div>
            </div>
            <div class="cell large-6 hero" data-desktop-image="<?= $imageUrl ?? '' ?>" data-mobile-image="<?= $imageMobileUrl ?? '' ?>" >

            </div>
        </div>
    </div>
</section>
