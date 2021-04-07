<?php use helpers\View;?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Text Components']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">
    <?php
    View::render('organisms/text/small-copy');
    View::render('organisms/text/selector-tabs');
    View::render('organisms/text/table-section', [
        'heading' => 'Table - Default'
    ]);
    View::render('organisms/text/table-section', [
        'tableStyle' => 'striped',
        'heading' => 'Table - Striped'
    ]);
    View::render('organisms/text/table-section', [
        'tableStyle' => 'bordered',
        'heading' => 'Table - Bordered'
    ]);
    View::render('organisms/text/faq');
    View::render('organisms/text/downloadable-content');
    ?>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
