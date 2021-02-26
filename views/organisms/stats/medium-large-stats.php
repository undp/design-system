<?php
use helpers\View;

$sizes = ['medium', 'large'];
$cardSize = isset($size) && in_array($size, $sizes) ? $size : 'medium';
?>


<section class="medium-large-stats <?= $cardSize ?>">
    <div class="grid-container grid-x">

        <div class="cell small-10 small-offset-1 <?= $cardSize === 'medium' ? 'medium-2' : '' ?>">
            <h2 class="section-heading heading h2 scroll-track left-right delay-2">Stats Header</h2>
        </div>

        <div class="cell <?= $cardSize === 'medium' ? 'medium-8 medium-offset-1' : '' ?>">
            <div class="grid-x grid-margin-x">
                <div class="cell medium-6 card-container scroll-track left-right delay-2">
                    <?php
                        View::render('molecules/statistics-figures/stat-card', [
                            'number' => 41,
                            'heading' => 'Lorem Title',
                            'size' => $cardSize,
                            'title' => 'Percent',
                            'description' => 'Adult literacy rate'
                        ]);
                    ?>
                </div>

                <div class="cell medium-6 card-container scroll-track left-right delay-3">
                    <?php
                        View::render('molecules/statistics-figures/stat-card', [
                            'number' => 13,
                            'heading' => 'Lorem Title',
                            'size' => $cardSize,
                            'title' => 'Percent',
                            'description' => 'Of parliamentary seats held by women'
                        ]);
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
