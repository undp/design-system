<?php $fullWidth = isset($fullWidth) ? $fullWidth : true; ?>


<section class="image-with-caption grid-container scroll-track left-right delay-3">
    <div class="grid-x overflow-hidden">

        <div class="image-container cell small-12">
            <div
                class="featured-image"
                style="background-image: url('<?= $image ?? '' ?>')">
            </div>
        </div>

        <div class="image-caption cell small-8 small-offset-3 large-7 large-offset-2">
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

        <div class="separator cell small-12 large-7 large-offset-2"></div>
    </div>
</section>
