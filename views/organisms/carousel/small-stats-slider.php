<?php use helpers\View; ?>


<div class="small-stats-slider">
    <div class="grid-container grid-x overflow-hidden">
        <div class="cell small-10 small-offset-1 scroll-track left-right delay-1">
            <h2 class="heading h2"><?= $heading ?></h2>
        </div>
        <div class="cell">
            <div class="dynamic-slider cell">

                <div class="scroll-track left-right delay-1 flex-container flex-dir-column">
                    <div class="bullets-container">
                        <div class="glide__bullets" data-glide-el="controls[nav]"></div>
                    </div>

                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            <?php foreach($cards as $card) : ?>
                                <li class="glide__slide">
                                    <a href="<?= $card['link'] ?? '#' ?>">
                                        <?php
                                            View::render('molecules/stats/small-card', [
                                                'title' => $card['title']
                                            ])
                                        ?>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
