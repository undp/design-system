<?php use helpers\View; ?>


<a href="<?= $link ?? '#' ?>">
    <div class="single-content-card-body">
        <div class="card-content">
            <div class="tag">
                <?= $tag ?>
            </div>
            <div class="title">
                <h4 class="heading h5">
                    <?= $title ?>
                </h4>
            </div>
            <div class="description">
                <p class="medium-copy">
                    <?= $description ?>
                </p>
            </div>
            <div class="cta">
                <?php
                    View::render('molecules/text-links/cta-text-link', [
                        'text' => $cta,
                        'tagName' => 'div',
                        'arrowClass' => 'arrow-2'
                    ]);
                ?>
            </div>
        </div>
    </div>
</a>
