<?php

use helpers\Svg;
use helpers\View;

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - Single Publication']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main-justify') ?>

<div class="single-publication">
    <?php View::render('organisms/single-publication/featured-publication'); ?>

    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-offset-6 large-6">
                <div class="related-publications">
                    <div class="heading h2 related-title">Related Publications</div>
                    <div class="grid-x grid-margin-x related-items-content">
                        <div class="cell medium-6">
                            <?php
                            View::render('molecules/cards/publication-card', [
                                'image' => '/assets/images/placeholder/publication-1.png',
                                'tag' => 'What we are doing',
                                'title' => 'Migrants essential to post COVID-19 recovery',
                                'description' => "This year the world is commemorating the 25th anniversary of the Beijing Declaration and Platform for Action…",
                                'cta' => 'Read more',
                                'color' => 'transparent',
                                'size' => 'large'
                            ])
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
