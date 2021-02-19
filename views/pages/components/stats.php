<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Components - Stats']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>

<main class="components-index">

    <?php View::render('organisms/stats/listed-stats'); ?>

    <?php
        View::render('organisms/stats/parallax-stat-cards', [
            'heading' => 'Our Impact',
            'cards' => [
                [
                    'number' => 41,
                    'title' => 'Percent',
                    'description' => 'Adult literacy rate'
                ],
                [
                    'number' => 60,
                    'title' => 'Percent',
                    'description' => 'Of Sierra Leoneans live below the the national poverty line'
                ],
                [
                    'number' => 70,
                    'title' => 'Percent',
                    'description' => 'Of youth are unemployed or underemployed'
                ],
                [
                    'number' => 48,
                    'title' => 'Years old',
                    'description' => 'Life expectancy at birth'
                ],
                [
                    'number' => 13,
                    'title' => 'Percent',
                    'description' => 'Of parliamentary seats held by women'
                ],
                [
                    'number' => 41,
                    'title' => 'Percent',
                    'description' => 'Adult literacy rate'
                ]
            ]
        ]);
    ?>

    <?php View::render('organisms/stats/medium-large-stats'); ?>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
