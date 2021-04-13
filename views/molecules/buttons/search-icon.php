<?php use helpers\Svg; ?>

<button type="button" class="nav-item search-icon <?= $classes ?? '' ?>" <?= $attrs ?? '' ?>>
    <span data-icon>
        <?php Svg::render('icon-search')?>
    </span>
    <span class="hide icon-close" data-icon-close>
        <?php Svg::render('icon-close') ?>
    </span>
    <span class="show-for-sr">Open/close Search</span>
</button>