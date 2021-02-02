<?php
use helpers\Svg;
use helpers\View;

$imgPath = '../../../assets/images/placeholder/about-us';
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'About us']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>


<div class="standard-page">

    <section class="hero about-hero"
             style="background: url('../../../assets/images/placeholder/hero/about-image.jpg') center 0 / cover no-repeat;">
        <div class="grid-container scroll-track left-right delay-1 hero-container">
            <div class="grid-x text-container">
                <div class="cell small-12 large-9 large-offset-1 hero-content">
                    <?php
                    View::render('partials/breadcrumb', [
                        'links' => [
                            ['link' => '#', 'name' => '2030 Agenda For Sustainable Development'],
                            ['link' => '#', 'name' => 'Planet'],
                            ['link' => '#', 'name' => 'Climate Change'],
                        ]
                    ])
                    ?>

                    <div class="text-box scroll-track left-right delay-1">
                        <h3 class="title heading h3">
                            Our Focus
                        </h3>
                        <h2 class="subtitle heading h2">
                            Planet
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php View::render('organisms/standard-page/side-nav-content'); ?>
</div>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
