<?php use helpers\View; ?>

<div class="sdg-content-cards">
    <div class="grid-x">
        <div class="cell medium-11 medium-offset-1">
            <div class="grid-x grid-padding-x flex-container align-center">
                <div class="cell">
                    <h3 class="heading h3">Explore more</h3>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-content-card-body', [
                        'tag' => 'Content tag',
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
                        'title' => 'EIF and UNDP to strengthen cooperation for sustainable finance.',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-content-card-image', [
                        'tag' => 'Content tag',
                        'title' => 'A vineyard with a storied past receives an injection of new life.',
                        'image' => '/assets/images/placeholder/cards/single-content-card-image.png',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
            </div>
            <div class="grid-x grid-padding-x flex-container align-center">
                <div class="cell medium-6 large-4">
                    <?php
                    View::render('molecules/cards/single-content-card-image', [
                        'tag' => 'Content tag',
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
                        'title' => 'UN calls for comprehensive debt standstill in all developing countries.',
                        'cta' => 'Read More'
                    ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>