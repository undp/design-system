<?php
use helpers\Svg;
use helpers\View;
?>

<section class="global-hero hero-3"
         style="background-image: url('<?= $imageUrl ?? '' ?>')">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-9 small-offset-1">
                <?php View::render('partials/breadcrumb', [
                    'links' => $breadcrumbLinks ?? ''
                ]) ?>
                <div class="hero-3-title"><?= $title ?? '' ?></div>
                <div class="cta-arrow show-for-medium">
                    <?php Svg::render('hero-arrow-down', true, 'Scroll Down', 'assets/images/arrows/') ?>
                </div>
            </div>
        </div>
    </div>
</section>
