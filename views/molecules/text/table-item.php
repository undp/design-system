<?php use helpers\View;?>
<div class="link-item">
    <?php if ($image) : ?>
        <?php View::render('molecules/photo/publication-image', ['image' => $image]); ?>
    <?php endif; ?>
    <div class="item-text-content">
        <div class="big-copy title-text"><?= $title ?? '' ?></div>

        <a href="#" class="text-link arrow-3" <?= $attributes ?? '' ?>>
            <?= $btnText ?? '' ?>
            <?=  file_get_contents($btnIcon ?? 'assets/images/arrows/btn-arrow-external.svg');  ?>
        </a>
    </div>
</div>
