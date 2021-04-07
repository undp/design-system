<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Molecules - Tables And Accordions']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <section class="other-inputs grid-container">
        <?php
            View::render('organisms/text/table', [
                'heading' => 'Table - Default'
            ]);
        ?>

        <?php
            View::render('organisms/text/table', [
                'tableStyle' => 'striped',
                'heading' => 'Table - Striped'
            ]);
        ?>

        <?php
            View::render('organisms/text/table', [
                'tableStyle' => 'bordered',
                'heading' => 'Table - Bordered'
            ]);
        ?>

        <?php View::render('organisms/text/faq'); ?>
    </section>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
