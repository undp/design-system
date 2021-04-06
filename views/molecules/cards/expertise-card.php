<?php

use helpers\View;

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
            <?php
                View::render('molecules/text-links/cta-text-link', [
                    'textClass' => '',
                    'text' => 'Read More'
                ]);
            ?>
        </div>
    </a>
</article>
