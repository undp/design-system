<?php
use helpers\View;
$imgPath = '../../../assets/images/placeholder/about-us'
?>

<div class="standard-page-slider generic-slider">
    <div class="grid-container full">
        <div class="slider scroll-track left-right delay-1">
            <div class="bullets-container">
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    <div class="slider-control"></div>
                </div>
            </div>
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide">
                        <?php View::render('molecules/cards/standard-page-slide') ?>
                    </li>
                    <li class="glide__slide">
                        <?php View::render('molecules/cards/standard-page-slide') ?>
                    </li>
                    <li class="glide__slide">
                        <?php View::render('molecules/cards/standard-page-slide') ?>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
