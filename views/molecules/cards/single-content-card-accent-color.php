<?php use helpers\View; ?>


<a href="<?= $link ?? '#' ?>">
    <div class="single-content-card-accent-color <?= $color ?? '' ?>">
        <div class="card-content">
            <div class="tag">
                <?= $tag ?>
            </div>
            <div class="title">
                <h4 class="heading h4">
                    <?= $title ?>
                </h4>
            </div>
            <div class="cta">
                <?php if (isset($isExternalLink) && $isExternalLink) : ?>
                    <?php
                        View::render('molecules/text-links/external-link', [
                            'text' => $cta,
                            'tagName' => 'div'
                        ]);
                    ?>
                <?php else : ?>
                    <?php
                        View::render('molecules/text-links/cta-text-link', [
                            'text' => $cta,
                            'tagName' => 'div',
                            'arrowClass' => 'arrow-2'
                        ]);
                    ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</a>
