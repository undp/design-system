<button
    data-slug="<?= $slug ?? '' ?>"
    data-title="<?= $title ?? '' ?>"
    data-color="<?= $class ?? '' ?>"
    data-number="<?= $number ?? '' ?>"
    class="sdg-card sgd-animate <?= $class ?>" >

    <span class="number track left-right delay-<?= $delay ?? 1 ?>"><?= $number ?? '' ?></span>
    <span class="title track left-right delay-<?= $delay ?? 1 ?>"><?= $title ?? '' ?></span>
    <?php if (isset($image)): ?>
        <span class="hover-image" style="background-image: url('<?= $image ?> ')">
            <span class="gradient"></span>
        </span>
    <?php endif ?>
</button>
