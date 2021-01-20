<?php use helpers\View; ?>

<div class="sdg-content-cards">
    <div class="grid-x">
        <div class="cell">
            <div class="grid-x grid-padding-x flex-container align-center" data-sdg-container>
                <div class="cell hide-for-small-only">
                    <h3 class="heading h3">SDGs in Action</h3>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-content-card-body', [
                        'tag' => 'Content tag',
                        'link' => $_SERVER['REQUEST_URI'],
                        'title' => 'UNDP at the Paris Peace Forum 2020.',
                        'description' => 'Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’.',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-content-card-accent-color', [
                        'tag' => 'Content tag',
                        'link' => $_SERVER['REQUEST_URI'],
                        'title' => 'EIF and UNDP to strengthen cooperation for sustainable finance.',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-content-card-image', [
                        'tag' => 'Content tag',
                        'link' => $_SERVER['REQUEST_URI'],
                        'title' => 'A vineyard with a storied past receives an injection of new life.',
                        'image' => '/assets/images/placeholder/cards/single-content-card-image.png',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-content-card-image', [
                        'tag' => 'Content tag',
                        'link' => $_SERVER['REQUEST_URI'],
                        'title' => 'A vineyard with a storied past receives an injection of new life.',
                        'image' => '/assets/images/placeholder/cards/single-content-card-image-2.png',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
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
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-content-card-accent-color', [
                        'tag' => 'Content tag',
                        'link' => $_SERVER['REQUEST_URI'],
                        'title' => 'UN calls for comprehensive debt standstill in all developing countries.',
                        'cta' => 'Read More',
                        'color' => 'accent-green'
                    ])
                    ?>
                </div>
            </div>
            <div class="grid-x grid-padding-x">
                <div class="cell">
                    <div class="cta-container">
                        <?php View::render('molecules/buttons/cta-no-arrow', [
                            'cta' => 'View More',
                            'data' => 'data-sdg-load'
                        ]); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
