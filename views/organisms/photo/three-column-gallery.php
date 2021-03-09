<?php
use helpers\Svg;
use helpers\View;
$imagePath = '/assets/images/placeholder'
?>


<section class="three-column-gallery">
    <div class="grid-container grid-x">

        <div class="cell">
            <div class="grid-x grid-margin-x">

                <div class="cell scroll-track left-right delay-1 hide-for-medium">
                    <h3 class="heading h3">UNDP Hope</h3>
                </div>

                <div class="gallery-text-content cell medium-4 large-3">
                    <div class="scroll-track left-right delay-1">
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
                                <?= file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg"); ?>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="cell medium-8 large-9 overflow-hidden">
                    <div class="gallery-images grid-x grid-margin-x">
                        <div class="cell small-4 overflow-hidden">
                            <?php
                                View::render('molecules/photo/photo-details-overlay', [
                                    'classes' => 'scroll-track left-right delay-1',
                                    'image' => "$imagePath/cards/photo-cta-image03.png"
                                ]);

                                View::render('molecules/photo/photo-details-overlay', [
                                    'classes' => 'scroll-track left-right delay-4',
                                    'image' => "$imagePath/cards/photo-cta-image01.png"
                                ]);
                            ?>
                        </div>
                        <div class="cell small-4 overflow-hidden">
                            <?php
                                View::render('molecules/photo/photo-details-overlay', [
                                    'classes' => 'scroll-track left-right delay-2',
                                    'image' => "$imagePath/galleries/gallery-parallax01@2x.jpg"
                                ]);

                                View::render('molecules/photo/photo-details-overlay', [
                                    'classes' => 'scroll-track left-right delay-5',
                                    'image' => "$imagePath/galleries/gallery-parallax02@2x.jpg"
                                ]);
                            ?>
                        </div>
                        <div class="cell small-4 overflow-hidden">
                            <?php
                                View::render('molecules/photo/photo-details-overlay', [
                                    'classes' => 'scroll-track left-right delay-3',
                                    'image' => "$imagePath/galleries/gallery-parallax03@2x.jpg"
                                ]);

                                View::render('molecules/photo/photo-details-overlay', [
                                    'classes' => 'scroll-track left-right delay-6',
                                    'image' => "$imagePath/galleries/gallery-image-tall@2x.jpg"
                                ]);
                            ?>
                        </div>
                    </div>
                </div>

                <div class="cell show-for-small-only overflow-hidden image-caption accordion">
                    <button type="button" class="accordion-trigger">
                        <div class="grid-x scroll-track left-right delay-2">
                            <div class="cell small-3 flex-container">
                                <span class="arrow-down">
                                    <?php Svg::render('icon-arrow-down-red') ?>
                                </span>
                            </div>

                            <div class="cell small-9">
                                <ul class="caption-list">
                                    <li class="medium-copy caption">
                                        On average, UNDP supports an election somewhere in the world every two weeks.
                                        <br><br>
                                        <span>
                                            UNDP Taiwan: <strong>Jason Smith</strong>
                                        </span>
                                    </li>
                                    <li class="medium-copy caption">
                                        On average, UNDP supports an election somewhere in the world every two weeks.
                                        <br><br>
                                        <span>
                                            UNDP Taiwan: <strong>Jason Smith</strong>
                                        </span>
                                    </li>
                                    <li class="medium-copy caption">
                                        On average, UNDP supports an election somewhere in the world every two weeks.
                                        <br><br>
                                        <span>
                                            UNDP Taiwan: <strong>Jason Smith</strong>
                                        </span>
                                    </li>
                                    <li class="medium-copy caption">
                                        On average, UNDP supports an election somewhere in the world every two weeks.
                                        <br><br>
                                        <span>
                                            UNDP Taiwan: <strong>Jason Smith</strong>
                                        </span>
                                    </li>
                                    <li class="medium-copy caption">
                                        On average, UNDP supports an election somewhere in the world every two weeks.
                                        <br><br>
                                        <span>
                                            UNDP Taiwan: <strong>Jason Smith</strong>
                                        </span>
                                    </li>
                                    <li class="medium-copy caption">
                                        On average, UNDP supports an election somewhere in the world every two weeks.
                                        <br><br>
                                        <span>
                                            UNDP Taiwan: <strong>Jason Smith</strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    </div>
</section>
