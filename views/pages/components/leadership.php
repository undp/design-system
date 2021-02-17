<?php
use helpers\View;
$imgPath = '/assets/images/placeholder/leadership';
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Components - Leadership']) ?>

<body>
<main class="components-index">
    <?php
        View::render('organisms/leadership/heading');
        View::render('organisms/leadership/leader-bio');
        View::render('organisms/leadership/leaders-cards');
        View::render('organisms/leadership/leader-card-single');
    ?>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
