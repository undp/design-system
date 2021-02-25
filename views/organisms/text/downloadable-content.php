<?php use helpers\View; ?>


<section class="downloadable-content">
    <div class="grid-container">
        <div class="grid-x grid-margin-x scroll-track left-right delay-1">
            <div class="cell medium-6 large-3 large-offset-1">
                <?php
                View::render('molecules/text/download-item', [
                    'title' => 'Fact Sheet',
                    'image' => '/assets/images/placeholder/publication-1.png',
                    'btnText' => 'Download',
                    'btnIcon' => 'assets/images/icon-download.svg',
                    'attributes' => 'data-modal-trigger="modal-publication-download"'
                ]);
                ?>
            </div>
            <div class="cell medium-6 large-3">
                <?php
                View::render('molecules/text/download-item', [
                    'title' => 'Brochure',
                    'image' => '/assets/images/placeholder/publication-1.png',
                    'btnText' => 'Download',
                    'btnIcon' => 'assets/images/icon-download.svg',
                ]);
                ?>
            </div>
            <div class="cell large-4">
                <div class="grid-x grid-margin-x">
                    <div class="cell medium-6 large-12">
                        <?php
                        View::render('molecules/text/download-item', [
                            'title' => 'Legislative Guide for the Implementation of UNCAC',
                            'image' => false,
                            'btnText' => 'Download',
                            'btnIcon' => 'assets/images/icon-download.svg',
                            'attributes' => 'data-modal-trigger="modal-publication-download-no-image"'
                        ]);
                        ?>
                    </div>
                    <div class="cell medium-6 large-12">
                        <?php
                        View::render('molecules/text/download-item', [
                            'title' => 'Legislative Guide for the Implementation of UNCAC',
                            'image' => false,
                            'btnText' => 'Download',
                            'btnIcon' => 'assets/images/icon-download.svg',
                        ]);
                        ?>
                    </div>
                    <div class="cell medium-6 large-12">
                        <?php
                        View::render('molecules/text/download-item', [
                            'title' => 'Legislative Guide for the Implementation of UNCAC',
                            'image' => false,
                            'btnText' => 'Download',
                            'btnIcon' => 'assets/images/icon-download.svg',
                        ]);
                        ?>
                    </div>
                    <div class="cell medium-6 large-12">
                        <?php
                        View::render('molecules/text/download-item', [
                            'title' => 'Legislative Guide for the Implementation of UNCAC',
                            'image' => false,
                            'btnText' => 'Download',
                            'btnIcon' => 'assets/images/icon-download.svg',
                        ]);
                        ?>
                    </div>

                </div>
            </div>
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

