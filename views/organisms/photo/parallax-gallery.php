<?php
use helpers\View;

$imagePath = '/assets/images/placeholder/galleries';
$invertBackgrounds = isset($invertBackgrounds) && $invertBackgrounds;
?>

<section class="parallax-gallery <?= $invertBackgrounds ? 'inverted-background' : '' ?>">
    <div class="grid-container position-relative">

        <div class="content-wrapper">
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

                    <?php View::render('molecules/galleries/double-column-gallery'); ?>
                </div>
            </div>
        </div>
    </div>
</section>
