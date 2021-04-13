<?php use helpers\View; ?>


<div class="select-radio white <?= $class ?? '' ?>" data-multi-select>
    <button class="select-control" aria-label="<?= $title ?>" data-opening-action>
        <?= $title ?> <span></span>
    </button>
    <div class="options" data-type="<?= $dataType ?? '' ?>">
        <?php for ($i = 0; $i < 4; $i++) : ?>
            <?php
                View::render('molecules/buttons/radio-button', [
                    'value' => 'example-checkbox',
                    'name' => 'input-radio',
                    'label' => 'List item' . ($i + 1),
                ]);
            ?>
        <?php endfor; ?>
    </div>
</div>
