<?php use helpers\View; ?>


<a href="<?= $link ?? '#' ?>">
    <div class="photo-cta">
        <div class="card-content">
            <div class="image">
                <div class="gradient"></div>
                <img src="<?= $image ?>" alt="">
                <div class="description">
                    <div class="heading h5 card-description-text"><?= $description ?></div>
                </div>
            </div>
            <div class="cta">
                <?php
                    View::render('molecules/text-links/cta-text-link', [
                        'text' => $cta ?? '',
                        'arrowClass' => 'arrow-2'
                    ]);
                ?>
            </div>
        </div>
    </div>
</a>
