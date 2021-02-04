<?php
$authorTitles = isset($authorTitles) ? $authorTitles : [];
$authorTitles = is_array($authorTitles) ? $authorTitles : [$authorTitles];
?>


<section class="author-bio grid-container scroll-track left-right delay-1">
    <div class="grid-x">

        <div class="cell small-10 small-offset-1">
            <h2 class="heading h2">Author</h2>
        </div>

        <div class="cell large-10 large-offset-1 separator"></div>

        <div class="cell small-10 small-offset-1 large-5 flex-container flex-dir-column large-flex-dir-row">
            <div class="author-image">
                <img src="<?= $authorImage ?>" alt="<?= $authorName ?>">
            </div>

            <div class="author-info">
                <p class="large-copy break-words"><?= $authorName ?></p>

                <div class="author-titles">
                    <?php foreach($authorTitles as $title) : ?>
                        <p class="big-copy"><?= $title ?></p>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <div class="cell small-10 small-offset-1 large-4 flex-container">
            <p class="medium-copy flex-container bio">
                <?= $authorBio ?>
            </p>
        </div>
    </div>
</section>
