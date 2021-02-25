<?php
use helpers\View;
use helpers\Svg;
?>
<div class="download-item">
    <?php if ($image) : ?>
        <?php View::render('molecules/photo/publication-image', ['image' => $image]); ?>
    <?php endif; ?>
    <div class="item-text-content">
        <div class="big-copy title-text"><?= $title ?? '' ?></div>

        <a href="#" class="text-link arrow-3" <?= $attributes ?? '' ?>>
            <?= $btnText ?? '' ?>
            <span class="icon-download">
               <span class="icon-item">
               <?php Svg::render('icon-download') ?>
                        </span>
                    </span>
        </a>
    </div>
</div>
