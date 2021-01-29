<?php
use helpers\Svg;
use helpers\View;
?>

<section class="news-centre-hero">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-3 large-offset-1 news-hero-container">
                <div class="breadcrumb"><?php View::render('partials/breadcrumb', [
                        'links' => $breadcrumbLinks ?? ''
                    ]) ?>
                </div>

                <div class="heading h2 title scroll-track left-right delay-1">
                    <div class="heading h3 subtitle scroll-track left-right delay-1"><?= $subtitle ?? '' ?></div>
                    <?= $title ?? '' ?>
                </div>

                <div class="hero-link scroll-track left-right delay-1">
                    <div class="link-title heading h3">Media Enquiries</div>
                    <a class="text-link arrow-1" href="#">
                        <span class="text">helen.mayelle@undp.org</span>
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>
                    <a class="text-link arrow-1" href="#">
                        <span class="text">jane.peterson@undp.org</span>
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>
                    <a class="text-link arrow-1" href="#">
                        <span class="text">allen.Fitzgerald@undp.org</span>
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>
                    <a class="text-link arrow-1" href="#">
                        <span class="text">helen.mayelle@undp.org</span>
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>
                    <a class="text-link arrow-1" href="#">
                        <span class="text">helen.mayelle@undp.org</span>
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>

                </div>
            </div>

            <div class="cell large-8 image-container">
                <img src="<?= $imageUrl ?? '' ?>" alt="">
            </div>

            <div class="news-hero-container-mobile">
                <div class="hero-link mobile scroll-track left-right delay-1">
                    <div class="link-title heading h3">Media Enquiries</div>

                    <a class="text-link arrow-2" href="#">
                        <span class="text">helen.mayelle@undp.org</span>
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>
                    <a class="text-link arrow-2" href="#">
                        <span class="text">helen.mayelle@undp.org</span>
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>
                    <a class="text-link arrow-2" href="#">
                        <span class="text">helen.mayelle@undp.org</span>
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>
                    <a class="text-link arrow-2" href="#">
                        <span class="text">helen.mayelle@undp.org</span>
                        <?php Svg::render('btn-arrow-red', true, 'Explore', 'assets/images/arrows/')?>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
