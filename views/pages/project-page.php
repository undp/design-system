<?php

use helpers\View;
use helpers\Svg;

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Project']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>


<div class="project-page">

    <section class="hero project-hero" data-desktop-image="/assets/images/placeholder/hero/about-image.jpg"
             data-mobile-image="/assets/images/placeholder/hero/hero-about-small.jpg">
        <div class="overlay"></div>
        <div class="grid-container scroll-track left-right delay-1 hero-container">
            <div class="grid-x text-container">
                <div class="cell small-12 large-9 large-offset-1 hero-content">
                    <?php
                    View::render('partials/breadcrumb', [
                        'links' => [
                            ['link' => '#', 'name' => '2030 Agenda For Sustainable Development'],
                            ['link' => '#', 'name' => 'Planet'],
                            ['link' => '#', 'name' => 'Climate Change'],
                        ]
                    ])
                    ?>

                    <div class="text-box scroll-track left-right delay-1">
                        <h3 class="title heading h3">
                            UNDP Projects
                        </h3>
                        <h2 class="subtitle heading h2">
                            United Nations pacific regional anti-corruption project - phase II
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="headline-text">
        <div class="grid-container">
            <div class="grid-x">
                <?php
                View::render('partials/project-page/headline-text', [
                    'title' => 'United Nations Pacific</br>Regional Anti-Corruption Project',
                    'copy' => 'The United Nations Pacific Regional Anti-Corruption Project is a joint initiative of the United
                                Nations
                                Office on Drugs and Crime and the United Nations Development Programme, a unique partnership to
                                prevent
                                and fight corruption in 14 Pacific Island countries and the territory of Tokelau.</br></br>
                                UN-PRAC aims to strengthen PICs’ national integrity systems. This is to promote ‘clean’
                                governments and create an enabling environment to increase trade, business, investment and
                                sustainable development in the Pacific. In turn, this will enhance the delivery of equitable and
                                high-quality services to all Pacific Islanders.'
                ]);
                ?>
            </div>
        </div>
    </section>

    <section class="featured-callout">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell large-offset-1 large-11 small-10 small-offset-1">
                    <div class="grid-x">
                        <?php
                        View::render('partials/project-page/featured-callout', [
                        'title' => 'What</br> We do'
                        ]);
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="related-table">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell large-offset-1 large-11 small-10 small-offset-1">
                    <div class="heading h2">Related Materials</div>
                </div>
                <div class="cell large-offset-3 large-7 small-10 small-offset-1 link-list big-copy">
                    <div class="link-item">
                        <a href="#" class="animated-underline"> Country Profiles - outcomes of the Mechanism for the Review of Implementation of
                            the United
                            Nations Convention against Corruption</a>
                    </div>
                    <div class="link-item">
                        <a href="#" class="animated-underline"> Legislative Guide for the Implementation of UNCAC</a>
                    </div>
                    <div class="link-item">
                        <a href="#" class="animated-underline">Mechanism for the Review of Implementation of the United Nations Convention against
                            Corruption</a>
                    </div>
                    <div class="link-item">
                        <a href="#" class="animated-underline">Pacific Youth Anti-Corruption Advocate’s Toolkit</a>
                    </div>
                    <div class="link-item">
                        <a href="#" class="animated-underline">Technical Guide to the United Nations Convention against Corruption</a>
                    </div>
                    <div class="link-item">
                        <a href="#" class="animated-underline">Travaux Préparatoires of the negotiations for the elaboration of the United Nations
                            Convention against Corruption</a>
                    </div>
                    <div class="link-item">
                        <a href="#" class="animated-underline">United Nations Convention against Corruption (UNCAC)</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="listed-stats">
        <div class="grid-container">
            <div class="grid-x">
                <?php View::render('partials/project-page/listed-stats') ?>
            </div>
        </div>
    </section>


    <div class="small-stats-slider">
        <div class="grid-container grid-x overflow-hidden">
            <div class="cell medium-10 medium-offset-1">
                <h2 class="heading h2">Countries we support</h2>
            </div>
            <div class="cell">
                <div class="dynamic-slider cell">

                    <div class="scroll-track left-right delay-1">
                        <div class="glide__track" data-glide-el="track">
                            <ul class="glide__slides">
                                <li class="glide__slide">
                                    <?php View::render('molecules/stats/small-card', ['title' => 'Cook Island']) ?>
                                </li>
                                <li class="glide__slide">
                                    <?php View::render('molecules/stats/small-card', ['title' => 'Federated States of Micronesia']) ?>
                                </li>
                                <li class="glide__slide">
                                    <?php View::render('molecules/stats/small-card', ['title' => 'Fiji']) ?>
                                </li>
                                <li class="glide__slide">
                                    <?php View::render('molecules/stats/small-card', ['title' => 'Kingdom of Tonga']) ?>
                                </li>
                                <li class="glide__slide">
                                    <?php View::render('molecules/stats/small-card', ['title' => 'Kiribati']) ?>
                                </li>
                                <li class="glide__slide">
                                    <?php View::render('molecules/stats/small-card', ['title' => 'Nauro']) ?>
                                </li>
                            </ul>
                        </div>

                        <div class="bullets-container">
                            <div class="glide__bullets" data-glide-el="controls[nav]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="explore-more grid-container" data-view-more data-scroll-up data-load-step="16">
        <div class="grid-x">
            <div class="cell">
                <h2 class="heading h2">Explore More</h2>

                <?php View::render('partials/project-page/explore-more-cards') ?>

                <div class="cta-button flex-container">
                    <button class="btn blue view-more" data-view-more-btn>
                        View More
                    </button>
                </div>

                <div class="scroll-up" data-scroll-btn>
                    <?php Svg::render('angle-right') ?>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
