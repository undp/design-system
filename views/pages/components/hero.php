<?php use helpers\View;?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Hero Components']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>

<main class="components-index">
    <?php
    View::render('organisms/hero/global-hero-1', [
        'title' => 'The SDGs In ACTION.',
        'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
        'imageUrl' => '../../../assets/images/placeholder/hero/global-hero-3.jpg',
        'imageMobileUrl' => '../../../assets/images/placeholder/hero/sdg-hero-mobile@2x.jpg'
    ]);

    View::render('organisms/hero/global-hero-3', [
        'title' => 'The SDGs In ACTION.',
        'breadcrumbLinks' => [['name' => 'Sdgs', 'link' => '#']],
        'imageUrl' => '../../../assets/images/placeholder/hero/global-hero-3.jpg',
        'imageMobileUrl' => '../../../assets/images/placeholder/hero/sdg-hero-mobile@2x.jpg'
    ]);

    ?>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
