<?php
use helpers\Svg;
use helpers\View;
?>


<div id="modal-sdgs" class="modal-sdgs">
    <div class="grid-container full height-full">
        <div class="grid-x height-full">
            <div class="cell medium-2 flex-container align-center modal-header show-for-medium">
                <button class="flex-container align-middle align-center btn-close">
                    <?php Svg::render('icon-close') ?>
                </button>
            </div>
            <div class="cell medium-10 height-full modal-content">
                <div class="flex-container align-center modal-header hide-for-medium">
                    <button class="flex-container align-middle align-center btn-close">
                        <?php Svg::render('icon-close') ?>
                    </button>
                </div>

                <div class="side-spacing" data-sdg-content-wrapper></div>

                <div class="next-sdg-container">
                    <?php View::render('molecules/statistics-figures/sdg-card', [
                        'class' => 'next-card'
                    ]); ?>
                </div>
            </div>
        </div>
    </div>
</div>
