<div class="featured-publication">
    <div class="publication-text-container">

        <h2 class="heading h2"><?= $title ?></h2>
        <div class="tag tag-text"><?= $publicationDate ?></div>
        <div class="medium-copy publication-body"><?= $descriptionText ?></div>

        <?php if (isset($tags) && is_array($tags)) : ?>
            <div class="tags-container flex-container">
                <div class="tag tags-label show-for-large">Categories</div>

                <div class="flex-container flex-dir-row">
                    <?php foreach ($tags as $idx => $tag) : ?>
                        <div class="tag-item">
                            <a href="<?= $tag['link'] ?? '#' ?> " class="tag-link"><?= $tag['text'] ?? '' ?></a><?= $idx + 1 < count($tags) ? ',' : '' ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>
