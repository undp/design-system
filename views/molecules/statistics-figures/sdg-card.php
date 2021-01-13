<button class="sdg-card  <?= $class ?>" data-color="<?= $class ?? '' ?>" data-url="<?= $urlData ?? ''?>">
    <span class="number scroll-track left-right delay-2"><?= $number ?></span>
    <span class="title scroll-track left-right delay-2"><?= $title ?></span>
    <span class="hover-image">
        <img src="<?= $image ?>" alt="<?= $imageAlt ?>">
        <span class="gradient"></span>
    </span>
</button>
