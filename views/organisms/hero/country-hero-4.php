<?php $hasVideo = isset($videoUrl) && !empty($videoUrl); ?>


<section class="hero country-hero-4 <?= $hasVideo ? 'has-video' : '' ?>">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-5 large-offset-1 hero-content-text">
                <div class="heading h2 title-text scroll-track left-right delay-1"><?= $title ?? '' ?></div>
                <div class="heading h3 subtitle-text scroll-track left-right delay-1">Re-imagining Life in a </br>
                    Post-pandemic World</div>
            </div>
            <div class="cell large-6 hero image-block" data-desktop-image="<?= $imageUrl ?? '' ?>" data-mobile-image="<?= $imageMobileUrl ?? '' ?>" >

                <?php if ($hasVideo) : ?>
                    <video autoplay loop muted data-object-fit="cover" data-object-position="top left">
                        <source src="<?= $videoUrl ?>" type="video/mp4">
                    </video>
                <?php endif; ?>
                
                <div class="cta-button">
                    <button class="btn">
                        <span>Read More</span>
                        <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="hero image-block mobile"data-desktop-image="<?= $imageUrl ?? '' ?>" data-mobile-image="<?= $imageMobileUrl ?? '' ?>">

        <?php if ($hasVideo) : ?>
            <video autoplay loop muted>
                <source src="<?= $videoUrl ?>" type="video/mp4">
            </video>
        <?php endif; ?>

        <div class="cta-button mobile">
            <button class="btn">
                <span>Explore</span>
                <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
            </button>
        </div>
</section>
