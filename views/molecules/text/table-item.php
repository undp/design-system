<?php use helpers\View;?>
<div class="link-item">
    <?php if ($image) : ?>
        <?php View::render('molecules/photo/publication-image', ['image' => $image]); ?>
    <?php endif; ?>
    <div class="big-copy"><?= $title ?? '' ?></div>
    <a href="#" class="text-link arrow-3">
        Read More
        <?=  file_get_contents("assets/images/arrows/btn-arrow-external.svg");  ?>
    </a>
</div>
