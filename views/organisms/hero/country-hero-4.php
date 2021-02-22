<?php
use helpers\Svg;
?>

<section class="hero country-hero-4">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-5 large-offset-1 hero-content-text">
                <div class="heading h2 title-text scroll-track left-right delay-1"><?= $title ?? '' ?></div>
                <div class="heading h3 subtitle-text">Re-imagining Life in a </br>
                    Post-pandemic World</div>
            </div>
            <div class="cell large-6 hero image-block" data-desktop-image="<?= $imageUrl ?? '' ?>" data-mobile-image="<?= $imageMobileUrl ?? '' ?>" >
                <div class="cta-button">
                    <button class="btn">
                        <span>Read More</span>
                        <?php Svg::render('btn-arrow-blue', true, 'Explore', '/assets/images/arrows/')?>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
