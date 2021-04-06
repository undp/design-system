<?php use helpers\View; ?>


<div class="download-item">
    <?php if ($image) : ?>
        <?php View::render('molecules/photo/publication-image', ['image' => $image]); ?>
    <?php endif; ?>
    <div class="item-text-content">
        <div class="big-copy title-text"><?= $title ?? '' ?></div>

        <?php
            View::render('molecules/buttons/download-btn', [
                'link' => $link ?? '',
                'target' => $target ?? '_self',
                'attributes' => $attributes ?? '',
                'btnText' => $btnText ?? '',
                'btnIcon' => $btnIcon ?? 'icon-download'
            ]);
        ?>
    </div>
</div>
