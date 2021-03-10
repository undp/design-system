<?php
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
                    <div class="text-link arrow-2">
                        <span>Read More</span>
                        <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
                    </div>
                </div>
            </a>
        </div>
    <?php endif; ?>
</div>
