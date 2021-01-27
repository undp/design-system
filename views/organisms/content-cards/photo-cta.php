<?php use helpers\View; ?>

<div class="photo-cta-cards">
    <div class="grid-x">
        <div class="cell flex-container align-center">
            <div class="heading h2 content-title">Take Action</div>
        </div>
        <div class="cell">
            <div class="grid-x grid-padding-x flex-container align-center cards-content">
                <div class="cell medium-4 large-4">
                    <?php
                    View::render('molecules/cards/photo-cta-card', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'A vineyard with a storied past receives an injection of new life.',
                        'image' => '/assets/images/placeholder/cards/photo-cta-image01.png',
                        'cta' => 'Shop'
                    ])
                    ?>
                </div>
                <div class="cell medium-4 large-4">
                    <?php
                    View::render('molecules/cards/photo-cta-card', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'A vineyard with a storied past receives an injection of new life.',
                        'image' => '/assets/images/placeholder/cards/single-content-card-image-2.png',
                        'cta' => 'Donate'
                    ])
                    ?>
                </div>
                <div class="cell medium-4 large-4">
                    <?php
                    View::render('molecules/cards/photo-cta-card', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'A vineyard with a storied past receives an injection of new life.',
                        'image' => '/assets/images/placeholder/cards/single-content-card-image-2.png',
                        'cta' => 'Explore'
                    ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
