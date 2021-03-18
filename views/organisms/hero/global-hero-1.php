<?php $hasVideo = isset($videoUrl) && !empty($videoUrl); ?>


<section class="hero global-hero-1 height-auto <?= $hasVideo ? 'has-video' : '' ?>">
    <div class="grid-container">
        <div class="grid-x grid-margin-x">

            <div class="cell medium-5 medium-offset-1 hero-content-text">
                <div class="heading h2 title-text scroll-track left-right delay-1"><?= $title ?? '' ?></div>
                <div class="heading h3 subtitle-text scroll-track left-right delay-1">
                    <?= $subtitle ?? 'Re-imagining Life in a</br>Post-pandemic World' ?>
                </div>

                <div class="cta-button">
                    <a href="" class="btn">
                        <span>Explore</span>
                        <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="hero-background" data-contract-target>
        <div class="image-block" data-desktop-image="<?= $imageUrl ?? '' ?>" data-mobile-image="<?= $imageMobileUrl ?? '' ?>" data-multi-image-background>
            <?php if ($hasVideo) : ?>
                <video class="hide-for-small-only" autoplay loop muted playsinline data-object-fit="cover" data-object-position="center">
                    <source src="<?= $videoUrl ?>" type="video/mp4">
                </video>
                <video class="show-for-small-only" autoplay loop muted playsinline>
                    <source src="<?= $mobileVideoUrl ?? $videoUrl ?>" type="video/mp4">
                </video>
            <?php else : ?>
                <div class="cta-button show-for-small-only">
                    <a href="" class="btn">
                        <span>Explore</span>
                        <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                    </a>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <?php if ($hasVideo) : ?>
        <div class="cta-button show-for-small-only">
            <a href="" class="btn">
                <span>Explore</span>
                <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
            </a>
        </div>
    <?php endif; ?>
</section>
