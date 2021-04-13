
<?php
use helpers\Svg;
use helpers\View;
$imagePath = '/assets/images/placeholder'
?>


<div class="triple-column-gallery">
    <div class="overflow-hidden">
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

    <div class="show-for-small-only overflow-hidden image-caption accordion">
        <button type="button" class="accordion-trigger">
            <div class="grid-x scroll-track left-right delay-2">
                <div class="cell small-3 flex-container">
                    <span class="arrow-down">
                        <?php Svg::render('icon-arrow-down-red') ?>
                    </span>
                </div>

                <div class="cell small-9">
                    <ul class="caption-list">
                        <li class="caption">
                            <p class="medium-copy">
                                On average, UNDP supports an election somewhere in the world every two weeks.
                                <br><br>
                                <span>
                                    UNDP Taiwan: <strong>Jason Smith</strong>
                                </span>
                            </p>
                        </li>
                        <li class="caption">
                            <p class="medium-copy">
                                On average, UNDP supports an election somewhere in the world every two weeks.
                                <br><br>
                                <span>
                                    UNDP Taiwan: <strong>Jason Smith</strong>
                                </span>
                            </p>
                        </li>
                        <li class="caption">
                            <p class="medium-copy">
                                On average, UNDP supports an election somewhere in the world every two weeks.
                                <br><br>
                                <span>
                                    UNDP Taiwan: <strong>Jason Smith</strong>
                                </span>
                            </p>
                        </li>
                        <li class="caption">
                            <p class="medium-copy">
                                On average, UNDP supports an election somewhere in the world every two weeks.
                                <br><br>
                                <span>
                                    UNDP Taiwan: <strong>Jason Smith</strong>
                                </span>
                            </p>
                        </li>
                        <li class="caption">
                            <p class="medium-copy">
                                On average, UNDP supports an election somewhere in the world every two weeks.
                                <br><br>
                                <span>
                                    UNDP Taiwan: <strong>Jason Smith</strong>
                                </span>
                            </p>
                        </li>
                        <li class="caption">
                            <p class="medium-copy">
                                On average, UNDP supports an election somewhere in the world every two weeks.
                                <br><br>
                                <span>
                                    UNDP Taiwan: <strong>Jason Smith</strong>
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </button>
    </div>
</div>

