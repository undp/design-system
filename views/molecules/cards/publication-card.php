<?php
use helpers\View;
$imageExist = isset($image) && !empty($image);
?>

<a href="<?= $url ?>"
   class="publication-card <?= $type ?? 'hover-publication' ?> <?= !$imageExist ? 'no-image' : '' ?> <?= $color ?? '' ?>">
    <div class="hover-slide">
        <?php if ($imageExist) : ?>
            <?php View::render('molecules/photo/publication-image', ['image' => $image]); ?>
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
            <?php
                View::render('molecules/text-links/cta-text-link', [
                    'tagName' => 'div',
                    'arrowClass' => 'arrow-2',
                    'text' => $cta ?? 'Read More'
                ]);
            ?>
        </div>
    </article>
</a>
