<?php
use helpers\Svg;
use helpers\View;
$modalId = bin2hex($name ?? '');
?>

<div class="leader-card">
    <div class="content-wrapper flex-container" data-modal-trigger="<?= $modalId ?>">
        <div class="leader-info flex-container flex-dir-column">
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
        <div class="leader-photo">
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
