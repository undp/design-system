<?php
use helpers\View;
$imagePath = '/assets/images/placeholder/galleries';
?>


<div class="double-column-gallery">
    <div class="grid-x position-relative gs--parallax-container">
        <div class="gallery-images grid-x grid-margin-x">

            <?php
                View::render('molecules/galleries/single-column-gallery', [
                    'classes' => 'small-6 gs--parallax-column',
                    'image1' => "$imagePath/gallery-parallax01@2x.jpg",
                    'image2' => "$imagePath/gallery-parallax02@2x.jpg",
                ]);
            ?>

            <?php
                View::render('molecules/galleries/single-column-gallery', [
                    'classes' => 'small-6 gs--parallax-column',
                    'image1' => "$imagePath/gallery-parallax03@2x.jpg",
                    'image2' => "$imagePath/gallery-image-tall@2x.jpg",
                ]);
            ?>
        </div>
    </div>
</div>
