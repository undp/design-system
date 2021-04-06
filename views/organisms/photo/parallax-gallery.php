<?php
use helpers\View;

$imagePath = '/assets/images/placeholder/galleries';
$invertBackgrounds = isset($invertBackgrounds) && $invertBackgrounds;
?>

<section class="parallax-gallery <?= $invertBackgrounds ? 'inverted-background' : '' ?>">
    <div class="grid-container grid-x position-relative">

        <div class="cell gs--parallax-container">
            <div class="grid-x grid-margin-x">

                <div class="cell scroll-track left-right delay-2 hide-for-medium">
                    <h3 class="heading h3">UNDP Hope</h3>
                </div>

                <div class="gallery-text-content cell medium-6 <?= $invertBackgrounds ? '' : 'with-background' ?>">
                    <div class="scroll-track left-right delay-3">
                        <h3 class="heading h3 show-for-medium">UNDP Hope</h3>

                        <p class="copy">
                            UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty,
                            and the reduction of inequalities and exclusion. We help countries to develop policies, leadership
                            skills, partnering abilities, institutional capabilities and build resilience in order to sustain
                            development results.
                        </p>

                        <div class="cta">
                            <?php
                                View::render('molecules/text-links/cta-text-link', [
                                    'text' => 'Read More',
                                    'arrowClass' => 'arrow-2'
                                ]);
                            ?>
                        </div>
                    </div>
                </div>

                <div class="cell medium-6 scroll-track opacity-only delay-2 <?= $invertBackgrounds ? 'gallery-container' : '' ?>">

                    <div class="overflow-hidden">
                        <div class="gallery-images grid-x grid-margin-x">
                            <div class="cell small-6 gs--parallax-column">
                                <img src="<?= "$imagePath/gallery-parallax01@2x.jpg" ?>" alt="">
                                <img src="<?= "$imagePath/gallery-parallax02@2x.jpg" ?>" alt="">
                            </div>
                            <div class="cell small-6 gs--parallax-column">
                                <img src="<?= "$imagePath/gallery-parallax03@2x.jpg" ?>" alt="">
                                <img src="<?= "$imagePath/gallery-image-tall@2x.jpg" ?>" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
