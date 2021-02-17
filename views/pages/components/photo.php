<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Components - Photo']) ?>

<body>
<main class="components-index">
    <?php

        View::render('organisms/photo/large-carousel');
        View::render('organisms/photo/large-carousel', [
            'imageOnly' => true,
            'heading' => 'UNDP Image only carousel'
        ]);

    View::render('organisms/photo/parallax-gallery');

        View::render('organisms/photo/photo-cta-group');
    ?>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
