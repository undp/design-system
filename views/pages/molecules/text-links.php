<?php
use helpers\Svg;
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Components - Stats']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <section class="other-inputs grid-container">
        <div class="grid-x grid-margin-x">

            <div class="cell medium-8 medium-offset-2 component-categories">
                <h5 class="heading h5">CTA Text Link - Arrow 1</h5>

                <?php
                    View::render('molecules/text-links/cta-text-link', [
                        'text' => 'Read More',
                        'arrowClass' => 'arrow-1'
                    ]);
                ?>
            </div>

            <div class="cell medium-8 medium-offset-2 component-categories">
                <h5 class="heading h5">CTA Text Link - Arrow 2</h5>

                <?php
                    View::render('molecules/text-links/cta-text-link', [
                        'text' => 'Explore',
                        'arrowClass' => 'arrow-2'
                    ]);
                ?>
            </div>

            <div class="cell medium-8 medium-offset-2 component-categories">
                <h5 class="heading h5">External Link</h5>

                <?php
                    View::render('molecules/text-links/external-link', [
                        'target' => '_blank',
                        'text' => 'Read More',
                        'classes' => 'flex-container',
                    ]);
                ?>
            </div>

            <div class="cell medium-8 medium-offset-2 component-categories">
                <h5 class="heading h5">Text Link</h5>

                <a href="#" class="medium-copy animated-underline">www.helloworld.com</a>
            </div>
        </div>
    </section>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
