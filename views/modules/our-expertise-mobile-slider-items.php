<?php

use helpers\View;

if ($index % 2 == 0) {
    ?>
    <div class="grid-x our-expertise-row glide__slide">
        <div class="cell small-11 medium-3 expertise-section-text">
            <?php
            View::render('components/expertise-card', [
                'title' => $title,
                'description' => $description,
                'cta' => 'Read more'
            ]) ?>
        </div>
        <div class="cell small-11 medium-3 expertise-section-image">
            <div class="expertise-image">
                <div class="background-video hide-for-small-only">
                    <video class="lazy"
                           data-src="<?= $videoUrl ?>"
                           autoplay muted loop playsinline aria-hidden="true"></video>
                </div>
                <?php
                View::render('components/image-card', [
                    'route' => $imageUrl
                ])
                ?>
            </div>
        </div>
    </div>
    <?php
} else { ?>
    <div class="grid-x our-expertise-row glide__slide">
        <div class="cell small-11 medium-3 expertise-section-image">
            <div class="expertise-image">
                <div class="background-video hide-for-small-only">
                    <video class="lazy"
                           data-src="<?= $videoUrl ?>"
                           autoplay muted loop playsinline aria-hidden="true"></video>
                </div>
                <?php
                View::render('components/image-card', [
                    'route' => $imageUrl
                ])
                ?>
            </div>
        </div>
        <div class="cell small-11 medium-3 expertise-section-text">
            <?php
            View::render('components/expertise-card', [
                'title' => $title,
                'description' => $description,
                'cta' => 'Read more'
            ])
            ?>
        </div>
    </div>
    <?php
}
?>
