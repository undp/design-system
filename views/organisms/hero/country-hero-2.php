<?php
$sliderOptions = [
    'type' => 'slider',
    'bound' => true,
    'gap' => 24,
    'peek' => ['before' => 0, 'after' => 200],
    'perView' => 3,
    'breakpoints' => [
        '425' => [
            'perView' => 1,
            'peek' => ['before' => 0, 'after' => 100]
        ],
        '660' => [
            'perView' => 2,
            'peek' => ['before' => 0, 'after' => 100]
        ],
        '820' => [
            'perView' => 2,
        ]
    ]
];
?>


<section class="country-hero-2">

    <div class="grid-container">
        <div class="grid-x text-block">
            <div class="cell large-5 large-offset-1">
                <h2 class="heading h2 scroll-track left-right delay-1 title">
                    <?= $title ?? '' ?>
                </h2>
            </div>
            <div class="cell large-3 large-offset-1 subtitle-block">
                <div class="header-title scroll-track left-right delay-1"><?= $subtitle ?? '' ?></div>
            </div>
        </div>


        <div class="grid-x grid-margin-x images-block hide-for-small-only">
            <div class="cell medium-3 large-2 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-1.jpg" alt="">
            </div>
            <div class="cell medium-3 large-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-2.jpg" alt="">
            </div>
            <div class="cell medium-3 large-2 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-3.jpg" alt="">
            </div>
            <div class="cell medium-3 large-3 image-item">
                <img src="/assets/images/placeholder/hero/image-block-hero-4.jpg" alt="">
            </div>
            <div class="cell large-2 cta-button">
                <a href="" class="btn">
                    Read More
                    <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                </a>
            </div>
        </div>


        <div class="grid-x grid-margin-x images-block show-for-small-only">
            <div class="cell">
                <div class="generic-slider" data-options=<?= json_encode($sliderOptions) ?>>
                    <div class="bullets-container">
                        <div class="glide__bullets" data-glide-el="controls[nav]"></div>
                    </div>

                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            <li class="glide__slide image-item">
                                <img src="/assets/images/placeholder/hero/image-block-hero-1.jpg" alt="">
                            </li>
                            <li class="glide__slide image-item">
                                <img src="/assets/images/placeholder/hero/image-block-hero-2.jpg" alt="">
                            </li>
                            <li class="glide__slide image-item">
                                <img src="/assets/images/placeholder/hero/image-block-hero-3.jpg" alt="">
                            </li>
                            <li class="glide__slide image-item">
                                <img src="/assets/images/placeholder/hero/image-block-hero-4.jpg" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="cell large-2 cta-button">
                <a href="" class="btn">
                    Read More
                    <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                </a>
            </div>
        </div>
    </div>
</section>
