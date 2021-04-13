<?php
use helpers\Svg;
use helpers\View;
?>

<section class="publication">
    <div class="grid-x publication-content-container">
        <div class="cell small-7 medium-4 flex-container align-justify align-center overflow-hidden">
            <div class="publication-image">
                <img class="image lazy" data-src="<?= $image ?>">
            </div>
        </div>
        <div class="cell small-offset-1 small-9 medium-offset-1 medium-6 flex-container align-center-middle">
            <article class="publication-content">
                <tag class="tag">
                    <?= $tag ?? '' ?>
                </tag>
                <h3 class="heading h3">
                    <?= $title ?? '' ?>
                </h3>
                <p class="big-copy">
                    <?= $description ?? '' ?>
                </p>
                <div class="controls">
                    <div class="cta">
                        <?php
                            View::render('molecules/buttons/cta', [
                                'text' => $cta ?? 'Read More',
                                'classes' => 'hide-for-small-only'
                            ])
                        ?>

                        <?php
                            View::render('molecules/text-links/cta-text-link', [
                                'text' => $cta ?? 'Read More',
                                'classes' => 'show-for-small-only'
                            ])
                        ?>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>
