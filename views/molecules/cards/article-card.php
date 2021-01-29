<?php
    $imageExist = isset($image) && !empty($image);
?>
<section>
    <a href="#" class="article-card <?= $size ?? 'regular'  ?> <?= !$imageExist? 'no-image' : ''?> <?= $color ?? ''  ?>">
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
                <div class="text-link arrow-2">
                    <span><?= $cta ?? 'Read more'?></span>
                    <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
                </div>
            </div>
        </article>
    </a>
</section>
