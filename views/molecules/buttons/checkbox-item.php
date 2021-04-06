
<label class="checkbox-item <?= $classes ?? '' ?> <?= ($label ?? false) ? '' : 'displays-inline' ?>">
    <input type="checkbox" value="<?= $value ?? '' ?>" name="<?= $name ?? '' ?>">
    <span class="checkmark"></span>
    <span class="name"><?= $label ?? '' ?></span>
</label>
