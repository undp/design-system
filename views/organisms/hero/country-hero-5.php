<?php
use helpers\View;
$hasVideoBackground = isset($videoUrl) && !empty($videoUrl);
?>

<section
    data-desktop-image="<?= $imageUrl ?? '' ?>"
    data-mobile-image="<?= $imageMobileUrl ?? '' ?>"
    class="hero country-hero-5 <?= $hasVideoBackground ? 'video-background' : '' ?>">

    <?php if ($hasVideoBackground) : ?>
        <video autoplay loop>
            <source src="<?= $videoUrl ?>" type="video/mp4">
        </video>
    <?php endif; ?>

    <div class="content-wrapper grid-container">
        <div class="grid-x">
            <div class="cell small-9 small-offset-1 large-8">
                <?php View::render('partials/breadcrumb', [
                    'links' => $breadcrumbLinks ?? '',
                    'classes' => 'accent-white'
                ]) ?>
                <div class="heading h2 title-text scroll-track left-right delay-1"><?= $title ?? '' ?></div>
            </div>
        </div>
    </div>
</section>
