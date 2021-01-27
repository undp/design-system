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

    <section class="title-text">
        <div class="grid-container">
            <div class="grid-x grid-margin-x align-center overflow-hidden">
                <hgroup class="cell medium-4 title-container">
                    <h2 class="heading h2 light">What</h2>
                    <h2 class="heading h2 light">We do</h2>
                </hgroup>
                <div class="cell medium-6">
                    <p class="heading h4 light">UNDP has had a presence in Sierra Leone since 1965, working in partnership with the Government of Sierra Leone, development partners, UN agencies, civil society and local communities, contributing to inclusive growth, sustainabily, and efficient democratic governance.</p>
                </div>
            </div>
        </div>
    </section>
</div>
<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
