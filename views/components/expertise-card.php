<div class="expertise-card">
    <div class="text">
        <h3 class="heading h3">
            <?= $title ?? '' ?>
        </h3>
        <p class="heading medium-copy">
            <?= $description ?? '' ?>
        </p>
    </div>
    <div class="cta-container">
        <a class="text-link arrow-1" href="#">
            <?= $cta ?? 'Read more' ?>
            <?=  file_get_contents("assets/images/arrows/btn-arrow-red.svg");  ?>
        </a>
    </div>
</div>