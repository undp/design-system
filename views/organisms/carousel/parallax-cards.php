<?php

use helpers\View;

$cards = isset($cards) && is_array($cards) ? $cards : [];
$sliderOptions = [
    'type' => 'slider',
    'bound' => true,
    'peek' => ['before' => 0, 'after' => 65],
    'gap' => 20,
    'perView' => 3,
    'breakpoints' => [
        '620' => [
            'perView' => 2,
        ],
        '475' => [
            'perView' => 1,
        ]
    ]
];
?>


<section class="parallax-cards">
    <div class="grid-container grid-x overflow-hidden">

        <div class="cell medium-10 medium-offset-1">
            <h2 class="heading h2 scroll-track left-right delay-2">Our Impact</h2>
        </div>

        <div class="gs--parallax-container cell cell medium-10 medium-offset-1 show-for-medium">
            <?php foreach(array_chunk($cards, 3) as $chunk) : ?>
                <div class="grid-x grid-padding-x gs--parallax-row">

                    <?php foreach($chunk as $card) : ?>
                        <div class="cell medium-4">
                            <?php
                                View::render('molecules/stats/small-card', [
                                    'title' => $card['title'],
                                    'number' => $card['number'],
                                    'description' => $card['description']
                                ])
                            ?>
                        </div>
                    <?php endforeach; ?>

                </div>
            <?php endforeach; ?>
        </div>

        <div class="generic-slider cell hide-for-medium" data-options=<?= json_encode($sliderOptions) ?>>

            <div class="scroll-track left-right delay-1">
                <div class="bullets-container">
                    <div class="glide__bullets" data-glide-el="controls[nav]"></div>
                </div>

                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <?php foreach($cards as $card) : ?>
                            <li class="glide__slide">
                                <?php
                                    View::render('molecules/stats/small-card', [
                                        'title' => $card['title'],
                                        'number' => $card['number'],
                                        'description' => $card['description']
                                    ])
                                ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>

            </div>
        </div>

    </div>
</section>
