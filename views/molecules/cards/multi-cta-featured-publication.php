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
                    <?php
                        View::render('molecules/buttons/download-btn', [
                            'btnText' => 'Download',
                            'classes' => 'flex-container',
                            'attributes' => 'data-publication-download data-modal-trigger="modal-publication-download"'
                        ]);
                    ?>
                </div>

                <div class="cell small-6 text-right">
                    <?php
                        View::render('molecules/text-links/external-link', [
                            'text' => 'Read More'
                        ]);
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
