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

    <section class="medium-large-stats">
        <div class="grid-container grid-x grid-margin-x">

            <div class="cell small-10 small-offset-1">
                <h2 class="heading h2">Large Stats</h2>
            </div>

            <div class="cell medium-6 card-container">
                <?php
                    View::render('molecules/statistics-figures/stat-card', [
                        'number' => 41,
                        'heading' => 'Lorem Title',
                        'size' => 'medium',
                        'title' => 'Percent',
                        'description' => 'Adult literacy rate'
                    ]);
                ?>
            </div>
            <div class="cell medium-6 card-container">
                <?php
                    View::render('molecules/statistics-figures/stat-card', [
                        'number' => 13,
                        'heading' => 'Lorem Title',
                        'size' => 'medium',
                        'title' => 'Percent',
                        'description' => 'Of parliamentary seats held by women'
                    ]);
                ?>
            </div>
        </div>
    </section>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
