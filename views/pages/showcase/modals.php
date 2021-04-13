<?php
use helpers\Svg;
use helpers\View;
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Molecules - Modals']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <section class="other-inputs grid-container">
        <div class="grid-x grid-margin-x">

            <div class="cell medium-8 medium-offset-2 component-categories">
                <h5 class="heading h5">Leadership Modal</h5>

                <?php
                    View::render('molecules/buttons/cta-no-arrow', [
                        'classes' => 'blue',
                        'text' => 'Open Modal',
                        'data' => 'data-modal-trigger="leader-modal"'
                    ])
                ?>

                <?php
                    View::render('organisms/modals/leader-modal', [
                        'name' => 'Mirjana Spoljaric Egger',
                        'image' => '/assets/images/placeholder/leadership/barbara-pesce-monteiro@2x.jpg',
                        'titles' => [
                                'Regional Bureau for Europe and the Commonwealth of Independent States'
                        ],
                        'modalId' => 'leader-modal'
                    ])
                ?>
            </div>

            <div class="cell medium-8 medium-offset-2 component-categories">
                <h5 class="heading h5">Content Download Modal</h5>

                <?php
                    View::render('molecules/buttons/cta-no-arrow', [
                        'classes' => 'blue',
                        'text' => 'Open Modal',
                        'data' => 'data-modal-trigger="modal-publication-download"'
                    ])
                ?>
            </div>

            <div class="cell medium-8 medium-offset-2 component-categories">
                <h5 class="heading h5">Content Download Modal - Single Chapter</h5>

                <?php
                    View::render('molecules/buttons/cta-no-arrow', [
                        'classes' => 'blue',
                        'text' => 'Open Modal',
                        'data' => 'data-modal-trigger="modal-publication-download-single-chapter"'
                    ])
                ?>
            </div>

            <div class="cell medium-8 medium-offset-2 component-categories">
                <h5 class="heading h5">Content Download Modal - No Language</h5>

                <?php
                    View::render('molecules/buttons/cta-no-arrow', [
                        'classes' => 'blue',
                        'text' => 'Open Modal',
                        'data' => 'data-modal-trigger="modal-publication-download-no-language"'
                    ])
                ?>
            </div>

            <div class="cell medium-8 medium-offset-2 component-categories">
                <h5 class="heading h5">Content Download Modal - No Image</h5>

                <?php
                    View::render('molecules/buttons/cta-no-arrow', [
                        'classes' => 'blue',
                        'text' => 'Open Modal',
                        'data' => 'data-modal-trigger="modal-publication-download-no-image"'
                    ])
                ?>
            </div>
        </div>
    </section>

    <?php
        View::render('organisms/modals/modal-publication-download', [
            'image' => '/assets/images/placeholder/publication-1.png',
            'languageOptions' => [
                ['id' => 'pasto-1', 'value' => 'pasto', 'label' => 'Pasto'],
                ['id' => 'dari-1', 'value' => 'dari', 'label' => 'Dari'],
                ['id' => 'english-1', 'value' => 'en', 'label' => 'English'],
                ['id' => 'albanian-1', 'value' => 'albanian', 'label' => 'Albanian'],
                ['id' => 'arabic-1', 'value' => 'arabic', 'label' => 'Arabic'],
                ['id' => 'portuguese-1', 'value' => 'portuguese', 'label' => 'Portuguese']
            ],
            'chapters' => [
                ['title' => 'Lorem Ipsum Title Goes Here - English', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'en'],
                ['title' => 'Lorem Ipsum Title Goes Here - English', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'en'],
                ['title' => 'Lorem Ipsum Title Goes Here - Pasto', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'pasto'],
                ['title' => 'Lorem Ipsum Title Goes Here - Dari', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'dari'],
                ['title' => 'Lorem Ipsum Title Goes Here - Albanian', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'albanian'],
                ['title' => 'Lorem Ipsum Title Goes Here - Arabic', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'arabic'],
                ['title' => 'Lorem Ipsum Title Goes Here - Portuguese', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'portuguese']
            ]
        ]);
    ?>

    <?php
        View::render('organisms/modals/modal-publication-download', [
            'image' => false,
            'modalId' => 'modal-publication-download-no-image',
            'languageOptions' => [
                ['id' => 'pasto-1', 'value' => 'pasto', 'label' => 'Pasto'],
                ['id' => 'dari-1', 'value' => 'dari', 'label' => 'Dari'],
                ['id' => 'english-1', 'value' => 'en', 'label' => 'English'],
                ['id' => 'albanian-1', 'value' => 'albanian', 'label' => 'Albanian'],
                ['id' => 'arabic-1', 'value' => 'arabic', 'label' => 'Arabic'],
                ['id' => 'portuguese-1', 'value' => 'portuguese', 'label' => 'Portuguese']
            ],
            'chapters' => [
                ['title' => 'Lorem Ipsum Title Goes Here - English', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'en'],
                ['title' => 'Lorem Ipsum Title Goes Here - English', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'en'],
                ['title' => 'Lorem Ipsum Title Goes Here - Pasto', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'pasto'],
                ['title' => 'Lorem Ipsum Title Goes Here - Dari', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'dari'],
                ['title' => 'Lorem Ipsum Title Goes Here - Albanian', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'albanian'],
                ['title' => 'Lorem Ipsum Title Goes Here - Arabic', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'arabic'],
                ['title' => 'Lorem Ipsum Title Goes Here - Portuguese', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'portuguese']
            ]
        ]);
    ?>

    <?php
        View::render('organisms/modals/modal-publication-download', [
            'image' => '/assets/images/placeholder/publication-1.png',
            'modalId' => 'modal-publication-download-single-chapter',
            'languageOptions' => [
                ['id' => 'pasto-1', 'value' => 'pasto', 'label' => 'Pasto'],
                ['id' => 'dari-1', 'value' => 'dari', 'label' => 'Dari'],
                ['id' => 'english-1', 'value' => 'en', 'label' => 'English'],
                ['id' => 'albanian-1', 'value' => 'albanian', 'label' => 'Albanian'],
                ['id' => 'arabic-1', 'value' => 'arabic', 'label' => 'Arabic'],
                ['id' => 'portuguese-1', 'value' => 'portuguese', 'label' => 'Portuguese']
            ],
            'chapters' => [
                ['title' => 'Lorem Ipsum Title Goes Here - English', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'en'],
            ]
        ]);
    ?>

    <?php
        View::render('organisms/modals/modal-publication-download', [
            'image' => '/assets/images/placeholder/publication-1.png',
            'modalId' => 'modal-publication-download-no-language',
            'languageOptions' => [],
            'chapters' => [
                ['title' => 'Lorem Ipsum Title Goes Here - English', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'en'],
                ['title' => 'Lorem Ipsum Title Goes Here - Pasto', 'metadata' => 'PDF (1.9 MB)', 'lang' => 'pasto'],
            ]
        ]);
    ?>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
