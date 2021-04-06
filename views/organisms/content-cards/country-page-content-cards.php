<?php use helpers\View; ?>


<section class="country-page-content-cards" data-view-more data-load-step="4">
    <div class="grid-container grid-x overflow-hidden">
        <div class="cell cards-container scroll-track left-right delay-1">
            <div class="grid-x grid-margin-x flex-container align-center">
                <div class="cell medium-6 large-3 card-item">
                    <?php
                    View::render('molecules/cards/single-content-card-image', [
                        'tag' => 'Content tag',
                        'link' => $_SERVER['REQUEST_URI'],
                        'title' => 'In Costa Rica, rural women grow their own businesses.',
                        'image' => '/assets/images/placeholder/cards/single-content-card-image-2.png',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-3 card-item">
                    <?php
                    View::render('molecules/cards/single-content-card-body', [
                        'tag' => 'Content tag',
                        'link' => $_SERVER['REQUEST_URI'],
                        'title' => '“We are a forgotten population.”',
                        'description' => 'Using social media to help marginalized groups get HIV services during COVID-19',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-3 card-item">
                    <?php
                    View::render('molecules/cards/single-content-card-accent-color', [
                        'tag' => 'Publication',
                        'link' => $_SERVER['REQUEST_URI'],
                        'title' => 'UN calls for comprehensive debt standstill in all developing countries.',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-3 card-item">
                    <?php
                    View::render('molecules/cards/single-content-card-body', [
                        'tag' => 'Content tag',
                        'link' => $_SERVER['REQUEST_URI'],
                        'title' => '“I cry for no apparent reason.”',
                        'description' => 'More than nine years of war have left 11.7 million Syrians in need of assistance and 6.2 million are internally displaced, some many times over.',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
            </div>
            <div class="grid-x grid-margin-x">
                <div class="cell cta-container">
                    <?php
                    View::render('molecules/buttons/cta-no-arrow', [
                        'classes' => 'red',
                        'text' => 'See All Stories'
                    ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
