<a href="<?= $link ?? '#' ?>">
    <div class="photo-cta-card">
        <div class="card-content">
            <div class="image">
                <div class="gradient"></div>
                <img src="<?= $image ?>" alt="">
                <div class="description">
                    <p class="medium-copy">
                        <?= $description ?>
                    </p>
                </div>
            </div>
            <div class="cta">
                <div class="text-link arrow-2">
                    <span><?= $cta ?></span>
                    <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
                </div>
            </div>
        </div>
    </div>
</a>
