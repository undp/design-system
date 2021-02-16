<?php use helpers\Svg; ?>

<div class="leader-card">
    <a href="#" class="content-wrapper grid-x" data-modal-trigger="some">
        <div class="cell medium-8 leader-info flex-container flex-dir-column">
            <h5 class="heading h5">
                <?= $name ?? '' ?>
            </h5>
            <div class="leader-titles">
                <?php foreach ($titles as $title) : ?>
                    <p class="medium-copy">
                        <?= $title ?>
                    </p>
                <?php endforeach; ?>
            </div>

            <div class="cta-container">
                <div class="text-link arrow-2">
                    <span>Read more</span>
                    <?php Svg::render('arrows/btn-arrow-red-secondary') ?>
                </div>
            </div>
        </div>
        <div class="cell medium-4 leader-photo">
            <img src="<?= $image ?? '' ?>" alt="Mourad Wahba Photo">
        </div>
    </a>
</div>

<div id="some" class="modal" data-modal>
    <div class="modal-content">
        <button class="btn-close" data-modal-close>
            <?php Svg::render('icon-close') ?>
        </button>
        <div class="grid-container grid-x">
            <div class="cell medium-8 leader-info flex-container flex-dir-column">
                <h5 class="heading h5">
                    <?= $name ?? '' ?>
                </h5>
                <div class="leader-titles">
                    <?php foreach ($titles as $title) : ?>
                        <p class="medium-copy">
                            <?= $title ?>
                        </p>
                    <?php endforeach; ?>
                </div>

                <div class="cta-container">
                    <div class="text-link arrow-2">
                        <span>Read more</span>
                        <?php Svg::render('arrows/btn-arrow-red-secondary') ?>
                    </div>
                </div>
            </div>
            <div class="cell medium-4 leader-photo">
                <img src="<?= $image ?? '' ?>" alt="Mourad Wahba Photo">
            </div>
        </div>
    </div>
</div>
