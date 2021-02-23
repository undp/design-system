<?php
$desktopSliderOptions = [
    'type' => 'slider',
    'bound' => true,
    'gap' => 350,
    'peek' => ['before' => 0, 'after' => 30],
    'perView' => 1,
    'breakpoints' => [
        '1300' => ['gap' => 300],
    ]
];

$mobileSliderOptions = [
    'type' => 'slider',
    'bound' => true,
    'gap' => 24,
    'peek' => ['before' => 0, 'after' => 30],
    'perView' => 4,
    'breakpoints' => [
        '475' => ['perView' => 1],
        '600' => ['perView' => 2],
        '820' => ['perView' => 3]
    ]
];
?>

<section class="image-only-carousel grid-container overflow-hidden">
    <div class="grid-x scroll-track left-right delay-1">
        <div class="cell">
            <h2 class="heading h2">UNDP Image only carousel</h2>
        </div>

        <div class="cell large-9 show-for-large">
            <div class="generic-slider" data-options=<?= json_encode($desktopSliderOptions) ?>>
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-01.png" alt="">
                            <img src="/assets/images/placeholder/galleries/carousel-image-02.png" alt="">
                            <img src="/assets/images/placeholder/galleries/carousel-image-03.png" alt="">
                            <img src="/assets/images/placeholder/galleries/carousel-image-04.png" alt="">
                        </li>
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-01.png" alt="">
                            <img src="/assets/images/placeholder/galleries/carousel-image-02.png" alt="">
                            <img src="/assets/images/placeholder/galleries/carousel-image-03.png" alt="">
                            <img src="/assets/images/placeholder/galleries/carousel-image-04.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="cell hide-for-large">
            <div class="generic-slider" data-options=<?= json_encode($mobileSliderOptions) ?>>
                <div class="bullets-container">
                    <div class="glide__bullets" data-glide-el="controls[nav]"></div>
                </div>

                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-01.png" alt="">
                        </li>
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-02.png" alt="">
                        </li>
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-03.png" alt="">
                        </li>
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-04.png" alt="">
                        </li>
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-01.png" alt="">
                        </li>
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-02.png" alt="">
                        </li>
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-03.png" alt="">
                        </li>
                        <li class="glide__slide">
                            <img src="/assets/images/placeholder/galleries/carousel-image-04.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
