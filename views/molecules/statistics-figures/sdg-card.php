<button class="sdg-card sgd-animate <?= $class ?>" data-number="<?= $number ?? '' ?>" data-title="<?= $title ?? '' ?>" data-color="<?= $class ?? '' ?>">
    <span class="number track left-right delay-<?= $delay ?? 1 ?>"><?= $number ?? '' ?></span>
    <span class="title track left-right delay-<?= $delay ?? 1 ?>"><?= $title ?? '' ?></span>
    <?php if (isset($image)): ?>
        <span class="hover-image" style="background-image: url('<?= $image ?> ')">
            <span class="gradient"></span>
        </span>
    <?php endif ?>
</button>
