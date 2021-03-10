<?php
use helpers\View;
$imagePath = '/assets/images/placeholder/galleries'
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Components - Photo']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index overflow-hidden">

    <?php
        View::render('organisms/photo/image-only-carousel');

        View::render('organisms/photo/large-carousel');

        View::render('organisms/photo/large-carousel', [
            'imageOnly' => true,
            'heading' => 'UNDP Image only carousel'
        ]);

        View::render('organisms/photo/parallax-gallery');

        View::render('organisms/photo/parallax-gallery', ['invertBackgrounds' => true]);

        View::render('organisms/photo/three-column-gallery');

        View::render('organisms/photo/image-per-row-gallery', [
            'images' => [
                ['path' => "$imagePath/gallery-image-wide@2x.jpg", 'imgClass' => 'wide'],
                ['path' => "$imagePath/gallery-image-tall@2x.jpg"]
            ]
        ]);

        View::render('organisms/photo/image-per-row-gallery', [
            'images' => [
                ['path' => "$imagePath/gallery-parallax02@2x.jpg"],
                ['path' => "$imagePath/gallery-image-tall@2x.jpg"]
            ]
        ]);

        View::render('organisms/photo/three-image-gallery');
        View::render('organisms/photo/photo-cta-group');
    ?>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
