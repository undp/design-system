<?php
use helpers\View;
$imagePath = '/assets/images/placeholder/galleries';
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Atoms - Text Links']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <section class="other-inputs grid-container">
        <div class="grid-x grid-margin-x">

            <div class="cell medium-10 medium-offset-1 component-categories">
                <h5 class="heading h5">Image Gallery - Single Column</h5>

                <div class="grid-x">
                    <?php
                        View::render('molecules/galleries/single-column-gallery', [
                            'classes' => 'small-6 medium-3',
                            'image1' => "$imagePath/gallery-parallax03@2x.jpg",
                            'image2' => "$imagePath/gallery-image-tall@2x.jpg",
                        ]);
                    ?>
                </div>
            </div>


            <div class="cell medium-5 medium-offset-1 component-categories">
                <h5 class="heading h5">Image Gallery - Double Column</h5>

                <?php View::render('molecules/galleries/double-column-gallery'); ?>
            </div>


            <div class="cell medium-8 medium-offset-1 component-categories">
                <h5 class="heading h5">Image Gallery - Triple Column</h5>

                <?php View::render('molecules/galleries/triple-column-gallery'); ?>
            </div>

        </div>
    </section>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
