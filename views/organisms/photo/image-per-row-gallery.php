<?php
use helpers\View;

$images = isset($images) && is_array($images) ? $images : [];
$invertImageAlignment = isset($image['invertImageAlignment']) ? $image['invertImageAlignment'] : false;
?>


<section class="image-per-row-gallery">
    <div class="grid-container grid-x">

        <div class="cell">
            <div class="grid-x grid-margin-x">

                <div class="cell scroll-track left-right delay-1 hide-for-medium">
                    <h3 class="heading h3">UNDP Hope</h3>
                </div>

                <?php View::render('molecules/photo/gallery-text-content', ['hasBackground' => true]); ?>

                <div class="cell medium-6 overflow-hidden">
                    <div class="gallery-images grid-x grid-margin-x <?= $invertImageAlignment ? 'invert-alignment' : '' ?>">
                        <?php foreach($images as $image) : ?>
                            <div class="cell overflow-hidden">
                                <div class="scroll-track left-right delay-1">
                                    <img class="<?= $image['imgClass'] ?? '' ?>" src="<?= $image['path'] ?? '' ?>" alt="">
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
