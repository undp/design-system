<?php $images = isset($images) && is_array($images) ? $images : []; ?>

<section class="article-gallery grid-container">
    <div class="gallery-container">
        <?php foreach ($images as $i => $image) : ?>
            <div class="image-item scroll-track left-right delay-<?= $i+2 ?>">
                <?php if ($image) : ?>
                    <img src="<?= $image ?>" alt="">
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
</section>
