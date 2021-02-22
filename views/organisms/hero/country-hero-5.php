<?php use helpers\View;?>

<section class="hero country-hero-5" data-desktop-image="<?= $imageUrl ?? '' ?>"
         data-mobile-image="<?= $imageMobileUrl ?? '' ?>">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell small-9 small-offset-1">
                <?php View::render('partials/breadcrumb', [
                    'links' => $breadcrumbLinks ?? '',
                    'classes' => 'accent-white'
                ]) ?>
                <div class="heading h2 title-text scroll-track left-right delay-1"><?= $title ?? '' ?></div>
            </div>
        </div>
    </div>
</section>
