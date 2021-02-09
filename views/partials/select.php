<?php
$options = isset($options) ? $options : []
?>

<div class="select-box <?= $additionalClasses ?? '' ?>" data-select>
    <button aria-haspopup="listbox"
            aria-label="<?= $placeholder ?>"
            id="exp_button" class="selected" data-select-open>
        <?= $placeholder ?>
    </button>
    <ul tabindex="-1" role="listbox" aria-labelledby="exp_button"
        class="options-container" data-select-options>
        <?php foreach ($options as $option) : ?>
            <li id="<?= $option['id'] ?>" class="option" role="option" data-value="<?= $option['value'] ?>">
                <?= $option['label'] ?>
            </li>
        <?php endforeach; ?>
    </ul>
</div>