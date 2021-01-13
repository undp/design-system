<a href="<?= $link ?? '#'?>" target="_blank" class="sdg-card <?= $class ?>" data-color="<?= $class ?? '' ?>" data-url="<?= $urlData ?? ''?>">
    <span class="title scroll-track left-right delay-2"><?= $title ?></span>
    <span class="flex-container align-center hover-image">
        <img src="<?= $image ?>" alt="<?= $imageAlt ?>">
        <span class="gradient"></span>
    </span>
</a>
