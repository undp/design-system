<?php

use helpers\Svg;

?>
<section class="country-hero-2">

    <div class="grid-container hero-container">
        <div class="grid-x text-block">
            <div class="cell large-4 large-offset-1">
                <div class="heading h2 scroll-track left-right delay-1 title">
                    <?= $title ?? '' ?>
                </div>
            </div>
            <div class="cell large-3 large-offset-1 subtitle-block">
                <div class="heading h3 header-title scroll-track left-right delay-1"><?= $subtitle ?? '' ?></div>
            </div>
        </div>

        <div class="grid-x grid-margin-x images-block">
            <div class="cell large-2 small-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-1.jpg" alt="">
            </div>
            <div class="cell large-3 small-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-2.jpg" alt="">
            </div>
            <div class="cell large-2 small-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-3.jpg" alt="">
            </div>
            <div class="cell large-3 small-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-4.jpg" alt="">
            </div>
            <div class="cell large-2 cta-button">
                <button class="btn">
                    Read More
                    <?php Svg::render('btn-arrow-blue', true, 'Explore', '/assets/images/arrows/') ?>
                </button>
            </div>
        </div>
    </div>
</section>
