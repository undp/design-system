<?php
use helpers\Svg;
?>

<button class="sdg-card  <?= $class ?>" data-color="<?= $class ?? '' ?>" data-url="<?= $urlData ?? '' ?>">
    <span class="number scroll-track left-right delay-2"><?= $number ?></span>
    <span class="title scroll-track left-right delay-2"><?= $title ?></span>
    <?php if (isset($image)) { ?>
        <span class="hover-image">
        <img src="<?= $image ?>" alt="<?= $imageAlt ?>">
        <span class="gradient"></span>
    </span>
    <?php }
    if (isset($nextLink)) { ?>
        <div class="arrow-container">
            <span class="show-for-medium">
                <?php Svg::render('sdg-hover-arrow', false, '', 'assets/images/arrows/') ?>
            </span>
            <span class="show-for-small-only">
                <?php Svg::render('btn-arrow-white', false, '', 'assets/images/arrows/') ?>
           </span>
        </div>
    <?php } ?>
</button>
