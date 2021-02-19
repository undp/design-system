<?php
$sizes = ['small', 'medium', 'large'];
$cardSize = isset($size) && in_array($size, $sizes) ? $size : 'small';
?>


<div class="stat-card <?= $cardSize ?> flex-container">
    <div class="card-content">
        <?php if ($cardSize !== 'small') : ?>
            <h3 class="heading h3"><?= $heading ?? '' ?></h3>
        <?php endif; ?>

        <div class="number"><?= $number ?? '' ?></div>
        <div class="title"><?= $title ?? '' ?></div>
        <div class="description"><?= $description ?? '' ?></div>
    </div>
</div>
