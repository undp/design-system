<?php
use helpers\View;
$imgPath = '../../../assets/images/placeholder/about-us'
?>


<section class="side-nav-content grid-container scroll-track left-right delay-2">
    <div class="grid-x grid-padding-x" data-sticky-container>
        <?php
            View::render('partials/standard-page/side-navigation', [
                'classes' => 'cell small-12 medium-4 large-3',
                'menuItems' => [
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
                ]
            ]);


            View::render('partials/standard-page/side-content');
        ?>
    </div>
</section>
