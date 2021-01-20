<?php
use helpers\View;
use helpers\Svg;
?>

<div id="modal-sdgs" class="modal-sdgs hide">
    <div class="grid-container full height-full">
        <div class="grid-x height-full">
            <div class="cell medium-2 flex-container align-center modal-header show-for-medium">
                <button class="flex-container align-middle align-center btn-close">
                    <?php Svg::render('icon-close') ?>
                </button>
            </div>
            <div class="cell medium-10 height-full modal-content">
                <div class="cell medium-2 flex-container align-center modal-header hide-for-medium">
                    <button class="flex-container align-middle align-center btn-close">
                        <?php Svg::render('icon-close') ?>
                    </button>
                </div>

                <div class="side-spacing">
                    <?php View::render('organisms/hero/sdg-deep-dive-hero') ?>
                    <div class="grid-x grid-padding-x cards-slider">
                        <div class="sdg-card-container right-left delay-2">
                            <?php View::render('molecules/statistics-figures/stat-card', [
                                'number' => 821,
                                'title' => 'Percent',
                                'description' => 'The number of undernourished people reached 821 million in 2017.'
                            ]) ?>
                        </div>
                        <div class="sdg-card-container right-left delay-3">
                            <?php View::render('molecules/statistics-figures/stat-card', [
                                'number' => 63,
                                'title' => 'Percent',
                                'description' => 'In 2017 Asia accounted for nearly two thirds, 63 percent, of the world’s hungry.'
                            ]) ?>
                        </div>
                        <div class="sdg-card-container right-left delay-4">
                            <?php View::render('molecules/statistics-figures/stat-card', [
                                'number' => 22,
                                'title' => 'Percent',
                                'description' => 'Nearly 151 million children under five, 22 percent, were still stunted in 2017.'
                            ]) ?>
                        </div>
                        <div class="sdg-card-container right-left delay-5">
                            <?php View::render('molecules/statistics-figures/stat-card', [
                                'number' => 13,
                                'title' => 'Percent',
                                'description' => 'More than 1 in 8 adults is obese.'
                            ]) ?>
                        </div>
                        <div class="sdg-card-container right-left delay-6">
                            <?php View::render('molecules/statistics-figures/stat-card', [
                                'number' => 'One',
                                'title' => 'Percent',
                                'description' => '1 in 3 women of reproductive age is anemic.'
                            ]) ?>
                        </div>
                        <div class="sdg-card-container right-left delay-7">
                            <?php View::render('molecules/statistics-figures/stat-card', [
                                'number' => 'One',
                                'title' => 'Percent',
                                'description' => '1 in 3 women of reproductive age is anemic.'
                            ]) ?>
                        </div>
                    </div>
                    <?php View::render('organisms/text/bulleted-list') ?>
                    <?php View::render('organisms/content-cards/sdg-content-cards') ?>
                </div>
                <div class="next-sdg-container">
                    <?php View::render('molecules/statistics-figures/sdg-card', [
                        'class' => 'next-card'
                    ]); ?>
                </div>
            </div>
        </div>
    </div>
</div>
