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


    <?php View::render('organisms/standard-page/side-nav-content'); ?>
</div>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
