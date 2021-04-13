<?php
use helpers\View;

$imgPath = '../../../assets/images/placeholder/about-us';
$menuItems = [
    [
        'name' => 'Overview',
        'link' => '#'
    ],
    [
        'name' => 'Climate Change',
        'link' => '#',
        'subMenuItems' => [
            [
                'name' => 'Adapting to changes in climate and extreme weather events',
                'link' => '#'
            ],
            [
                'name' => 'Mitigation through reducing emissions and increasing carbon storage',
                'link' => '#'
            ],
            [
                'name' => 'International frameworks and discussions',
                'link' => '#'
            ],
            [
                'name' => 'Adapting to changes in climate and extreme weather events',
                'link' => '#'
            ],
            [
                'name' => 'Mitigation through reducing emissions and increasing carbon storage',
                'link' => '#'
            ],
            [
                'name' => 'International frameworks and discussions',
                'link' => '#'
            ],
            [
                'name' => 'Adapting to changes in climate and extreme weather events',
                'link' => '#'
            ],
            [
                'name' => 'Mitigation through reducing emissions and increasing carbon storage',
                'link' => '#'
            ],
            [
                'name' => 'International frameworks and discussions',
                'link' => '#'
            ],
            [
                'name' => 'Adapting to changes in climate and extreme weather events',
                'link' => '#'
            ],
            [
                'name' => 'Mitigation through reducing emissions and increasing carbon storage',
                'link' => '#'
            ],
            [
                'name' => 'International frameworks and discussions',
                'link' => '#'
            ],
            [
                'name' => 'Adapting to changes in climate and extreme weather events',
                'link' => '#'
            ],
            [
                'name' => 'Mitigation through reducing emissions and increasing carbon storage',
                'link' => '#'
            ],
            [
                'name' => 'International frameworks and discussions',
                'link' => '#'
            ]
        ]
    ],
    [
        'name' => 'Disaster Risk Reduction and Recovery',
        'link' => '#'
    ],
    [
        'name' => 'Environment and Natural Capital',
        'link' => '#'
    ],
    [
        'name' => 'Sustainable Energy',
        'link' => '#'
    ]
];
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'About us']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>


<main class="standard-page">

    <?php
        View::render('organisms/hero/about-us-hero', [
            'desktopImage' => '/assets/images/placeholder/hero/about-image.jpg',
            'mobileImage' => '/assets/images/placeholder/hero/heroabout-small.jpg'
        ])
    ?>

    <section class="side-nav-content grid-container">
        <div class="grid-x">
            <?php
                View::render('partials/standard-page/side-navigation', [
                    'menuItems' => $menuItems,
                    'classes' => 'sticky cell small-12 medium-4 large-3'
                ]);


                View::render('partials/standard-page/side-content');
            ?>
        </div>
    </section>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
