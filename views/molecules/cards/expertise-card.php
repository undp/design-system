<?php

use helpers\Svg;

?>
<article class="expertise-card">
    <a href="#">
        <div class="text">
            <h3 class="heading h3">
                <?= $title ?? '' ?>
            </h3>
            <p class="heading medium-copy">
                <?= $description ?? '' ?>
            </p>
        </div>
        <div class="cta-container">
            <span class="text-link arrow-1">
                <span><?= $cta ?? 'Read more' ?></span>
                <?php Svg::render('btn-arrow-red', true, $cta ?? 'Read more', 'assets/images/arrows/')?>
            </span>
        </div>
    </a>
</article>
