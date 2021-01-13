<?php
use helpers\View;
use helpers\Svg;
?>

<div id="modal-sdgs" class="modal-sdgs hide">
    <div class="grid-container full height-full">
        <div class="grid-x height-full">
            <div class="cell medium-2 flex-container align-center modal-header">
                <a class="flex-container align-middle align-center btn-close" href="#">
                     <span class="icon-close" data-icon-close>
                        <?php Svg::render('icon-close') ?>
                    </span>
                </a>
            </div>
            <div class="cell medium-10  height-full modal-content">
                <?php View::render('organisms/hero/sdg-deep-dive-hero') ?>
                <div class="grid-x grid-padding-x cards-slider">
                    <div class="cell medium-2 medium-offset-1">
                        <?php View::render('molecules/statistics-figures/stat-card',[
                                'number' => 821,
                                'title' => 'Percent',
                                'description' => 'The number of undernourished people reached 821 million in 2017.'
                        ]) ?>
                    </div>
                    <div class="cell medium-2">
                        <?php View::render('molecules/statistics-figures/stat-card',[
                            'number' => 63,
                            'title' => 'Percent',
                            'description' => 'In 2017 Asia accounted for nearly two thirds, 63 percent, of the world’s hungry.'
                        ]) ?>
                    </div>
                    <div class="cell medium-2">
                        <?php View::render('molecules/statistics-figures/stat-card',[
                            'number' => 22,
                            'title' => 'Percent',
                            'description' => 'Nearly 151 million children under five, 22 percent, were still stunted in 2017.'
                        ]) ?>
                    </div>
                    <div class="cell medium-2">
                        <?php View::render('molecules/statistics-figures/stat-card',[
                            'number' => 13,
                            'title' => 'Percent',
                            'description' => 'More than 1 in 8 adults is obese.'
                        ]) ?>
                    </div>
                    <div class="cell medium-2">
                        <?php View::render('molecules/statistics-figures/stat-card',[
                            'number' => 'One',
                            'title' => 'Percent',
                            'description' => '1 in 3 women of reproductive age is anemic.'
                        ]) ?>
                    </div>
                </div>
                <?php View::render('organisms/text/bulleted-list') ?>
            </div>
        </div>
    </div>
</div>
