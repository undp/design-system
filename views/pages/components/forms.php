<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Components - Stats']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <?php View::render('organisms/forms/generic-form') ?>

    <?php View::render('organisms/forms/large-form') ?>

    <?php View::render('organisms/forms/image-form') ?>

    <?php // Added "news-centre-cards" class for better formatting of "active-filters" ?>
    <section class="other-inputs grid-container news-centre-cards">
        <div class="grid-x grid-margin-x">
            <div class="cell medium-4 large-3 large-offset-2">
                <h4 class="heading h5">Multi Select</h4>
                <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'content-type-select',
                        'class' => 'white',
                        'title' => 'Content Types',
                        'dataType' => 'content-type',
                        'actionListener' => 'data-content-type-filter'
                    ]);
                ?>

                <?php // "active-filters" wraps basic tag styles ?>
                <div class="active-filters flex-container flex-dir-column align-top">
                    <p class="tag">Active filters:</p>
                    <div class="tags-container">
                        <a class="filter" href="#">Africa</a>
                        <a class="filter" href="#">Arab States</a>
                        <a class="filter" href="#">Asia and the Pacific</a>
                    </div>
                    <a class="filter-clear" href="#">Clear All</a>
                </div>
            </div>
            <div class="cell medium-4 large-3">
                <h4 class="heading h5">Select</h4>
                <?php
                    View::render('molecules/forms/select', [
                        'id' => 'language-select',
                        'options' => [
                            ['id' => 'pasto-1', 'value' => 'pasto', 'label' => 'Pasto'],
                            ['id' => 'dari-1', 'value' => 'dari', 'label' => 'Dari'],
                            ['id' => 'english-1', 'value' => 'en', 'label' => 'English'],
                            ['id' => 'albanian-1', 'value' => 'albanian', 'label' => 'Albanian'],
                            ['id' => 'arabic-1', 'value' => 'arabic', 'label' => 'Arabic'],
                            ['id' => 'portuguese-1', 'value' => 'portuguese', 'label' => 'Portuguese']
                        ],
                        'name' => 'publication-languages',
                        'placeholder' => 'Select Language',
                    ]);
                ?>
            </div>
            <div class="cell medium-4 large-3">
                <h4 class="heading h5">Radio Select</h4>
                <?php
                View::render('molecules/forms/multi-select-radio', [
                    'id' => 'language-select',
                    'options' => [
                        ['id' => 'pasto-1', 'value' => 'pasto', 'label' => 'Pasto'],
                        ['id' => 'dari-1', 'value' => 'dari', 'label' => 'Dari'],
                        ['id' => 'english-1', 'value' => 'en', 'label' => 'English'],
                        ['id' => 'albanian-1', 'value' => 'albanian', 'label' => 'Albanian'],
                        ['id' => 'arabic-1', 'value' => 'arabic', 'label' => 'Arabic'],
                        ['id' => 'portuguese-1', 'value' => 'portuguese', 'label' => 'Portuguese']
                    ],
                    'name' => 'publication-languages',
                    'title' => 'Select Language',
                ]);
                ?>
            </div>
        </div>
    </section>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
