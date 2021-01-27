<?php use helpers\View; ?>

<div class="country-page-content-cards">
    <div class="grid-x">
        <div class="cell">
            <div class="grid-x grid-padding-x flex-container align-center">
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-photo-cta-card', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'A vineyard with a storied past receives an injection of new life.',
                        'image' => '/assets/images/placeholder/cards/photo-cta-image01.png',
                        'cta' => 'Shop'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-photo-cta-card', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'A vineyard with a storied past receives an injection of new life.',
                        'image' => '/assets/images/placeholder/cards/single-content-card-image-2.png',
                        'cta' => 'Shop'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-photo-cta-card', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'A vineyard with a storied past receives an injection of new life.',
                        'image' => '/assets/images/placeholder/cards/single-content-card-image-2.png',
                        'cta' => 'Shop'
                    ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
