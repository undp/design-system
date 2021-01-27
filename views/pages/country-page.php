<?php

use helpers\Svg;
use helpers\View;

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - The SDGS']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main-justify') ?>

<div class="country-page">
    <!--Country hero 3-->
    <?php View::render('organisms/hero/country-hero-3', [
        'subtitle' => 'Sierra Leone',
        'title' => 'Sierra Leone Youth Minister Launches 2020 Social Good Summit',
        'description' => 'As we ‘come to our feet’ to respond to public health issues at the borders, key 
                          messages on Covid-19 should be reinforced, border security enhanced…',
        'imageUrl' => '../../../assets/images/placeholder/hero/country-hero-img.jpg'
    ]) ?>

    <?php View::render('organisms/article-cards/local-featured-stories'); ?>

    <?php View::render('organisms/country-page/title-text'); ?>

    <?php View::render('organisms/content-cards/country-page-content-cards'); ?>
</div>
<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
