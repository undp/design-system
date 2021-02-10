<?php

use helpers\View;

$cards = isset($cards) && is_array($cards) ? $cards : [];

?>


<section class="our-impact gs--parallax-container">
    <div class="grid-container grid-x overflow-hidden">

        <div class="cell medium-10 medium-offset-1">
            <h2 class="heading h2">Our Expertise</h2>
        </div>

        <?php foreach(array_chunk($cards, 4) as $chunk) : ?>
            <div class="cell gs--parallax-row show-for-medium">
                <div class="grid-x grid-padding-x parallax-content-wrapper">

                    <?php foreach($chunk as $card) : ?>
                        <div class="cell medium-3">
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
            </div>
        <?php endforeach; ?>
        
    </div>
</section>
