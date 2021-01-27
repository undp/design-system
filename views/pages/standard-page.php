<?php

use helpers\View;

$imgPath = '../../../assets/images/placeholder/about-us'

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'About us']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>


<div class="standard-page">

    <section class="grid-container scroll-track left-right delay-1">
        <div class="grid-x">
            <div class="cell small-12 large-9 large-offset-1">
                <?php
                    View::render('partials/breadcrumb', [
                        'links' => [
                            ['link' => '#', 'name' => '2030 Agenda For Sustainable Development'],
                            ['link' => '#', 'name' => 'Planet'],
                            ['link' => '#', 'name' => 'Climate Change'],
                        ]
                    ])
                ?>
            </div>
        </div>
    </section>


    <section class="side-nav-content grid-container scroll-track left-right delay-2"></section>


    <section class="explore-more grid-container scroll-track left-right delay-1">
        <div class="grid-x">
            <div class="cell large-9 large-offset-2">
                <h2 class="heading h2">Explore More</h2>

                <?php View::render('partials/author-page/author-cards') ?>

                <div class="cta-button">
                    <button class="btn blue view-more">
                        View More
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
