<?php $hasVideo = isset($videoUrl) && !empty($videoUrl); ?>


<section class="hero global-hero-1 height-auto <?= $hasVideo ? 'has-video' : '' ?>" style="position: relative">
    <div class="grid-container">
        <div class="grid-x grid-margin-x">

            <div class="cell medium-5 medium-offset-1 hero-content-text">
                <div class="heading h2 title-text scroll-track left-right delay-1"><?= $title ?? '' ?></div>
                <div class="heading h3 subtitle-text scroll-track left-right delay-1">
                    <?= $subtitle ?? 'Re-imagining Life in a</br>Post-pandemic World' ?>
                </div>

                <div class="cta-button">
                    <button class="btn">
                        <span>Explore</span>
                        <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                    </button>
                </div>
            </div>

            <div class="cell video-background" data-contract-target>
                <div class="grid-x hero-content">
                    <div class="cell medium-6 hero image-block" data-desktop-image="<?= $imageUrl ?? '' ?>" >
                        <?php if ($hasVideo) : ?>
                            <video class="absolute-positioned" autoplay loop muted playsinline data-object-fit="cover" data-object-position="center">
                                <source src="<?= $videoUrl ?>" type="video/mp4">
                            </video>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="hero image-block mobile" data-desktop-image="<?= $imageUrl ?? '' ?>" data-mobile-image="<?= $imageMobileUrl ?? '' ?>" data-contract-target>
        <?php if ($hasVideo) : ?>
            <video autoplay loop muted playsinline>
                <source src="<?= $mobileVideoUrl ?? $videoUrl ?>" type="video/mp4">
            </video>
        <?php else: ?>
            <div class="cta-button">
                <button class="btn">
                    <span>Explore</span>
                    <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                </button>
            </div>
        <?php endif; ?>
    </div>

    <?php if ($hasVideo) : ?>
        <div class="cta-button mobile">
            <button class="btn">
                <span>Explore</span>
                <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
            </button>
        </div>
    <?php endif; ?>
</section>
