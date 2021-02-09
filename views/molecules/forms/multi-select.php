<?php
$options = $options ?? [];
?>

<div id="<?= $id ?>" class="multi-select <?= $class ?? '' ?>" data-multi-select <?= $actionListener ?? '' ?>>
    <button class="select-control" aria-label="<?= $title ?>" aria-expanded="false">
        <?= $title ?> <span></span>
    </button>
    <ul class="options" data-type="<?= $dataType ?>" role="listbox" aria-multiselectable="true">
        <?php
        // Options can either be added with an array here or via JS
        // (see: render-data/global/multi-selects file)
        foreach($options as $option):
        ?>
        <li role="option">
            <label class="checkbox-item">
                <input type="checkbox" value="<?= $option['value'] ?>">
                <span class="checkmark"></span>
                <span class="name"><?= $option['name'] ?></span>
            </label>
        </li>
        <?php endforeach; ?>
    </ul>
</div>
