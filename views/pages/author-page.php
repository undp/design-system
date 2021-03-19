<?php

use helpers\Svg;
use helpers\View;

$imgPath = '/assets/images/placeholder/author-page'

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Author - Dilara Umudova']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>


<div class="author-page">

    <section class="grid-container scroll-track left-right delay-1">
        <div class="grid-x">
            <div class="cell small-12 large-9 large-offset-1">
                <?php
                    View::render('partials/breadcrumb', [
                        'links' => [
                            ['link' => '/authors', 'name' => 'Authors'],
                            ['link' => '/dilara-umudova', 'name' => 'Dilara Umudova']
                        ],
                        'classes' => 'accent-red'
                    ])
                ?>
            </div>
        </div>
    </section>

    <?php
        View::render('organisms/text/author-bio', [
            'authorBio' => '
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non posuere orci, eget venenatis sem. 
                Aenean elementum sem ac metus fringilla volutpat. Nam ultricies turpis gravida, semper eros eu, 
                porttitor diam. Pellentesque a orci enim. Ut quis diam non mauris dapibus eleifend nec quis felis. 
                Curabitur nulla purus, vulputate at lorem a, dictum tincidunt est. Cras id mi a felis interdum interdum. 
                In efficitur, lectus ut viverra auctor, mauris quam pharetra libero, ut finibus quam massa ac mi.
            ',
            'authorName' => 'Dilara Umudova',
            'authorTitles' => [
                'Associate Administrator (a.i.)',
                'Regional Bureau for Arab States'
            ],
            'authorImage' => "$imgPath/author-image.png"
        ]);
    ?>

    <section class="explore-more grid-container scroll-track left-right delay-1" data-load-step="8" data-view-more data-scroll-up>
        <div class="grid-x">
            <div class="cell small-12">
                <?php View::render('partials/author-page/author-cards') ?>

                <div class="cta-button flex-container">
                    <a class="btn blue view-more" href="" data-view-more-btn>
                        View More
                    </a>
                </div>

                <div class="scroll-up" data-scroll-btn>
                    <?php Svg::render('angle-right') ?>
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
