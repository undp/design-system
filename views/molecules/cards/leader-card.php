<?php
use helpers\Svg;
use helpers\View;

$modalId = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $name ?? '')));
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
                <?php
                    View::render('molecules/text-links/cta-text-link', [
                        'tagName' => 'div',
                        'arrowClass' => 'arrow-2',
                        'text' => $cta ?? 'Read More'
                    ]);
                ?>
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
