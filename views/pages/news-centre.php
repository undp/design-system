<?php
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - News Centre']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<div class="news-centre">
    <!--Global hero 3-->
    <?php View::render('organisms/hero/news-centre-hero', [
        'subtitle' => 'Sierra Leone',
        'title' => 'News Centre',
        'breadcrumbLinks' => [['name' => 'Press Centre', 'link' => '#']],
        'imageUrl' => '../../../assets/images/placeholder/hero/hero-news-image.jpg'
    ]) ?>

    <?php View::render('organisms/content-cards/news-centre-cards') ?>
</div>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
