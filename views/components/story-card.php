<?php
    use helpers\Svg;
    $imageExist = isset($image) && !empty($image);
?>
<section>
    <a href="#" class="story-card scroll-track left-right delay-2 <?= $size ?? 'regular'  ?> <?= !$imageExist? 'no-image' : ''?>">
        <div class="hover-slide">
            <?php if($imageExist): ?>
                <div class="background-image lazy" style="background-image: url(<?= $image ?>)"></div>
            <?php endif; ?>
        </div>
        <article class="content">
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
        </article>
    </a>
</section>
