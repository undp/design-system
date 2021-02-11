<?php
use helpers\Svg;
$useLabelAsPlaceholder = $useLabelAsPlaceholder ?? false;
?>
<div class="search-input <?= $additionalClass ?? '' ?>">
    <div class="icon">
        <?php Svg::render('icon-search', true, 'Search Icon') ?>
    </div>
    <label class="show-for-sr" for="<?= $id ?? '' ?>"><?= $label ?? '' ?></label>
    <input class="input-search"
           type="search" id="<?= $id ?? '' ?>" name="<?= $id ?? '' ?>"
           placeholder="<?= $useLabelAsPlaceholder ? $label : '' ?>" <?= $actionListener ?? '' ?> >
</div>