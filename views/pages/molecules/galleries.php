<?php
use helpers\View;
$imagePath = '/assets/images/placeholder/galleries';
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Atoms - Text Links']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <section class="other-inputs grid-container">
        <div class="grid-x grid-margin-x">

            <div class="cell medium-10 medium-offset-1 component-categories">
                
            </div>

        </div>
    </section>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
