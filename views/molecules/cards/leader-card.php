<?php
use helpers\Svg;
use helpers\View;
$modalId = bin2hex($name ?? '');
?>

<div class="leader-card">
    <div class="content-wrapper grid-x" data-modal-trigger="<?= $modalId ?>">
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
            <img src="<?= $image ?? '' ?>" alt="Photo of <?= $name ?? '' ?>">
        </div>
    </div>

    <?php
        View::render('organisms/modals/leader-modal', [
            'name' => $name,
            'image' => $image,
            'titles' => $titles,
            'modalId' => $modalId
        ])
    ?>
</div>
