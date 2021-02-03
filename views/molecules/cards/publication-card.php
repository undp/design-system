<?php
use helpers\View;
$imageExist = isset($image) && !empty($image);
?>

<a href="#"
   class="publication-card <?= $type ?? 'hover-publication' ?> <?= !$imageExist ? 'no-image' : '' ?> <?= $color ?? '' ?>">
    <div class="hover-slide">
        <?php if ($imageExist):
            View::render('molecules/images/publication-image', ['image' => $image]);
        endif; ?>
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
                <span><?= $cta ?? 'Read more' ?></span>
                <?= file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg"); ?>
            </div>
        </div>
    </article>
</a>
