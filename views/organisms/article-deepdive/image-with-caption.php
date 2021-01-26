<?php
$captionClasses = 'large-7 large-offset-2';
$imageSize = isset($imageSize) ? $imageSize : 'large';
$imageContainerClasses = 'scroll-track scale-up delay-2';

if ($imageSize === 'small') {
    $captionClasses = 'medium-2 medium-offset-0';
    $imageContainerClasses = 'medium-4 medium-offset-2';
}

if ($imageSize === 'medium') {
    $imageContainerClasses = 'large-7 large-offset-2';
}
?>

<section class="image-with-caption grid-container <?= $imageSize ?> <?= $classes ?? '' ?>">
    <div class="grid-x overflow-hidden">

        <div class="image-container cell small-12 <?= $imageContainerClasses ?>">
            <div
                class="featured-image"
                style="background-image: url('<?= $image ?? '' ?>')">
            </div>
        </div>

        <?php if(isset($caption) && isset($imageAuthor)): ?>
            <div class="image-caption cell small-8 small-offset-3 scroll-track opacity-only delay-2 <?= $captionClasses ?>">
                <div class="image-alt">
                    <p class="medium-copy">
                        <?= $caption ?? '' ?>
                    </p>
                </div>
                <div class="image-author">
                    <p class="medium-copy">
                        <span class="show-for-medium">Photo:<br></span>
                        <b><?= $imageAuthor ?? '' ?></b>
                    </p>
                </div>
            </div>
        <?php endif ?>
    </div>
</section>
