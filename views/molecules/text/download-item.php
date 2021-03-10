<?php
use helpers\Svg;
use helpers\View;
?>


<div class="download-item">
    <?php if ($image) : ?>
        <?php View::render('molecules/photo/publication-image', ['image' => $image]); ?>
    <?php endif; ?>
    <div class="item-text-content">
        <div class="big-copy title-text"><?= $title ?? '' ?></div>

        <a href="<?= $link ?? '' ?>" target="<?= $target ?? '_self' ?>" class="text-link arrow-3 download-btn" <?= $attributes ?? '' ?>>
            <?= $btnText ?? '' ?>

            <span class="icon-wrapper">
               <span class="icon">
                    <?php Svg::render($btnIcon ?? 'icon-download') ?>
                </span>
            </span>
        </a>
    </div>
</div>
