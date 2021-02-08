<?php
$options = $options ?? [];
?>

<div id="<?= $id ?>" class="multi-select <?= $class ?? '' ?>" data-multi-select <?= $actionListener ?? '' ?>>
    <button class="select-control" aria-label="<?= $ariaLabel ?>">
        <?= $title ?> <span></span>
    </button>
    <div class="options" data-type="<?= $dataType ?>">
        <?php
        // Options can either be added with an array here or via JS
        // (see: render-data/global/multi-selects file)
        foreach($options as $option):
        ?>
        <label class="checkbox-item">
            <input type="checkbox" value="<?= $option['value'] ?>">
            <span class="checkmark"></span>
            <span class="name"><?= $option['name'] ?></span>
        </label>
        <?php endforeach; ?>
    </div>
</div>
