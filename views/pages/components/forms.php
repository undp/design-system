<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Components - Stats']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>

<main class="components-index overflow-hidden">

    <?php View::render('organisms/forms/generic-form') ?>

    <?php View::render('organisms/forms/large-form') ?>

    <?php View::render('organisms/forms/image-form') ?>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
