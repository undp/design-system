

<div class="image-per-row-images">
    <div class="gallery-images grid-x grid-margin-x <?= $invertImageAlignment ? 'invert-alignment' : '' ?>">
        <?php foreach($images as $image) : ?>
            <div class="cell overflow-hidden">
                <div class="scroll-track left-right delay-1">
                    <img class="<?= $image['imgClass'] ?? '' ?>" src="<?= $image['path'] ?? '' ?>" alt="">
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
