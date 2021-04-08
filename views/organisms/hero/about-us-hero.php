<?php use helpers\View; ?>


<section class="hero about-hero small-height" data-desktop-image="<?= $desktopImage ?? ''?>" data-mobile-image="<?= $mobileImage ?? ''?>">
    <div class="overlay"></div>
    <div class="grid-container overflow-hidden hero-container">
        <div class="grid-x scroll-track left-right delay-1 text-container">
            <div class="cell small-12 large-9 large-offset-1 hero-content">
                <?php
                    View::render('partials/breadcrumb', [
                        'links' => [
                            ['link' => '#', 'name' => '2030 Agenda For Sustainable Development'],
                            ['link' => '#', 'name' => 'Planet'],
                            ['link' => '#', 'name' => 'Climate Change'],
                        ],
                        'classes' => 'accent-white'
                    ])
                ?>

                <div class="text-box scroll-track left-right delay-1">
                    <h3 class="title heading h3">
                        Our Focus
                    </h3>
                    <h2 class="subtitle heading h2">
                        Planet
                    </h2>
                </div>
            </div>
        </div>
    </div>
</section>
