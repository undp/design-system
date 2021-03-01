<?php

use helpers\Svg;
use helpers\View;

?>

<div class="multi-cta-featured-publication" data-ie-sticky>

    <h2 class="heading h2">Publications</h2>

    <div class="card-container">
        <?php View::render('molecules/photo/publication-image', ['image' => $image]); ?>

        <div class="social-icons">
            <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-facebook') ?></a>
            <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-twitter') ?></a>
            <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-instagram') ?></a>
            <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-linkedin') ?></a>
            <a href="#" target="_blank" class="icon-item"><?php Svg::render('icon-youtube') ?></a>
        </div>

        <div class="publication-links">
            <div class="grid-x links-container">
                <div class="cell small-6">
                    <a href="#" class="text-link arrow-3 download-btn flex-container" data-publication-download data-modal-trigger="modal-publication-download">
                        Download
                        <span class="icon-wrapper">
                            <span class="icon">
                                <?php Svg::render('icon-download') ?>
                            </span>
                        </span>
                    </a>
                </div>

                <div class="cell small-6 text-right">
                    <a href="#" target="_blank" class="text-link arrow-3 flex-container">
                        Read More
                        <span class="icon-wrapper">
                           <span class="icon">
                                <?php Svg::render('arrows/btn-arrow-external') ?>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
