<?php use helpers\View; ?>


<section class="medium-large-stats">
    <div class="grid-container grid-x">

        <div class="cell small-10 small-offset-1 medium-2">
            <h2 class="heading h2">Stats Header</h2>
        </div>

        <div class="cell small-10 medium-8 medium-offset-1">
            <div class="grid-x">
                <div class="cell medium-6">
                    <?php
                        View::render('molecules/statistics-figures/stat-card', [
                            'number' => 41,
                            'heading' => 'Lorem Title',
                            'size' => 'medium',
                            'title' => 'Percent',
                            'description' => 'Adult literacy rate'
                        ]);
                    ?>
                </div>

                <div class="cell medium-6">
                    <?php
                        View::render('molecules/statistics-figures/stat-card', [
                            'number' => 13,
                            'heading' => 'Lorem Title',
                            'size' => 'medium',
                            'title' => 'Percent',
                            'description' => 'Of parliamentary seats held by women'
                        ]);
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
