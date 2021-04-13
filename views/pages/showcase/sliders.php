<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Molecules - Carousels']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <?php View::render('organisms/carousel/publications') ?>

    <?php View::render('organisms/photo/image-only-carousel'); ?>

    <?php
        View::render('organisms/photo/large-carousel', [
            'heading' => 'Large carousel'
        ]);
    ?>

    <?php
        View::render('organisms/photo/large-carousel', [
            'imageOnly' => true,
            'heading' => 'Large Image only carousel'
        ]);
    ?>

    <?php
        View::render('organisms/carousel/small-stats-slider', [
            'heading' => 'Countries We Support',
            'cards' => [
                ['title' => 'Cook Island'],
                ['title' => 'Federated States of Micronesia'],
                ['title' => 'Fiji'],
                ['title' => 'Kingdom of Tonga'],
                ['title' => 'Kiribati'],
                ['title' => 'Nauro']
            ]
        ]);
    ?>
    
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
