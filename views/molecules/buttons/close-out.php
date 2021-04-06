<?php use helpers\Svg; ?>


<button class="close-out <?= $classes ?? '' ?>" <?= $attrs ?? '' ?>>
    <?php Svg::render('icon-close') ?>
</button>
