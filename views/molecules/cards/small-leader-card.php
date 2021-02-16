<?php use helpers\Svg; ?>

<div class="small-leader-card">
    <a href="<?= $link ?? '' ?>" class="content-wrapper">
        <img src="<?= $image ?? '' ?>" alt="Photo of <?= $name ?? '' ?>">

        <div class="leader-info flex-container flex-dir-column">
            <h5 class="heading h5">
                <?= $name ?? '' ?>
            </h5>
            <div class="leader-titles">
                <?php foreach($titles as $title) : ?>
                    <p class="medium-copy">
                        <?= $title ?>
                    </p>
                <?php endforeach; ?>
            </div>

            <div class="cta-container">
                <div class="text-link arrow-2">
                    <span>Read more</span>
                    <?php Svg::render('arrows/btn-arrow-red-secondary')?>
                </div>
            </div>
        </div>
    </a>
</div>
