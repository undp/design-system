<?php
use helpers\Svg;
use helpers\View;
$modalId = bin2hex($name ?? '');
?>

<div class="small-leader-card">
    <div class="content-wrapper" data-modal-trigger="<?= $modalId ?>">

        <div class="leader-photo" style="background-image: url(<?= $image ?? '' ?>)"></div>

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
