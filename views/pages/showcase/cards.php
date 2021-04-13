<?php
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Molecules - Cards']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <section class="other-inputs grid-container">
        <div class="grid-x grid-margin-x">

            <div class="cell medium-2 component-categories">
                <h4 class="heading h4">Content Cards</h4>
            </div>
            <div class="cell medium-8 medium-offset-1">
                <div class="grid-x grid-margin-x">
                    <div class="cell component-categories">
                        <?php
                        View::render('molecules/cards/article-card', [
                            'size' => 'large',
                            'image' => '/assets/images/placeholder/featured-story-3.jpeg',
                            'tag' => 'Card Size - Wide',
                            'title' => 'In Costa Rica, rural women grow their own businesses',
                            'description' => 'Working with organic agriculture and native stingless honey bee production',
                            'cta' => 'Discover more'
                        ])
                        ?>
                    </div>

                    <div class="cell component-categories">
                        <?php
                            View::render('molecules/cards/article-card', [
                                'size' => 'large',
                                'tag' => 'Card Size - Wide (No Image)',
                                'title' => 'In Costa Rica, rural women grow their own businesses',
                                'description' => 'Working with organic agriculture and native stingless honey bee production',
                                'cta' => 'Discover more'
                            ])
                        ?>
                    </div>

                    <div class="cell medium-6 component-categories">
                        <?php
                        View::render('molecules/cards/article-card', [
                            'image' => '/assets/images/placeholder/featured-story-3.jpeg',
                            'tag' => 'Card Size - Square',
                            'title' => 'In Costa Rica, rural women grow their own businesses',
                            'description' => 'Working with organic agriculture and native stingless honey bee production',
                            'cta' => 'Discover more'
                        ])
                        ?>
                    </div>

                    <div class="cell medium-6 component-categories">
                        <?php
                            View::render('molecules/cards/article-card', [
                                'tag' => 'Card Size - Square (No Image)',
                                'title' => 'In Costa Rica, rural women grow their own businesses',
                                'description' => 'Working with organic agriculture and native stingless honey bee production',
                                'cta' => 'Discover more'
                            ])
                        ?>
                    </div>

                    <div class="cell medium-5 component-categories">
                        <?php
                        View::render('molecules/cards/article-card', [
                            'size' => 'tall',
                            'image' => '/assets/images/placeholder/featured-story-3.jpeg',
                            'tag' => 'Card Size - Tall',
                            'title' => 'In Costa Rica, rural women grow their own businesses',
                            'description' => 'Working with organic agriculture and native stingless honey bee production',
                            'cta' => 'Discover more'
                        ])
                        ?>
                    </div>

                    <div class="cell medium-5 component-categories">
                        <?php
                        View::render('molecules/cards/article-card', [
                            'size' => 'tall',
                            'tag' => 'Card Size - Tall (No Image)',
                            'title' => 'In Costa Rica, rural women grow their own businesses',
                            'description' => 'Working with organic agriculture and native stingless honey bee production',
                            'cta' => 'Discover more'
                        ])
                        ?>
                    </div>
                </div>
            </div>

            <div class="cell medium-2 component-categories">
                <h4 class="heading h4">Reveal Content Cards</h4>
            </div>
            <div class="cell medium-4 medium-offset-1 component-categories">
                <?php
                    View::render('molecules/photo/photo-cta', [
                        'link' => $_SERVER['REQUEST_URI'],
                        'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
                        'image' => '/assets/images/placeholder/cards/photo-cta-image01.png',
                        'cta' => 'Shop'
                    ])
                ?>
            </div>
            <div class="cell medium-offset-4 hide-for-small-only"></div>


            <div class="cell medium-2 component-categories">
                <h4 class="heading h4">Single Content Card Headline + Accent Color</h4>
            </div>
            <div class="cell medium-4 medium-offset-1 component-categories">
                <?php
                    View::render('molecules/cards/single-content-card-accent-color', [
                        'tag' => 'Internal Link',
                        'link' => '#',
                        'title' => 'EIF and UNDP to strengthen cooperation for sustainable finance.',
                        'cta' => 'Read More'
                    ])
                ?>
            </div>
            <div class="cell medium-4 component-categories">
                <?php
                    View::render('molecules/cards/single-content-card-accent-color', [
                        'tag' => 'External Link',
                        'link' => '#',
                        'isExternalLink' => true,
                        'title' => 'EIF and UNDP to strengthen cooperation for sustainable finance.',
                        'cta' => 'Read More'
                    ])
                ?>
            </div>


            <div class="cell medium-2 component-categories">
                <h4 class="heading h4">Single Content Card Image + Body</h4>
            </div>
            <div class="cell medium-4 medium-offset-1 component-categories">
                <?php
                View::render('molecules/cards/single-content-card-image', [
                    'tag' => 'Internal Link',
                    'link' => '#',
                    'image' => '/assets/images/placeholder/cards/single-content-card-image.png',
                    'title' => 'EIF and UNDP to strengthen cooperation for sustainable finance.',
                    'cta' => 'Explore'
                ])
                ?>
            </div>
            <div class="cell medium-4 component-categories">
                <?php
                View::render('molecules/cards/single-content-card-image', [
                    'tag' => 'External Link',
                    'link' => '#',
                    'isExternalLink' => true,
                    'image' => '/assets/images/placeholder/cards/single-content-card-image.png',
                    'title' => 'EIF and UNDP to strengthen cooperation for sustainable finance.',
                    'cta' => 'Read More'
                ])
                ?>
            </div>


            <div class="cell medium-2 component-categories">
                <h4 class="heading h4">Single Content Card Headline</h4>
            </div>
            <div class="cell medium-4 medium-offset-1 component-categories">
                <?php
                View::render('molecules/cards/single-content-card-body', [
                    'tag' => 'Internal Link',
                    'link' => '#',
                    'title' => 'UNDP at the Paris Peace Forum 2020.',
                    'description' => 'Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’.',
                    'cta' => 'Explore'
                ])
                ?>
            </div>
            <div class="cell medium-4 component-categories">
                <?php
                View::render('molecules/cards/single-content-card-body', [
                    'tag' => 'External Link',
                    'link' => '#',
                    'isExternalLink' => true,
                    'title' => 'UNDP at the Paris Peace Forum 2020.',
                    'description' => 'Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’.',
                    'cta' => 'Read More'
                ])
                ?>
            </div>


            <div class="cell component-categories">
                <h4 class="heading h4">Wide Featured Content Card</h4>
            </div>
            <div class="cell">
                <?php View::render('molecules/cards/featured-content-card'); ?>
            </div>


            <div class="cell medium-2 component-categories">
                <h4 class="heading h4">Leadership Cards</h4>
            </div>
            <div class="cell medium-8 medium-offset-1 component-categories">
                <?php
                    View::render('molecules/cards/leader-card', [
                        'name' => 'Barbara Pesce-Monteiro',
                        'image' => "/assets/images/placeholder/leadership/barbara-pesce-monteiro@2x.jpg",
                        'titles' => [
                            'Director of UNDP’s Representation Office in Brussels, UN Secretary-General’s Representative',
                        ],
                        'link' => '#'
                    ])
                ?>

                <div class="grid-x">
                    <div class="cell medium-6 large-5">
                        <?php
                        View::render('molecules/cards/small-leader-card', [
                            'name' => 'Mourad Wahba',
                            'image' => "/assets/images/placeholder/leadership/mourad-wahba@2x.jpg",
                            'titles' => [
                                'Associate Administrator (a.i.);',
                                'Regional Bureau for Arab States',
                            ],
                            'link' => '#'
                        ])
                        ?>
                    </div>
                </div>
            </div>


            <div class="cell medium-2 component-categories">
                <h4 class="heading h4">Collateral Download Card</h4>
            </div>
            <div class="cell medium-4 medium-offset-1 large-3 downloadable-content">
                <?php
                    View::render('molecules/text/download-item', [
                        'title' => 'Fact Sheet',
                        'image' => '/assets/images/placeholder/publication-1.png',
                        'btnText' => 'Download',
                        'btnIcon' => 'icon-download',
                        'attributes' => 'data-modal-trigger="modal-publication-download"'
                    ]);
                ?>
            </div>
            <div class="cell medium-offset-4 hide-for-small-only"></div>

            <div class="cell medium-2 component-categories">
                <h4 class="heading h4">Small Download</h4>
            </div>
            <div class="cell medium-4 medium-offset-1 large-3 downloadable-content">
                <?php
                    View::render('molecules/text/download-item', [
                        'title' => 'Fact Sheet',
                        'image' => false,
                        'btnText' => 'Download',
                        'btnIcon' => 'icon-download',
                        'attributes' => 'data-modal-trigger="modal-publication-download"'
                    ]);
                ?>
            </div>
            <div class="cell medium-offset-4 hide-for-small-only"></div>

        </div>
    </section>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
