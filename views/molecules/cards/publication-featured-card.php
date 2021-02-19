<?php

use helpers\Svg;
use helpers\View;

?>

<div class="publication-featured-card" data-ie-sticky>
    <h2 class="heading h2">Publications</h2>
    <?php View::render('molecules/photo/publication-image', ['image' => $image]); ?>
    <div class="publication-social">
        <div class="grid-x social-container">
            <div class="cell medium-6">
                <button class="download-btn flex-container" data-publication-download data-modal-trigger="modal-publication-download">
                    <span class="download">Download</span>
                    <span class="icon-download">
                        <span class="icon-item">
                            <?php Svg::render('icon-download') ?>
                        </span>
                    </span>
                </button>
            </div>
            <div class="cell medium-6">
                <div class="social-icons">
                    <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-facebook') ?></a>
                    <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-twitter') ?></a>
                    <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-instagram') ?></a>
                    <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-linkedin') ?></a>
                    <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-youtube') ?></a>
                </div>
            </div>
        </div>
    </div>
</div>
