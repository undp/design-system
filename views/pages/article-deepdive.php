<?php

use helpers\Svg;
use helpers\View;

$imgPath = '../../../assets/images/placeholder/article-deepdive'

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Sierra Leone - Article']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main-justify') ?>

<div class="article-deepdive">

    <div class="breadcrumb-container grid-container">
        <div class="grid-x grid-padding-x overflow-hidden">

            <div class="cell small-12 large-9 large-offset-1">
                <?php
                View::render('partials/breadcrumb', [
                    'links' => [
                        ['link' => '/', 'name' => 'Home'],
                        ['link' => '/press-centre', 'name' => 'Press Centre'],
                        ['link' => '/press-centre/articles', 'name' => 'Articles'],
                        ['link' => '/press-centre/articles/2020', 'name' => '2020'],
                    ]
                ])
                ?>
            </div>
        </div>
    </div>

    <section class="article-hero grid-container">
        <div class="grid-x grid-padding-x overflow-hidden center-children">

            <div class="article-headings cell small-12 large-9 scroll-track left-right delay-1">
                <h2 class="heading h2">
                    Moyamba and Pujehun Districts score joint UNDP, WFP-supported project 80% for Peacebuilding Project’s Success amidst COVID-19
                </h2>

                <div class="posted-date tag">Posted on November 19, 2020</div>
            </div>

            <div class="featured-image-container cell small-12 scroll-track left-right delay-2">
                <div
                    class="featured-image"
                    style="background-image: url('<?= "$imgPath/article-deepdive-featured-image.png" ?>')">
                </div>
            </div>

            <div class="featured-image-information cell small-9 large-8 scroll-track left-right delay-3">
                <div class="image-alt">
                    <p class="medium-copy">
                        Jitta Kanneh, Mammy Queen of Makpele Chiefdom, at one of the swamp-rice development livelihoods
                        for peace initiative of the PBF project
                    </p>
                </div>
                <div class="image-author">
                    <p class="medium-copy">
                        Photo:<br>
                        UNDP Taiwan/Jason Smith
                    </p>
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
