<section class="sdg-deep-dive-hero">
    <div class="grid-x">
        <div class="cell">
            <div class="title">
                <div class="title-one heading h3">Goal <span><?= $number ?? '' ?></span></div>
                <h2 class="title-two heading h2"><?= $title ?? '' ?></h2>
            </div>
        </div>
    </div>

    <div class="grid-x description-container">
        <div class="cell">
            <div class="grid-x grid-padding-x">
                <div class="cell medium-6 large-8 description">
                    <?php foreach ($contentParagraphs as $i => $paragraph) : ?>
                        <p class="big-copy">
                            <?= $paragraph ?>
                        </p>
                        <?= $i + 1 < count($contentParagraphs) ? '<br>' : '' ?>
                    <?php endforeach; ?>
                </div>
                <div class="cell medium-6 large-4 description-image">
                    <img src="<?= $imageUrl ?>" alt="<?= $imageAlt ?>">
                </div>
            </div>
        </div>
    </div>
</section>
