<?php
use helpers\View;
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
            $hasSubtree = $option['sub'] !== null;
            $optionId = substr(md5(rand()), 0, 5);
        ?>
        <li role="option" id="<?= $optionId ?>-option"
            <?= $hasSubtree? 'aria-expanded="false" aria-controls="'.$optionId.'-subtree" class="has-submenu"' : '' ?>>
            <?php if($hasSubtree): ?>
                <button class="caret" aria-expanded="false">Open submenu for <?= $option['name'] ?></button>
            <?php endif; ?>

            <?php
                View::render('molecules/buttons/radio-button', [
                    'value' => $option['value'],
                    'name' => $option['value'],
                    'label' => $option['name'],
                ]);
            ?>

            <?php if($hasSubtree): ?>
                <ul id="<?= $optionId ?>-subtree" class="sub-menu" role="group" aria-labelledby="<?= $optionId ?>-option">
                    <?php foreach($option['sub'] as $subOption): ?>
                    <li role="option">
                        <?php
                            View::render('molecules/buttons/radio-button', [
                                'value' => $subOption['value'],
                                'name' => $subOption['value'],
                                'label' => $subOption['name'],
                            ]);
                        ?>
                    </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </li>
        <?php endforeach; ?>
    </ul>
</div>
