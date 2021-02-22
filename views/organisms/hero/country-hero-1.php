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
            <a href="#">
                <div class="cell large-2 small-3 image-item">
                    <div class="gradient"></div>
                    <img src="/assets/images/placeholder/hero/image-block-hero-1.jpg" alt="">
                    <div class="description">
                        <div class="card-description-text">Women earn only 77 cents for every dollar that men get for the same work</div>
                        <div class="cta">
                            <div class="text-link arrow-2">
                                <span>Explore</span>
                                <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <div class="cell large-3 small-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-2.jpg" alt="">
                <div class="description">
                    <div class="card-description-text">Women earn only 77 cents for every dollar that men get for the same work</div>
                    <div class="cta">
                        <div class="text-link arrow-2">
                            <span>Explore</span>
                            <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell large-2 small-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-3.jpg" alt="">
                <div class="description">
                    <div class="card-description-text">Women earn only 77 cents for every dollar that men get for the same work</div>
                    <div class="cta">
                        <div class="text-link arrow-2">
                            <span>Explore</span>
                            <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell large-2 small-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-4.jpg" alt="">
                <div class="description">
                    <div class="card-description-text">Women earn only 77 cents for every dollar that men get for the same work</div>
                    <div class="cta">
                        <div class="text-link arrow-2">
                            <span>Explore</span>
                            <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell large-3 small-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-5.jpg" alt="">
                <div class="description">
                    <div class="card-description-text">Women earn only 77 cents for every dollar that men get for the same work</div>
                    <div class="cta">
                        <div class="text-link arrow-2">
                            <span>Explore</span>
                            <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
                        </div>
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
