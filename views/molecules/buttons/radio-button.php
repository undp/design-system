
<label class="checkbox-item radio <?= $classes ?? '' ?> <?= ($label ?? false) ? '' : 'displays-inline' ?>">
    <input type="radio" value="<?= $value ?? '' ?>" name="<?= $name ?? '' ?>">
    <span class="checkmark"></span>
    <span class="name"><?= $label ?? '' ?></span>
</label>
