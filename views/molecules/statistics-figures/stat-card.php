<?php
$sizes = ['small', 'medium', 'large'];
$cardSize = isset($size) && in_array($size, $sizes) ? $size : 'small';
?>


<div class="stat-card <?= $cardSize ?> flex-container">
    <div class="card-content">
        <?php if ($cardSize === 'medium') : ?>
            <h3 class="heading h3"><?= $heading ?? '' ?></h3>
        <?php elseif ($cardSize === 'large') : ?>
            <h2 class="heading h2"><?= $heading ?? '' ?></h2>
        <?php endif; ?>

        <div class="number"><?= $number ?? '' ?></div>
        <div class="title"><?= $title ?? '' ?></div>
        <div class="description"><?= $description ?? '' ?></div>
    </div>
</div>
