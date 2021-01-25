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

    <?php
        View::render('organisms/article-deepdive/headings', [
            'title' => '
                Moyamba and Pujehun Districts score joint UNDP, WFP-supported project 80% for Peacebuilding
                Project’s Success amidst COVID-19
            ',
            'postedDate' => 'November 19, 2020'
        ]);


        View::render('organisms/article-deepdive/image-with-caption', [
            'image' => "$imgPath/article-deepdive-featured-image.png",
            'caption' => '
                Jitta Kanneh, Mammy Queen of Makpele Chiefdom, at one of the swamp-rice development 
                livelihoods for peace initiative of the PBF project
            ',
            'imageAuthor' => 'UNDP Taiwan/Jason Smith'
        ]);


        View::render('organisms/article-deepdive/authors', [
            'authors' => [
                [
                    'image' => "$imgPath/author-jane-doe.png",
                    'name' => 'Jane Doe',
                    'position' => 'Title Organization'
                ],
                [
                    'image' => "$imgPath/john-smith-author.png",
                    'name' => 'John Smith',
                    'position' => 'Title Organization'
                ],
            ]
        ]);


        View::render('organisms/content-cards/related-articles');
    ?>
</div>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
