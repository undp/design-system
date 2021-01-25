

<div class="select-box <?= $additionalClasses ?? '' ?>" data-select>
    <div class="options-container" data-select-options>
        <?php foreach ($options as $option) : ?>
            <div class="option">
                <input type="radio"
                       class="radio"
                       name="<?= $name ?>"
                       id="<?= $option['id'] ?>">

                <label for="<?= $option['id'] ?>"><?= $option['label'] ?></label>
            </div>
        <?php endforeach; ?>
    </div>
    <div class="selected" data-select-open>
        <?= $placeholder ?>
    </div>
</div>
