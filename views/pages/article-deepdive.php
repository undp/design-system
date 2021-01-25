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

    <section class="grid-container scroll-track left-right delay-1">
        <div class="grid-x overflow-hidden">

            <div class="cell small-12 large-9 large-offset-1">
                <?php
                View::render('partials/breadcrumb', [
                    'links' => [
                        ['link' => '/press-centre', 'name' => 'Press Centre'],
                        ['link' => '/press-centre/articles', 'name' => 'Articles'],
                        ['link' => '/press-centre/articles/2020', 'name' => '2020'],
                    ]
                ])
                ?>
            </div>
        </div>
    </section>

    <section class="article-headings grid-container scroll-track left-right delay-2">
        <div class="grid-x overflow-hidden">

            <div class="cell small-12 large-9 large-offset-1">
                <h2 class="article-title heading h2">
                    Moyamba and Pujehun Districts score joint UNDP, WFP-supported project 80% for Peacebuilding
                    Project’s Success amidst COVID-19
                </h2>

                <div class="posted-date tag">Posted on November 19, 2020</div>
            </div>
        </div>
    </section>

    <section class="image-with-caption grid-container scroll-track left-right delay-3">
        <div class="grid-x overflow-hidden">

            <div class="image-container cell small-12">
                <div
                        class="featured-image"
                        style="background-image: url('<?= "$imgPath/article-deepdive-featured-image.png" ?>')">
                </div>
            </div>

            <div class="image-caption cell small-8 small-offset-3 large-7 large-offset-2">
                <div class="image-alt">
                    <p class="medium-copy">
                        Jitta Kanneh, Mammy Queen of Makpele Chiefdom, at one of the swamp-rice development livelihoods
                        for peace initiative of the PBF project
                    </p>
                </div>
                <div class="image-author">
                    <p class="medium-copy">
                        <span class="show-for-medium">Photo:<br></span>
                        UNDP Taiwan/Jason Smith
                    </p>
                </div>
            </div>

            <div class="separator cell small-12 large-7 large-offset-2"></div>
        </div>
    </section>

    <section class="article-authors grid-container">
        <div class="grid-x center-children">
            <div class="authors-container cell large-8">
                <div class="authors-title heading h5">
                    Author(s)
                </div>
                <div class="authors-information">
                    <div class="author-item">
                        <div class="author-image">
                            <img src="<?= "$imgPath/author-jane-doe.png" ?>" alt="">
                        </div>
                        <div class="author-info">
                            <div class="author-name medium-copy">Jane Doe</div>
                            <div class="job-position medium-copy">Title Organization</div>
                        </div>
                    </div>
                    <div class="author-item">
                        <div class="author-image">
                            <img src="<?= "$imgPath/john-smith-author.png" ?>" alt="">
                        </div>
                        <div class="author-info">
                            <div class="author-name medium-copy">John Smith</div>
                            <div class="job-position medium-copy">Title Organization</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="article-text grid-container">
        <div class="grid-x center-children">
            <div class="article-text-container cell large-8">
                <p class="text-block">
                    For fostering Peace and Social Cohesion in Pujehun and Moyamba districts, communities score the Government of Sierra Leone,
                    the United Nations Development Programme (UNDP) and the World Food Programme (WFP) over 80% in the Multi-Stakeholder Project
                    supported by the Peacebuilding Fund (PBF).</p>
                <p class="text-block">
                    Residents (youth, women, chiefs and other district and chiefdom authorities) of Malen and Makpele chiefdoms of Pujehun District
                    and of Lower Banta and Upper Banta Chiefdoms in Moyamba district recently rated the Government of Sierra Leone (GoSL), UNDP and
                    WFP Multi Stakeholder Platform (MSP) Project “over 80% successful” as a resource based and local conflict resolution mechanism
                    that promotes peace and social cohesion. This finding was revealed by district stakeholders during a two-day spot-check visit to
                    the project chiefdoms led by UNDP’s Resident Representative-Dr. Samuel Doe, where his team engaged with community members, local
                    and traditional leaders of the areas to learn about the outcomes of the project.

                </p>
            </div>
        </div>
    </section>

    <?php View::render('organisms/content-cards/related-articles') ?>
</div>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
