<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Components Index']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>


<main class="project-page">

    <div class="grid-container grid-x component-categories">
        <div class="cell medium-10 medium-offset-1">
            <h2 class="heading h2">Component Categories:</h2>
            <ul class="categories big-copy">
                <li>
                    <a href="/components-index/leadership" class="animated-underline">
                        Leadership
                    </a>
                </li>
                <li>
                    <a href="/components-index/text" class="animated-underline">
                        Text
                    </a>
                </li>
                <li>
                    <a href="/components-index/stats" class="animated-underline">
                        Stats
                    </a>
                </li>
            </ul>
        </div>
    </div>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
