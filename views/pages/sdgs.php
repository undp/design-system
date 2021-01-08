
<?php
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - The SDGS']) ?>

<body>
<!-- Navigation -->
<?php //View::render('layout/navigation/main') ?>
<?php
    View::render('molecules/statistics-figures/sdg-list');
?>
<!-- Footer -->
<?php //View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>