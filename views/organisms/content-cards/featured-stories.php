<?php use helpers\View; ?>

<section class="featured-stories">
    <div class="grid-container">
        <div class="grid-x grid-padding-x overflow-hidden lazy-group">
            <div class="cell small-11 small-offset-1 medium-3 medium-offset-1 scroll-track left-right delay-4">
                <div class="title-container">
                    <hgroup class="section-title">
                        <h2 class="heading h2">
                            Discover
                        </h2>
                        <h2 class="heading h2">
                            More
                        </h2>
                    </hgroup>
                </div>
            </div>
            <div class="cell small-12 medium-4 overflow-hidden">
                <?php
                    View::render('molecules/cards/content-card', [
                        //'image' => '/assets/images/placeholder/featured-story-1.jpeg',
                        'tag' => 'UNDP Response',
                        'title' => 'A vineyard with a storied past receives an injection of new life',
                        'description' => 'A Bosnian wine that once graced the tables of Austro-Hungarian royalty moves towards 21st century production.',
                        'cta' => 'Discover more'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-4 overflow-hidden">
                <?php
                    View::render('molecules/cards/content-card', [
                        'image' => 'assets/images/placeholder/featured-story-2.jpeg',
                        'tag' => 'UNDP Response',
                        'title' => '“We are a forgotten population.”',
                        'description' => 'Local organizations in Panama continue to reach vulnerable groups during lockdown              ',
                        'cta' => 'Discover more'
                    ])
                ?>
            </div>
            <div class="cell medium-8 large-8">
                <?php
                View::render('molecules/cards/content-card', [
                    'size' => 'large',
                    'image' => '/assets/images/placeholder/featured-story-3.jpeg',
                    'tag' => 'UNDP Response',
                    'title' => 'In Costa Rica, rural women grow their own businesses',
                    'description' => 'Working with organic agriculture and native stingless honey bee production',
                    'cta' => 'Discover more'
                ])
                ?>
            </div>
            <div class="cell small-12 medium-4 overflow-hidden">
                <?php
                View::render('molecules/cards/content-card', [
                    'image' => '/assets/images/placeholder/featured-story-4.jpeg',
                    'tag' => 'UNDP Response',
                    'title' => '“I cry for no apparent reason.”',
                    'description' => "UNDP launches Syria's first online mental health service",
                    'cta' => 'Discover more'
                ])
                ?>
            </div>
        </div>
    </div>
</section>
