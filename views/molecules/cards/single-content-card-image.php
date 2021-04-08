<?php use helpers\View; ?>


<a href="<?= $link ?? '#' ?>">
    <div class="single-content-card-image">
        <div class="card-content">
            <div class="tag">
                <?= $tag ?>
            </div>
            <div class="image" style="background-image: url(<?= $image ?>)"></div>
            <div class="title">
                <h4 class="heading h5">
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
