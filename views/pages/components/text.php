<?php
use helpers\View;
$imgPath = '/assets/images/placeholder/leadership';
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Project']) ?>

<body>
<main class="components-index">
    <?php
    View::render('organisms/text/small-copy');
    View::render('organisms/text/selector');
    View::render('organisms/text/table');
    ?>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
