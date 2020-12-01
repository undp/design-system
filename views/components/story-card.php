<?php
    $imageExist = isset($image) && !empty($image);
?>
<a href="#" class="story-card scroll-track left-right delay-2 <?= $size ?? 'regular'  ?> <?= !$imageExist? 'no-image' : ''?>">
    <div class="hover-image">
        <?php if($imageExist): ?>
            <img src="<?= $image ?>" alt="Story Image">
        <?php endif; ?>
    </div>
    <div class="content">
        <p class="tag">
            <?= $tag ?? '' ?>
        </p>
        <div class="title-description">
            <h3 class="heading h5">
                <?= $title ?? '' ?>
            </h3>
            <p class="small-copy">
                <?= $description ?? '' ?>
            </p>
        </div>
        <div class="cta">
            <span class="text-link arrow-2">
                <?= $cta ?? 'Read more'?>
                <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
            </span>
        </div>
    </div>
</a>
