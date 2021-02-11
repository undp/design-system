<?php use helpers\View; ?>


<section class="our-impact gs--parallax-container">
    <div class="grid-container grid-x overflow-hidden">

        <div class="cell medium-10 medium-offset-1">
            <h2 class="heading h2">Our Expertise</h2>
        </div>

        <div class="cell gs--parallax-row">
            <div class="grid-x grid-padding-x">
                <div class="cell medium-3">
                    <?php
                    View::render('molecules/stats/small-card', [
                        'number' => 41,
                        'title' => 'Percent',
                        'description' => 'Adult literacy rate'
                    ])
                    ?>
                </div>
                <div class="cell medium-3">
                    <?php
                    View::render('molecules/stats/small-card', [
                        'number' => 60,
                        'title' => 'Percent',
                        'description' => 'Of Sierra Leoneans live below the the national poverty line'
                    ])
                    ?>
                </div>
                <div class="cell medium-3">
                    <?php
                    View::render('molecules/stats/small-card', [
                        'number' => 60,
                        'title' => 'Percent',
                        'description' => 'Of Sierra Leoneans live below the the national poverty line'
                    ])
                    ?>
                </div>
                <div class="cell medium-3">
                    <?php
                    View::render('molecules/stats/small-card', [
                        'number' => 60,
                        'title' => 'Percent',
                        'description' => 'Of Sierra Leoneans live below the the national poverty line'
                    ])
                    ?>
                </div>
            </div>
        </div>
        <div class="cell gs--parallax-row">
            <div class="grid-x grid-padding-x">
                <div class="cell medium-3">
                    <?php
                    View::render('molecules/stats/small-card', [
                        'number' => 13,
                        'title' => 'Percent',
                        'description' => 'Of parliamentary seats held by women'
                    ])
                    ?>
                </div>
                <div class="cell medium-3">
                    <?php
                    View::render('molecules/stats/small-card', [
                        'number' => 70,
                        'title' => 'Percent',
                        'description' => 'Of youth are unemployed or underemployed'
                    ])
                    ?>
                </div>
                <div class="cell medium-3">
                    <?php
                    View::render('molecules/stats/small-card', [
                        'number' => 48,
                        'title' => 'Years old',
                        'description' => 'Life expectancy at birth'
                    ])
                    ?>
                </div>
                <div class="cell medium-3">
                    <?php
                    View::render('molecules/stats/small-card', [
                        'number' => 60,
                        'title' => 'Percent',
                        'description' => 'Of Sierra Leoneans live below the the national poverty line'
                    ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
