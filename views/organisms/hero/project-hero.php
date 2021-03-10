<?php use helpers\View; ?>

<section class="hero project-hero" data-desktop-image="/assets/images/placeholder/hero/about-image.jpg"
         data-mobile-image="/assets/images/placeholder/hero/hero-about-small.jpg">
    <div class="overlay"></div>
    <div class="grid-container hero-container overflow-hidden">
        <div class="grid-x text-container scroll-track left-right delay-1">
            <div class="cell small-12 large-11 large-offset-1 hero-content">
                <?php
                View::render('partials/breadcrumb', [
                    'links' => [
                        ['link' => '#', 'name' => '2030 Agenda For Sustainable Development'],
                        ['link' => '#', 'name' => 'Planet'],
                        ['link' => '#', 'name' => 'Climate Change'],
                    ],
                    'classes' => 'accent-white'
                ])
                ?>

                <div class="text-box scroll-track left-right delay-1">
                    <h3 class="title heading h3">
                        UNDP Projects
                    </h3>
                    <h2 class="subtitle heading h2">
                        United Nations pacific</br> regional anti-corruption</br> project - phase II
                    </h2>
                </div>
            </div>
        </div>
    </div>
</section>
