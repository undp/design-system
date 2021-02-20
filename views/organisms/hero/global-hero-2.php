<?php

use helpers\Svg;
use helpers\View;

?>

<section class="hero global-hero-2" data-desktop-image="<?= $imageUrl ?? '' ?>" data-mobile-image="<?= $imageMobileUrl ?? '' ?>">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-9 small-offset-1">
                <?php View::render('partials/breadcrumb', [
                    'links' => $breadcrumbLinks ?? '',
                    'classes' => 'accent-white'
                ]) ?>
                <div class="title scroll-track left-right delay-1"><?= $title ?? '' ?></div>
                <div class="subtitle scroll-track left-right delay-1">Re-imagining Life in a</br>
                    Post-pandemic World</div>
            </div>
        </div>
    </div>
</section>
