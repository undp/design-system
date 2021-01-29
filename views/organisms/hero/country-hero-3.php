<?php
use helpers\Svg;
?>
<section class="country-hero-3">
    <div class="grid-container hero-container">
        <div class="left-bar"></div>
        <div class="grid-x">
            <div class="cell large-3 large-offset-1">
                <div class="heading h3 scroll-track left-right delay-1"><?= $subtitle ?? '' ?></div>
            </div>
        </div>
        <div class="grid-x">
            <div class="cell large-8 large-offset-1">
                <div class="heading h2 scroll-track left-right delay-1 title">
                    <?= $title ?? '' ?>
                </div>
            </div>
        </div>
        <div class="grid-x">
            <div class="cell large-11 large-offset-1 article-container">
                <div class="grid-x">
                    <div class="cell large-3 article-description">
                        <div class="heading h5 subtitle">
                            <?= $description ?? '' ?>
                        </div>
                        <button class="btn">
                            Read
                            <?php Svg::render('btn-arrow-blue', true, 'Explore', 'assets/images/arrows/')?>
                        </button>
                    </div>
                    <div class="cell large-9 article-image">
                        <img src="<?= $imageUrl ?? '' ?>" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
   <div class="grid-container hero-container-mobile">
        <div class="article-image">
            <img src="<?= $imageUrl ?? '' ?>" alt="">
        </div>
    </div>
</section>
