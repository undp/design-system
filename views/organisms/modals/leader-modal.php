<?php
use helpers\View;
?>


<div id="<?= $modalId ?>" class="modal leader-modal" data-modal>
    <div class="modal-content">
        <div class="modal-heading" data-ie-sticky>
            <?php
                View::render('molecules/buttons/close-out', [
                    'classes' => 'btn-close',
                    'attrs' => 'data-modal-close'
                ]);
            ?>
        </div>
        <div class="content-wrapper flex-container flex-dir-column medium-flex-dir-row">
            <div class="leader-photo">
                <img src="<?= $image ?? '' ?>" alt="Mourad Wahba Photo">
            </div>

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
                <p class="leader-bio small-copy">
                    <?= $bio ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ?>
                </p>
            </div>
        </div>
    </div>
</div>
