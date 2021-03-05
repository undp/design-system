<?php
use helpers\View;
$hasVideoBackground = isset($videoUrl) && !empty($videoUrl);

?>

<section class="hero global-hero-2 <?= $hasVideoBackground ? 'video-background' : '' ?>" data-desktop-image="<?= $imageUrl ?? '' ?>" data-mobile-image="<?= $imageMobileUrl ?? '' ?>">

    <?php if ($hasVideoBackground) : ?>
        <video class="show-for-small-only" autoplay loop muted playsinline data-object-fit="cover" data-object-position="top left">
            <source src="<?= $videoUrl ?>" type="video/mp4">
        </video>
        <video class="hide-for-small-only" autoplay loop muted playsinline data-object-fit="cover" data-object-position="top left">
            <source src="<?= $mobileVideoUrl ?? $videoUrl ?>" type="video/mp4">
        </video>
    <?php endif; ?>

    <div class="content-wrapper grid-container">
        <div class="grid-x">
            <div class="cell small-9 small-offset-1">
                <?php View::render('partials/breadcrumb', [
                    'links' => $breadcrumbLinks ?? '',
                    'classes' => 'accent-white'
                ]) ?>
                <div class="title scroll-track left-right delay-1"><?= $title ?? '' ?></div>
                <div class="subtitle scroll-track left-right delay-1">Re-imagining Life in a</br>
                    Post-pandemic World
                </div>
            </div>
            <div class="cta-button">
                <button class="btn">
                    <span>Read More</span>
                    <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                </button>
            </div>
        </div>
    </div>
</section>
