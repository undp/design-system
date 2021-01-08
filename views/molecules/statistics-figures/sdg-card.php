<?php
    include_once 'helpers/General.php';

    $rgbaColorOpacity = hex2rgba($color, 0);
    $rgbaColor = hex2rgba($color)
?>

<a href="#" class="sdg-card" style="background: <?= $color ?>">
    <div class="number"><?= $number ?></div>
    <div class="title"><?= $title ?></div>
    <div class="hover-image">
        <img src="<?= $image ?>" alt="<?= $imageAlt ?>">
        <div class="gradient" style="background-image: linear-gradient(270deg, <?= $rgbaColorOpacity ?> 0%, <?= $rgbaColorOpacity ?> 80%, <?= $rgbaColor ?> 100%);"></div>
    </div>
</a>
