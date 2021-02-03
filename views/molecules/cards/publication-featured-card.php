<?php

use helpers\Svg;
use helpers\View;

?>

<div class="publication-featured-card">
    <?php View::render('molecules/images/publication-image', ['image' => '/assets/images/placeholder/publication-1.png']); ?>
    <div class="publication-social">
        <div class="grid-x social-container">
            <div class="cell large-6">
                <button class="download-btn flex-container" data-publication-download>
                    <span class="download">Download</span>
                    <span class="icon-download">
                        <span class="icon-item">
                            <?php Svg::render('icon-download') ?>
                        </span>
                    </span>
                </button>
            </div>
            <div class="cell large-6">
                <div class="social-icons">
                    <div class="icon-item"><?php Svg::render('icon-facebook') ?></div>
                    <div class="icon-item"><?php Svg::render('icon-twitter') ?></div>
                    <div class="icon-item"><?php Svg::render('icon-instagram') ?></div>
                    <div class="icon-item"><?php Svg::render('icon-linkedin') ?></div>
                    <div class="icon-item"><?php Svg::render('icon-youtube') ?></div>
                </div>
            </div>
        </div>
    </div>
</div>