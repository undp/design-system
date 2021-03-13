<?php
use helpers\Svg;
use helpers\View;
?>
<!-- Page Headers -->
<?php View::render('layout/header') ?>

<body>

<!--special tags to get extenal SVG from JS-->
<span class="hide" data-arrow-external>
    <?php Svg::render('btn-arrow-external', false, 'External link', 'assets/images/arrows/')?>
</span>

<span class="hide" data-arrow-right>
    <?php Svg::render('btn-arrow-red', false, 'Arrow right', 'assets/images/arrows/')?>
</span>

<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="homepage">
    <?php
        View::render('organisms/hero/global-hero-1', [
            'title' => 'Emerging</br>stronger</br>and better',
            'subtitle' => 'Twelve months, twelve lessons from the pandemic',
            'breadcrumbLinks' => [['name' => 'Lorem Ipsum', 'link' => '#']],
            'videoUrl' => '/assets/others/emerging-hero-animation.mp4',
            'mobileVideoUrl' => '/assets/others/emerging-hero-animation.mp4',
        ]);
    ?>
    <?php View::render('organisms/article-cards/featured-stories') ?>
    <?php View::render('organisms/homepage/our-mission') ?>
    <?php View::render('organisms/homepage/our-expertise') ?>
    <?php
        View::render('organisms/homepage/trusted-partnerships', [
            'classes' => 'show-for-small-only',
            'trackScroll' => true
        ])
    ?>
    <?php View::render('organisms/homepage/global-impact') ?>
    <?php View::render('organisms/carousel/publications') ?>
    <?php View::render('organisms/article-cards/recent-news') ?>
    <?php View::render('organisms/homepage/twitter-feed') ?>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
