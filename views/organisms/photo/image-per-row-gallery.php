<?php
$images = isset($images) && is_array($images) ? $images : [];
$invertImageAlignment = isset($image['invertImageAlignment']) ? $image['invertImageAlignment'] : false;
?>


<section class="image-per-row-gallery">
    <div class="grid-container grid-x grid-margin-x">

        <div class="cell">
            <div class="grid-x grid-margin-x">

                <div class="cell scroll-track left-right delay-1 hide-for-medium">
                    <h3 class="heading h3">UNDP Hope</h3>
                </div>

                <div class="gallery-text-content with-background cell medium-6">
                    <div class="scroll-track left-right delay-1">
                        <h3 class="heading h3 show-for-medium">UNDP Hope</h3>

                        <p class="medium-copy">
                            UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty,
                            and the reduction of inequalities and exclusion. We help countries to develop policies, leadership
                            skills, partnering abilities, institutional capabilities and build resilience in order to sustain
                            development results.
                        </p>

                        <div class="cta">
                            <a href="#" class="text-link arrow-2">
                                <span>Read More</span>
                                <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="cell medium-6 overflow-hidden">
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
            </div>
        </div>
    </div>
</section>
