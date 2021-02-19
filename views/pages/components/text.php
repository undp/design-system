<?php
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Text Components']) ?>

<body>
<main class="components-index">
    <?php
    View::render('organisms/text/small-copy');
    View::render('organisms/text/selector-tabs');
    View::render('organisms/text/table');
    View::render('organisms/text/faq');
    ?>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
