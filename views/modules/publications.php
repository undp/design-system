<?php
use helpers\View;
?>

<div class="publications">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-offset-1 small-11 medium-offset-1 medium-10 large-offset-1 large-10">
                <div class="section-title">
                    <h2 class="heading h2">
                        Publications
                    </h2>
                </div>
            </div>
        </div>
        <div class="grid-x">
            <div class="cell medium-12 large-offset-1 large-10">
                <div class="publications-slider">
                    <div class="glide">
                        <div class="glide__bullets" data-glide-el="controls[nav]">
                            <button class="glide__bullet" data-glide-dir="=0"></button>
                            <button class="glide__bullet" data-glide-dir="=1"></button>
                            <button class="glide__bullet" data-glide-dir="=2"></button>
                        </div>
                        <div class="glide__track" data-glide-el="track">
                            <ul class="glide__slides">
                                <li class="glide__slide">
                                    <?php View::render('components/publication') ?>
                                </li>
                                <li class="glide__slide">
                                    <?php View::render('components/publication') ?>
                                </li>
                                <li class="glide__slide">
                                    <?php View::render('components/publication') ?>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>