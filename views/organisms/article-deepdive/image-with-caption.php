<?php
    $fullWidth = isset($fullWidth) ? $fullWidth : true;
    $captionClasses = $fullWidth ? 'large-7 large-offset-2 full-width' : 'medium-2 medium-offset-0 split-row';
?>

<section class="image-with-caption grid-container <?= $fullWidth ? 'full-width' : 'split-row' ?> <?= $classes ?? '' ?>">
    <div class="grid-x overflow-hidden">

        <div class="image-container cell small-12 <?= $fullWidth ? 'scroll-track scale-up delay-2' : 'medium-4 medium-offset-2' ?>">
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
                    <?= $imageAuthor ?? '' ?>
                </p>
            </div>
        </div>
        <?php endif ?>
    </div>
</section>
