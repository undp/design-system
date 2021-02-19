<?php

use helpers\Svg;
use helpers\View;

?>

<section class="hero global-hero-1">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-9 small-offset-1 large-5 large-offset-1 hero-content-text">
                <div class="heading h2 title-text scroll-track left-right delay-1"><?= $title ?? '' ?></div>
                <div class="heading h3 subtitle-text">Re-imagining Life in a </br>
                    Post-pandemic World</div>

                <div class="cta-button">
                    <button class="btn">
                        <span>Explore</span>
                        <?php Svg::render('btn-arrow-blue', true, 'Explore', '/assets/images/arrows/')?>
                    </button>
                </div>
            </div>
            <div class="cell large-6 hero" data-desktop-image="<?= $imageUrl ?? '' ?>" data-mobile-image="<?= $imageMobileUrl ?? '' ?>" >

            </div>
        </div>
    </div>
</section>
