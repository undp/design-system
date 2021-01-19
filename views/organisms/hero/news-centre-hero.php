<?php
use helpers\Svg;
use helpers\View;
?>

<section class="hero news-centre-hero">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-3 large-offset-1">
                <div class="breadcrumb">Home / Press Centre</div>
                <div class="heading h3 subtitle scroll-track left-right delay-1"><?= $subtitle ?? '' ?></div>
                <div class="heading h2 title scroll-track left-right delay-1"><?= $title ?? '' ?></div>
                <div class="hero-link">
                    <div class="heading h3">Media Enquiries</div>
                    <a class="text-link arrow-2" href="#">
                        helen.mayelle@undp.org
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>
                </div>
            </div>
            <div class="cell large-9">

            </div>
        </div>
    </div>
</section>
