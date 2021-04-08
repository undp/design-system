<?php
use helpers\Svg;
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Molecules - Stats']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <?php View::render('organisms/stats/listed-stats'); ?>

    <section class="other-inputs component-categories grid-container">
        <div class="grid-x grid-margin-x">

            <div class="cell medium-3 component-categories">
                <h4 class="heading h4">Stats Cards<br>Small</h4>
            </div>
            <div class="cell medium-8 medium-offset-1">
                <div class="grid-x grid-margin-x">
                    <div class="cell medium-4 component-categories">
                        <?php
                            View::render('molecules/statistics-figures/stat-card', [
                                'number' => 41,
                                'heading' => 'Lorem Title',
                                'size' => 'small',
                                'title' => 'Percent',
                                'description' => 'Adult literacy rate'
                            ]);
                        ?>
                    </div>
                </div>
            </div>


            <div class="cell medium-3 component-categories">
                <h4 class="heading h4">Stats Cards<br>Medium</h4>
            </div>
            <div class="cell medium-8 medium-offset-1">
                <div class="grid-x grid-margin-x">
                    <div class="cell medium-6 component-categories">
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
                </div>
            </div>


            <div class="cell medium-3 component-categories">
                <h4 class="heading h4">Stats Cards<br>Large</h4>
            </div>
            <div class="cell medium-8 medium-offset-1">
                <div class="grid-x grid-margin-x">
                    <div class="cell medium-8 component-categories">
                        <?php
                            View::render('molecules/statistics-figures/stat-card', [
                                'number' => 41,
                                'heading' => 'Lorem Title',
                                'size' => 'large',
                                'title' => 'Percent',
                                'description' => 'Adult literacy rate'
                            ]);
                        ?>
                    </div>
                </div>
            </div>


            <div class="cell medium-3 component-categories">
                <h4 class="heading h4">Stats Cards<br>Accent Colors</h4>
            </div>
            <div class="cell medium-6 large-5 medium-offset-1">
                <div class="grid-x grid-margin-x">
                    <div class="cell medium-6 component-categories" data-tooltip>
                        <?php
                            View::render('molecules/statistics-figures/stat-card', [
                                'number' => 41,
                                'heading' => 'Lorem Title',
                                'size' => 'small',
                                'title' => 'Percent',
                                'description' => 'Adult literacy rate'
                            ]);
                        ?>
                        <span class="tooltip">Accent Color - Yellow (Default)</span>
                    </div>
                    <div class="cell medium-6 component-categories" data-tooltip>
                        <?php
                            View::render('molecules/statistics-figures/stat-card', [
                                'number' => 41,
                                'heading' => 'Lorem Title',
                                'size' => 'small',
                                'title' => 'Percent',
                                'description' => 'Adult literacy rate',
                                'classes' => 'accent-green'
                            ]);
                        ?>
                        <span class="tooltip">Accent Color - Green</span>
                    </div>
                    <div class="cell medium-6 component-categories" data-tooltip>
                        <?php
                            View::render('molecules/statistics-figures/stat-card', [
                                'number' => 41,
                                'heading' => 'Lorem Title',
                                'size' => 'small',
                                'title' => 'Percent',
                                'description' => 'Adult literacy rate',
                                'classes' => 'accent-red'
                            ]);
                        ?>
                        <span class="tooltip">Accent Color - Red</span>
                    </div>
                    <div class="cell medium-6 component-categories" data-tooltip>
                        <?php
                            View::render('molecules/statistics-figures/stat-card', [
                                'number' => 41,
                                'heading' => 'Lorem Title',
                                'size' => 'small',
                                'title' => 'Percent',
                                'description' => 'Adult literacy rate',
                                'classes' => 'accent-blue'
                            ]);
                        ?>
                        <span class="tooltip">Accent Color - Blue</span>
                    </div>
                </div>
            </div>

        </div>
    </section>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
