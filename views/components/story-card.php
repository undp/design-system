<?php
    use helpers\SVg;
    $imageExist = isset($image) && !empty($image);
?>
<section>
    <a href="#" class="story-card scroll-track left-right delay-2 <?= $size ?? 'regular'  ?> <?= !$imageExist? 'no-image' : ''?>">
        <div class="hover-slide">
            <?php if($imageExist): ?>
                <div class="background-image" style="background-image: url(<?= $image ?>)"></div>
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
                    <?php Svg::render('btn-arrow-red-secondary', true, $cta ?? 'Read more', 'assets/images/arrows/')?>
                </span>
            </div>
        </article>
    </a>
</section>
