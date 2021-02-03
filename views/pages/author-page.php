<?php

use helpers\View;

$imgPath = '../../../assets/images/placeholder/author-page'

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Author - Dilara Umudova']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>


<div class="author-page">

    <section class="grid-container scroll-track left-right delay-1">
        <div class="grid-x">
            <div class="cell small-12 large-9 large-offset-1">
                <?php
                    View::render('partials/breadcrumb', [
                        'links' => [
                            ['link' => '/authors', 'name' => 'Authors'],
                            ['link' => '/dilara-umudova', 'name' => 'Dilara Umudova']
                        ]
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
            'authorMessage' => '
                Next Generation UNDP builds on our existing assets—worldwide presence, thought leadership,
                and over 50 years of experience—to help countries and communities respond to a fast-changing
                development landscape. We are creating new solutions, building collaboration platforms,
                and sparking new partnerships and instruments for development. These innovations are disrupting
                the way our organization thinks, invests, manages, and delivers—so we can perform faster and
                better than ever to accelerate progress towards the Sustainable Development Goals.
            ',
            'authorName' => 'Dilara Umudova',
            'authorTitles' => [
                'Associate Administrator (a.i.)',
                'Regional Bureau for Arab States'
            ],
            'authorImage' => "$imgPath/author-image.png"
        ]);
    ?>

    <section class="explore-more grid-container scroll-track left-right delay-1" data-view-more-less>
        <div class="grid-x">
            <div class="cell large-10 large-offset-1">
                <h2 class="heading h2">Explore More</h2>
            </div>
            <div class="cell small-12">
                <?php View::render('partials/author-page/author-cards') ?>

                <div class="cta-button flex-container">
                    <button class="btn blue view-more" data-view-more>
                        View More
                    </button>
                    <button class="btn blue view-less" data-view-less>
                        View Less
                    </button>
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
