<?php
    $imageExist = isset($image) && !empty($image);
?>
<div class="story-card scroll-track left-right delay-4 <?= $size ?? 'regular'  ?> <?= !$imageExist? 'no-image' : ''?>">
    <div class="hover-image">
        <?php if($imageExist): ?>
            <img src="<?= $image ?>" alt="story-image">
        <?php endif; ?>
    </div>
    <div class="content">
        <p class="tag">
            <?= $tag ?? '' ?>
        </p>
        <h5 class="heading h5">
            <?= $title ?? '' ?>
        </h5>
        <p class="small-copy">
            <?= $description ?? '' ?>
        </p>
        <div class="cta">
            <a class="text-link arrow-2" href="#">
                <?= $cta ?? 'Read more'?>
                <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
            </a>
        </div>
    </div>
</div>