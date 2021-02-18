<?php use helpers\View; ?>

<div class="photo-cta-group">
    <div class="grid-container grid-x">
        <div class="cell small-10 small-offset-1 medium-12 medium-offset-0 flex-container cards-title">
            <div class="heading h2 content-title scroll-track left-right delay-1">Take Action</div>
        </div>
        <div class="cell">
            <div class="grid-x grid-margin-x flex-container align-center cards-content">
                <div class="cell medium-4 large-4 card-item scroll-track left-right delay-2">
                    <?php
                    View::render('molecules/photo/photo-cta', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                        'image' => '/assets/images/placeholder/cards/photo-cta-image01.png',
                        'cta' => 'Shop'
                    ])
                    ?>
                </div>
                <div class="cell medium-4 large-4 card-item scroll-track left-right delay-3">
                    <?php
                    View::render('molecules/photo/photo-cta', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                        'image' => '/assets/images/placeholder/cards/photo-cta-image02.png',
                        'cta' => 'Donate'
                    ])
                    ?>
                </div>
                <div class="cell medium-4 large-4 card-item scroll-track left-right delay-4">
                    <?php
                    View::render('molecules/photo/photo-cta', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                        'image' => '/assets/images/placeholder/cards/photo-cta-image03.png',
                        'cta' => 'Explore'
                    ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
