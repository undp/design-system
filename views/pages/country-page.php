<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - Country Page']) ?>

<body class="accent-green">
<!-- Navigation -->
<?php View::render('layout/navigation/main-justify', ['country' => 'Sierra Leone']) ?>

<main class="country-page">
    <!--Country hero 3-->
    <?php View::render('organisms/hero/country-hero-3', [
        'subtitle' => 'Sierra Leone',
        'title' => 'Sierra Leone Youth Minister Launches 2020 Social Good Summit',
        'description' => 'As we ‘come to our feet’ to respond to public health issues at the borders, key 
                          messages on Covid-19 should be reinforced, border security enhanced…',
        'imageUrl' => '../../../assets/images/placeholder/hero/country-hero-img.jpg'
    ]) ?>

    <?php View::render('organisms/article-cards/local-featured-stories'); ?>

    <?php View::render('organisms/text/featured-callout-title-text'); ?>

    <?php View::render('molecules/cards/featured-content-card'); ?>

    <?php View::render('organisms/content-cards/country-page-content-cards'); ?>

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

    <?php View::render('organisms/photo/photo-cta-group'); ?>
</main>
<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
