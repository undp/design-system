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
                <?php View::render('organisms/text/bulleted-list') ?>
            </div>
        </div>
    </div>
</div>
