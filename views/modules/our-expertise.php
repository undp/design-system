<?php
use helpers\View;
?>
<div class="our-expertise sticky-container">
    <div class="grid-container">
        <div class="grid-x our-expertise-row">
            <div class="medium-offset-1 medium-5">
                <div class="section-title hide-for-small-only sticky-content">
                    <h2 class="heading h2">Our</h2>
                    <h2 class="heading h2">
                        Expertise
                    </h2>
                </div>
            </div>
            <div class="cell medium-3 expertise-section-right">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'People',
                        'description' => 'We are determined to end poverty and hunger, in all their forms and dimensions, and to ensure that all human beings can fulfil their potential in dignity and equality and in a healthy environment.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
            <div class="cell medium-3 expertise-section-right">
                <div class="expertise-image">
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/expertise-1.jpeg'
                        ])
                    ?>
                </div>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell medium-3 expertise-section-left">
                <div class="expertise-image">
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/expertise-2.jpeg'
                        ])
                    ?>
                </div>
            </div>
            <div class="cell medium-3 expertise-section-left">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'Planet',
                        'description' => 'We are determined to protect the planet from degradation, through sustainable consumption and production, sustainably managing its natural resources and taking urgent action on climate change, so that it can support the needs of the present and future generations.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell medium-3 medium-offset-6 expertise-section-right">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'Prosperity',
                        'description' => 'We are determined to ensure that all human beings can enjoy prosperous and fulfilling lives and that economic, social and technological progress occurs in harmony with nature.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
            <div class="cell medium-3">
                <div class="expertise-image expertise-section-right">
                    <?php
                        View::render('components/image-card', [
                                'route' => '/assets/images/placeholder/expertise-3.jpeg'
                        ])
                    ?>
                </div>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell medium-3 expertise-section-left">
                <div class="expertise-image">
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/expertise-4.jpeg'
                        ])
                    ?>
                </div>
            </div>
            <div class="cell medium-3 expertise-section-left">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'Peace',
                        'description' => 'We are determined to foster peaceful, just and inclusive societies which are free from fear and violence. There can be no sustainable development without peace and no peace without sustainable development.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell medium-3 medium-offset-6 expertise-section-right">
                <?php
                    View::render('components/expertise-card', [
                        'title' => 'Partnership',
                        'description' => 'We are determined to mobilize the means required to implement this Agenda through a revitalized Global Partnership for Sustainable Development, based on a spirit of strengthened global solidarity, focused in particular on the needs of the poorest and most vulnerable and with the participation of all countries, all stakeholders and all people.',
                        'cta' => 'Read more'
                    ])
                ?>
            </div>
            <div class="cell medium-3">
                <div class="expertise-image expertise-section-right">
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/expertise-5.jpeg'
                        ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>