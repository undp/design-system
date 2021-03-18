<?php $hasVideoBackground = isset($videoUrl) && !empty($videoUrl); ?>


<section
    data-desktop-image="<?= $imageUrl ?? '' ?>"
    data-mobile-image="<?= $imageMobileUrl ?? '' ?>"
    class="hero country-hero-5 <?= $classes ?? '' ?> <?= $hasVideoBackground ? 'video-background' : '' ?>">

    <?php if ($hasVideoBackground) : ?>
        <video class="hide-for-small-only" autoplay loop muted playsinline data-object-fit="cover" data-object-position="left center">
            <source src="<?= $videoUrl ?>" type="video/mp4">
        </video>
        <video class="show-for-small-only" autoplay loop muted playsinline data-object-fit="cover" data-object-position="left center">
            <source src="<?= $mobileVideoUrl ?? $videoUrl ?>" type="video/mp4">
        </video>
    <?php endif; ?>

    <div class="content-wrapper grid-container">
        <div class="grid-x">
            <div class="cell small-9 small-offset-1 large-8">
                <div class="heading h2 title-text scroll-track left-right delay-1"><?= $title ?? '' ?></div>
            </div>
            <div class="cta-button">
                <a href="" class="btn">
                    <span>Read More</span>
                    <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                </a>
            </div>
        </div>
    </div>
</section>
