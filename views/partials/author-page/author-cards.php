<?php use helpers\View; ?>


<div class="grid-x grid-margin-x">
    <div class="cell large-4 medium-6 card-item">
        <?php
        View::render('molecules/cards/single-content-card-image', [
            'tag' => 'Content Tag',
            'link' => $_SERVER['REQUEST_URI'],
            'title' => 'In Costa Rica, rural women grow their own businesses.',
            'image' => '/assets/images/placeholder/cards/single-content-card-image-2.png',
            'cta' => 'Read More'
        ])
        ?>
    </div>
    <div class="cell large-4 medium-6 card-item">
        <?php
        View::render('molecules/cards/single-content-card-body', [
            'tag' => 'Content Tag',
            'link' => $_SERVER['REQUEST_URI'],
            'title' => '“We are a forgotten population.”',
            'description' => 'Using social media to help marginalized groups get HIV services during COVID-19',
            'cta' => 'Read More'
        ])
        ?>
    </div>
    <div class="cell large-4 medium-6 card-item">
        <?php
        View::render('molecules/cards/single-content-card-accent-color', [
            'tag' => 'Content Tag',
            'link' => $_SERVER['REQUEST_URI'],
            'title' => 'UN calls for comprehensive debt standstill in all developing countries.',
            'cta' => 'Read More',
            'color' => 'accent-yellow'
        ])
        ?>
    </div>
    <div class="cell large-4 medium-6 card-item">
        <?php
        View::render('molecules/cards/single-content-card-body', [
            'tag' => 'Content Tag',
            'link' => $_SERVER['REQUEST_URI'],
            'title' => 'UNDP at the Paris Peace Forum 2020.',
            'description' => 'Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’.',
            'cta' => 'Read More'
        ])
        ?>
    </div>
    <div class="cell large-4 medium-6 card-item">
        <?php
        View::render('molecules/cards/single-content-card-accent-color', [
            'tag' => 'Content Tag',
            'link' => $_SERVER['REQUEST_URI'],
            'title' => 'EIF and UNDP to strengthen cooperation for sustainable finance.',
            'cta' => 'Read More',
            'color' => 'accent-yellow'
        ])
        ?>
    </div>
    <div class="cell large-4 medium-6 card-item">
        <?php
        View::render('molecules/cards/single-content-card-image', [
            'tag' => 'Content Tag',
            'link' => $_SERVER['REQUEST_URI'],
            'title' => 'A vineyard with a storied past receives an injection of new life.',
            'image' => '/assets/images/placeholder/cards/single-content-card-image.png',
            'cta' => 'Explore'
        ])
        ?>
    </div>
</div>
