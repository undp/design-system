<?php
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - The SDGS']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>

<div class="the-sdgs">
    <!--Global hero 3-->
    <?php View::render('organisms/hero/global-hero-3', [
        'title' => 'The SDGs In ACTION.',
        'breadcrumbLinks' => [['name' => 'About', 'link' => '#']],
        'imageUrl' => '../../../assets/images/placeholder/hero/global-hero-3.png'
    ]) ?>

    <!--  Development Goals   -->
    <div class="grid-container">
        <?php View::render('organisms/text/big-copy-h1', [
                'title' => '        What are the Sustainable Development Goals?',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
             ])
        ?>
    </div>

    <!-- SDG Cards list -->
    <?php
    View::render('molecules/statistics-figures/sdg-list');
    ?>
</div>

<?php View::render('partials/modal-sdgs') ?>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
