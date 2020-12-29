<div class="multi-select <?= $class ?>" data-multi-select>
    <button class="select-control" aria-label="<?= $ariaLabel ?>" data-opening-action data-select-control>
        <?= $title ?> <span></span>
    </button>
    <div class="options" data-options data-type="<?= $dataType ?>">
        <?php for ($i = 0; $i < 4; $i++) { ?>
            <label class="checkbox-item radio">
                <input type="radio" value="" name="input-radio">
                <span class="checkmark"></span>
                <span class="name">List item <?= $i + 1?></span>
            </label>
        <?php } ?>
    </div>
</div>