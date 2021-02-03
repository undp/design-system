<?php
$imageExist = isset($image) && !empty($image);
?>
<section>
    <a href="#" class="publication-card <?= $type ?? 'hover-publication'  ?> <?= !$imageExist? 'no-image' : ''?> <?= $color ?? ''  ?>">
        <div class="hover-slide">
            <?php if($imageExist): ?>
                <div class="publication">
                    <div class="publication-image">
                        <div class="image"><img src="<?= $image ?>" alt=""></div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
        <article class="content">
            <div class="tag"> <?= $tag ?? '' ?></div>
            <div class="title-description">
                <div class="heading h5">
                    <?= $title ?? '' ?>
                </div>
                <div class="medium-copy body-copy">
                    <?= $description ?? '' ?>
                </div>
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
