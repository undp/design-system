<?php use helpers\Svg; ?>


<?php if (isset($url) && !empty($url)) : ?>
    <a href="<?= $url ?>" class="btn <?= $classes ?? '' ?>">
        <?= $text ?? '' ?>
        <?php Svg::render('btn-arrow-blue', false, $text ?? '', 'assets/images/arrows/'); ?>
    </a>
<?php else : ?>
    <button class="btn <?= $classes ?? '' ?>">
        <?= $text ?? '' ?>
        <?php Svg::render('btn-arrow-blue', false, $text ?? '', 'assets/images/arrows/'); ?>
    </button>
<?php endif; ?>
