<?php
use helpers\View;
$imagePath = '/assets/images/placeholder'
?>


<section class="three-column-gallery">
    <div class="grid-container grid-x grid-margin-x">

        <div class="cell scroll-track-center">
            <div class="grid-x grid-margin-x">

                <div class="cell scroll-track left-right delay-2 hide-for-medium">
                    <h3 class="heading h3">UNDP Hope</h3>
                </div>

                <div class="gallery-text-content cell medium-4">
                    <div class="track left-right delay-4">
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

                <div class="cell medium-8 overflow-hidden scroll-track opacity-only delay-2">
                    <div class="gallery-images grid-x grid-margin-x">
                        <div class="cell small-4">
                            <?php
                                View::render('molecules/photo/photo-details-overlay', [
                                    'image' => "$imagePath/cards/photo-cta-image03.png"
                                ]);

                                View::render('molecules/photo/photo-details-overlay', [
                                    'image' => "$imagePath/cards/photo-cta-image01.png"
                                ]);
                            ?>
                        </div>
                        <div class="cell small-4">
                            <?php
                                View::render('molecules/photo/photo-details-overlay', [
                                    'image' => "$imagePath/galleries/gallery-parallax01@2x.jpg"
                                ]);

                                View::render('molecules/photo/photo-details-overlay', [
                                    'image' => "$imagePath/galleries/gallery-parallax02@2x.jpg"
                                ]);
                            ?>
                        </div>
                        <div class="cell small-4">
                            <?php
                                View::render('molecules/photo/photo-details-overlay', [
                                    'image' => "$imagePath/galleries/gallery-parallax03@2x.jpg"
                                ]);

                                View::render('molecules/photo/photo-details-overlay', [
                                    'image' => "$imagePath/galleries/gallery-parallax04@2x.jpg"
                                ]);
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
