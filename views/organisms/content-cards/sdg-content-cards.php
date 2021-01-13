<?php use helpers\View;?>

<div class="grid-container">
    <div class="grid-x grid-padding-x flex-container align-center">
        <div class="cell medium-6 large-3">
            <?php View::render('molecules/cards/single-content-card-body') ?>
        </div>
        <div class="cell medium-6 large-3">
            <?php View::render('molecules/cards/single-content-card-accent-color') ?>
        </div>
        <div class="cell medium-6 large-3">
            <?php View::render('molecules/cards/single-content-card-image') ?>
        </div>
    </div>
    <div class="grid-x grid-padding-x flex-container align-center">
        <div class="cell medium-6 large-3">
            <?php View::render('molecules/cards/single-content-card-image') ?>
        </div>
        <div class="cell medium-6 large-3">
            <?php View::render('molecules/cards/single-content-card-body') ?>
        </div>
        <div class="cell medium-6 large-3">
            <?php View::render('molecules/cards/single-content-card-accent-color') ?>
        </div>
    </div>
</div>