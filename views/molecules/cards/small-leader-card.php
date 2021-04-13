<?php
use helpers\Svg;
use helpers\View;

$modalId = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $name ?? '')));
?>


<div class="small-leader-card">
    <div class="content-wrapper" data-modal-trigger="<?= $modalId ?>">

        <div class="leader-photo hide-for-small-only" style="background-image: url('<?= $image ?? '' ?>')"></div>
        <img class="show-for-small-only" src="<?= $image ?? '' ?>" alt="<?= $name ?? '' ?> Photo">

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
                <?php
                    View::render('molecules/text-links/cta-text-link', [
                        'text' => 'Read More',
                        'tagName' => 'div',
                        'arrowClass' => 'arrow-2'
                    ]);
                ?>
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
