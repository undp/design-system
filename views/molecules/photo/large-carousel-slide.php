<?php
use helpers\View;

$imgPath = '/assets/images/placeholder';
$imageOnly = isset($imageOnly) ? $imageOnly : false;
?>


<div class="large-carousel-slide flex-container flex-dir-column medium-flex-dir-row">
    <img src="<?= "$imgPath/about-us--slider-image.jpg" ?>" alt="">

    <?php if (!$imageOnly) : ?>
        <div class="slide-content">
            <a href="#">
                <h4 class="heading h4">
                    Entry and Exit Points: Violent Extremism in South-East Asia
                </h4>

                <p class="big-copy">
                    This study summarizes four complementary in-depth papers that explore the localized…
                </p>

                <div class="cta">
                    <?php
                        View::render('molecules/text-links/cta-text-link', [
                            'tagName' => 'div',
                            'text' => 'Read More',
                            'arrowClass' => 'arrow-2'
                        ]);
                    ?>
                </div>
            </a>
        </div>
    <?php endif; ?>
</div>
