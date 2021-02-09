<?php

use helpers\Svg;

?>
<section class="hero homepage-hero"  data-desktop-hero="/hero.png" data-mobile-hero="/placeholder/hero/home-hero--mobile@2x.jpg">
    <div class="hero-content">
        <div class="text-box scroll-track left-right delay-1">
            <div class="title">
                <h1 class="heading h1">
                    What’s next?
                </h1>
            </div>
            <div class="separator"></div>
            <div class="subtitle">
                <h2 class="heading h3">
                    Re-imagining Life in a Post-pandemic World
                </h2>
            </div>
        </div>
        <div class="cta-button">
            <button class="btn">
                <span>Explore</span>
                <?php Svg::render('btn-arrow-blue', true, 'Explore', 'assets/images/arrows/')?>
            </button>
        </div>
        <div class="cta-arrow show-for-large">
            <?php Svg::render('hero-arrow-down', true, 'Scroll Down', 'assets/images/arrows/')?>
        </div>
    </div>
</section>
