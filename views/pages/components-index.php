<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Components Index']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>

<main class="components-index">
    <section class="grid-container scroll-track left-right delay-1">
        <div class="grid-x">
            <div class="cell small-12 large-9 large-offset-1">
                <?php
                View::render('partials/breadcrumb', [
                    'links' => [
                        ['link' => '/components', 'name' => 'Components']
                    ],
                    'classes' => 'accent-red'
                ])
                ?>
            </div>
        </div>
    </section>

    <section class="grid-container grid-x component-categories">
        <div class="cell medium-10 medium-offset-1">

            <h3 class="heading h3">Component Categories</h3>

            <ul class="categories big-copy">
                <li>
                    <a href="/components/leadership" class="animated-underline">Leadership</a>
                </li>
                <li>
                    <a href="/components/text" class="animated-underline">Text</a>
                </li>
                <li>
                    <a href="/components/stats" class="animated-underline">Stats</a>
                </li>
                <li>
                    <a href="/components/photo" class="animated-underline">Photo</a>
                </li>
            </ul>
        </div>
    </section>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
