<?php
use helpers\View;

$imageOnly = isset($imageOnly) ? $imageOnly : false;

$sliderOptions = [
    'type' => 'slider',
    'bound' => true,
    'gap' => 140,
    'peek' => ['before' => 0, 'after' => 30],
    'perView' => 1,
    'breakpoints' => [
        '820' => ['gap' => 30],
        '1194' => ['gap' => 110],
    ]
];
?>

<section class="large-carousel grid-container overflow-hidden">
    <div class="grid-x">
        <div class="cell small-10 small-offset-1">
            <h2 class="heading h2"><?= $heading ?? 'UNDP Carousel' ?></h2>
        </div>

        <div class="cell medium-10 medium-offset-1">
            <div class="generic-slider scroll-track left-right delay-1" data-options=<?= json_encode($sliderOptions) ?>>
                <div class="bullets-container">
                    <div class="slider-control"></div>
                    <div class="glide__bullets" data-glide-el="controls[nav]"></div>
                </div>

                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <?php
                                View::render('molecules/photo/large-carousel-slide', [
                                    'imageOnly' => $imageOnly
                                ])
                            ?>
                        </li>
                        <li class="glide__slide">
                            <?php
                                View::render('molecules/photo/large-carousel-slide', [
                                    'imageOnly' => $imageOnly
                                ])
                            ?>
                        </li>
                        <li class="glide__slide">
                            <?php
                                View::render('molecules/photo/large-carousel-slide', [
                                    'imageOnly' => $imageOnly
                                ])
                            ?>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>
