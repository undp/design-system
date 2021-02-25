<?php
use helpers\View;
$imagePath = '/assets/images/placeholder/galleries';
?>


<section class="three-image-gallery">
    <div class="grid-container grid-x">

        <div class="cell">
            <div class="grid-x grid-margin-x">

                <div class="cell scroll-track left-right delay-1 hide-for-medium">
                    <h3 class="heading h3">UNDP Hope</h3>
                </div>

                <?php View::render('molecules/photo/gallery-text-content', ['hasBackground' => true]); ?>

                <div class="cell medium-6 overflow-hidden">
                    <div class="gallery-images grid-x grid-margin-x">
                        <div class="cell small-6 overflow-hidden">
                            <div class="scroll-track left-right delay-1 height-full">
                                <img class="wide height-full" src="<?= "$imagePath/gallery-parallax02@2x.jpg" ?>" alt="">
                            </div>
                        </div>
                        <div class="cell small-6 overflow-hidden">
                            <div class="scroll-track left-right delay-1 height-full">
                                <img class="wide height-full" src="<?= "$imagePath/gallery-image-tall@2x.jpg" ?>" alt="">
                            </div>
                        </div>
                        <div class="cell small-11 small-offset-1 overflow-hidden">
                            <div class="scroll-track left-right delay-1 height-full">
                                <img class="wide height-full" src="<?= "$imagePath/gallery-image-wide@2x.jpg" ?>" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
