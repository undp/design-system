<a href="<?= $link ?? '#'?>" target="_blank" class="sdg-card-link sgd-animate <?= $class ?>" data-color="<?= $class ?? '' ?>" data-url="<?= $urlData ?? ''?>">
    <span class="image-container track left-right delay-<?= $delay ?? 1 ?>">
        <img src="<?= $image ?>" alt="<?= $imageAlt ?>">
    </span>
    <span class="title track left-right delay-<?= $delay ?? 1 ?>"><?= $title ?></span>
</a>
