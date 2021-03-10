<?php $hasVideoBackground = isset($videoUrl) && !empty($videoUrl); ?>


<section
    data-desktop-image="<?= $imageUrl ?? '' ?>"
    data-mobile-image="<?= $imageMobileUrl ?? '' ?>"
    class="hero global-hero-2 <?= $classes ?? '' ?> <?= $hasVideoBackground ? 'video-background' : '' ?>">

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
