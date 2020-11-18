<?php
use helpers\View;
?>
<!-- Page Headers -->
<?php View::render('partials/header') ?>

<body>
<!-- Navigation -->
<?php //View::render('partials/navigation') ?>

<!-- Navigation -->
<?php View::render('modules/hero') ?>
<?php View::render('modules/our-expertise') ?>
<?php View::render('modules/our-mission') ?>
<?php View::render('modules/join-us') ?>
<?php View::render('modules/global-impact') ?>

<!-- Footer -->
<?php //View::render('partials/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
