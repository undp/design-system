<?php
use helpers\Svg;
use helpers\View;
?>
<!-- Page Headers -->
<?php View::render('partials/header') ?>

<body>

<!--special tag to get extenal SVG from JS-->
<span class="hide" data-arrow-external>
    <?php Svg::render('btn-arrow-external', false, 'External link', 'assets/images/arrows/')?>
</span>

<!-- Navigation -->
<?php View::render('partials/navigation/main') ?>


<main>
    <?php View::render('modules/hero') ?>
    <?php View::render('modules/featured-stories') ?>
    <?php View::render('modules/our-mission') ?>
    <?php View::render('modules/our-expertise') ?>
    <?php
        View::render('modules/trusted-partnerships', [
            'classes' => 'show-for-small-only',
            'trackScroll' => true
        ])
    ?>
    <?php View::render('modules/global-impact') ?>
    <?php View::render('modules/publications') ?>
    <?php View::render('modules/recent-news') ?>
    <?php View::render('modules/twitter-feed') ?>
</main>

<!-- Footer -->
<?php View::render('partials/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
