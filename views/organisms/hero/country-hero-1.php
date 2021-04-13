<?php
use helpers\View;

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


<section class="country-hero-1">
    <div class="hero-wrapper grid-container overflow-hidden">

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


        <div class="grid-x grid-margin-x images-block show-for-large">
            <div class="cell medium-2 small-3">
                <a href="#" class="image-item flex-container">
                    <div class="gradient"></div>
                    <img src="/assets/images/placeholder/hero/image-block-hero-1.jpg" alt="">
                    <div class="description">
                        <div class="card-description-text">Women earn only 77 cents for every dollar that men get
                            for the same work
                        </div>
                        <div class="cta">
                            <?php
                                View::render('molecules/text-links/cta-text-link', [
                                    'tagName' => 'div',
                                    'text' => 'Explore',
                                    'arrowClass' => 'arrow-2'
                                ]);
                            ?>
                        </div>
                    </div>
                </a>
            </div>
            <div class="cell medium-3 small-3">
                <a href="#" class="image-item flex-container">
                    <div class="gradient"></div>
                    <img src="/assets/images/placeholder/hero/image-block-hero-2.jpg" alt="">
                    <div class="description">
                        <div class="card-description-text">Women earn only 77 cents for every dollar that men get for
                            the same work
                        </div>
                        <div class="cta">
                            <?php
                                View::render('molecules/text-links/cta-text-link', [
                                    'tagName' => 'div',
                                    'text' => 'Explore',
                                    'arrowClass' => 'arrow-2'
                                ]);
                            ?>
                        </div>
                    </div>
                </a>
            </div>
            <div class="cell medium-2 small-3">
                <a href="#" class="image-item flex-container">
                    <div class="gradient"></div>
                    <img src="/assets/images/placeholder/hero/image-block-hero-3.jpg" alt="">
                    <div class="description">
                        <div class="card-description-text">Women earn only 77 cents for every dollar that men get for
                            the same work
                        </div>
                        <div class="cta">
                            <?php
                                View::render('molecules/text-links/cta-text-link', [
                                    'tagName' => 'div',
                                    'text' => 'Explore',
                                    'arrowClass' => 'arrow-2'
                                ]);
                            ?>
                        </div>
                    </div>
                </a>
            </div>
            <div class="cell medium-2 small-3">
                <a href="#" class="image-item flex-container">
                    <div class="gradient"></div>
                    <img src="/assets/images/placeholder/hero/image-block-hero-4.jpg" alt="">
                    <div class="description">
                        <div class="card-description-text">Women earn only 77 cents for every dollar that men get for
                            the same work
                        </div>
                        <div class="cta">
                            <?php
                                View::render('molecules/text-links/cta-text-link', [
                                    'tagName' => 'div',
                                    'text' => 'Explore',
                                    'arrowClass' => 'arrow-2'
                                ]);
                            ?>
                        </div>
                    </div>
                </a>
            </div>
            <div class="cell medium-3 small-3">
                <a href="#" class="image-item flex-container">
                    <div class="gradient"></div>
                    <img src="/assets/images/placeholder/hero/image-block-hero-5.jpg" alt="">
                    <div class="description">
                        <div class="card-description-text">Women earn only 77 cents for every dollar that men get for
                            the same work
                        </div>
                        <div class="cta">
                            <?php
                                View::render('molecules/text-links/cta-text-link', [
                                    'tagName' => 'div',
                                    'text' => 'Explore',
                                    'arrowClass' => 'arrow-2'
                                ]);
                            ?>
                        </div>
                    </div>
                </a>
            </div>
        </div>


        <div class="grid-x images-block hide-for-large">
            <div class="cell">
                <div class="generic-slider" data-options=<?= json_encode($sliderOptions) ?>>
                    <div class="bullets-container">
                        <div class="glide__bullets" data-glide-el="controls[nav]"></div>
                    </div>

                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            <li class="glide__slide">
                                <a href="#" class="image-item flex-container">
                                    <div class="gradient"></div>
                                    <img src="/assets/images/placeholder/hero/image-block-hero-1.jpg" alt="">
                                    <div class="description">
                                        <div class="card-description-text">Women earn only 77 cents for every dollar
                                            that men get
                                            for the same work
                                        </div>
                                        <div class="cta">
                                            <?php
                                                View::render('molecules/text-links/cta-text-link', [
                                                    'tagName' => 'div',
                                                    'text' => 'Explore',
                                                    'arrowClass' => 'arrow-2'
                                                ]);
                                            ?>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="glide__slide">
                                <a href="#" class="image-item flex-container">
                                    <div class="gradient"></div>
                                    <img src="/assets/images/placeholder/hero/image-block-hero-2.jpg" alt="">
                                    <div class="description">
                                        <div class="card-description-text">Women earn only 77 cents for every dollar
                                            that men get
                                            for the same work
                                        </div>
                                        <div class="cta">
                                            <?php
                                                View::render('molecules/text-links/cta-text-link', [
                                                    'tagName' => 'div',
                                                    'text' => 'Explore',
                                                    'arrowClass' => 'arrow-2'
                                                ]);
                                            ?>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="glide__slide">
                                <a href="#" class="image-item flex-container">
                                    <div class="gradient"></div>
                                    <img src="/assets/images/placeholder/hero/image-block-hero-3.jpg" alt="">
                                    <div class="description">
                                        <div class="card-description-text">Women earn only 77 cents for every dollar
                                            that men get
                                            for the same work
                                        </div>
                                        <div class="cta">
                                            <?php
                                                View::render('molecules/text-links/cta-text-link', [
                                                    'tagName' => 'div',
                                                    'text' => 'Explore',
                                                    'arrowClass' => 'arrow-2'
                                                ]);
                                            ?>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="glide__slide">
                                <a href="#" class="image-item flex-container">
                                    <div class="gradient"></div>
                                    <img src="/assets/images/placeholder/hero/image-block-hero-4.jpg" alt="">
                                    <div class="description">
                                        <div class="card-description-text">Women earn only 77 cents for every dollar
                                            that men get
                                            for the same work
                                        </div>
                                        <div class="cta">
                                            <?php
                                                View::render('molecules/text-links/cta-text-link', [
                                                    'tagName' => 'div',
                                                    'text' => 'Explore',
                                                    'arrowClass' => 'arrow-2'
                                                ]);
                                            ?>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="glide__slide">
                                <a href="#" class="image-item flex-container">
                                    <div class="gradient"></div>
                                    <img src="/assets/images/placeholder/hero/image-block-hero-5.jpg" alt="">
                                    <div class="description">
                                        <div class="card-description-text">Women earn only 77 cents for every dollar
                                            that men get
                                            for the same work
                                        </div>
                                        <div class="cta">
                                            <?php
                                                View::render('molecules/text-links/cta-text-link', [
                                                    'tagName' => 'div',
                                                    'text' => 'Explore',
                                                    'arrowClass' => 'arrow-2'
                                                ]);
                                            ?>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </div>
</section>
