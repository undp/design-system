<?php $imagePath = '/assets/images/placeholder/galleries' ?>

<section class="parallax-gallery">
    <div class="grid-container grid-x">

        <div class="cell gs--parallax-container scroll-track-center">
            <div class="grid-x grid-margin-x">

                <div class="cell scroll-track left-right delay-2 hide-for-medium">
                    <h3 class="heading h3">UNDP Hope</h3>
                </div>

                <div class="gallery-text-content with-background cell medium-6">
                    <div class="track left-right delay-4">
                        <h3 class="heading h3 show-for-medium">UNDP Hope</h3>

                        <p class="copy">
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

                <div class="gallery-container cell medium-6 overflow-hidden scroll-track opacity-only delay-2">
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
</section>
