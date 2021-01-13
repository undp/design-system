<div class="single-content-card-image">
    <div class="card-content">
        <div class="tag">
            <?= $tag ?>
        </div>
        <div class="image" style="background-image: url(<?= $image ?>)">
            <div class="gradient"></div>
        </div>
        <div class="title">
            <h4 class="heading h5">
                <?= $title ?>
            </h4>
        </div>
        <div class="cta">
            <div class="text-link arrow-2">
                <span><?= $cta ?></span>
                <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
            </div>
        </div>
    </div>
</div>