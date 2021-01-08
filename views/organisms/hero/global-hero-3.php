<?php
use helpers\Svg;
use helpers\View;
?>

<section class="global-hero hero-3"
         style="background-image: url('../../../assets/images/placeholder/hero/global-hero-3.png')">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-9 small-offset-1">
                <?php View::render('partials/breadcrumb', [
                    'links' => [(object)['name' => 'About', 'link' => '#']]
                ]) ?>
                <div class="hero-3-title">The SDGs In ACTION.</div>
                <div class="cta-arrow show-for-large">
                    <?php Svg::render('hero-arrow-down', true, 'Scroll Down', 'assets/images/arrows/') ?>
                </div>
            </div>
        </div>
    </div>
</section>
