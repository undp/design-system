<?php

use helpers\Svg;
use helpers\View;

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'UNDP - Single Publication']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>

<div class="single-publication">
    <?php
        View::render('organisms/single-publication/modal-publication-download', [
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

    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell large-offset-1 large-4 medium-6 medium-offset-0">
                <?php
                    View::render('partials/breadcrumb', [
                        'links' => [
                            ['link' => '/single-publication', 'name' => 'Publications']
                        ],
                        'classes' => 'accent-red'
                    ]);

                    View::render('molecules/cards/publication-featured-card', [
                        'image' => '/assets/images/placeholder/publication-1.png'
                    ]);
                ?>
            </div>
            <div class="cell large-offset-1 medium-6">
                <?php
                    View::render('organisms/single-publication/featured-publication-text', [
                        'publicationDate' => 'Feb 2, 2021',
                        'title' => 'Towards a Multidimensional Vulnerability Index',
                        'descriptionText' => '
                            Small Island Developing States (SIDS) face severe structural challenges due to their remoteness, 
                            economic concentration, and dependence on external flows such as remittances, foreign direct 
                            investment and tourism revenues. The COVID-19 pandemic has greatly exacerbated these vulnerabilities 
                            by restricting travel, collapsing investment and tourism, and weakening the economies from which 
                            remittances are sent. However, most SIDS are still not eligible for concessional financing due to 
                            their classification as middle or high-income countries.<br><br>

                            This paper constructs a multidimensional vulnerability index (MVI) to account for both long-term 
                            structural vulnerabilities as well as the recent weaknesses uncovered by the pandemic. Using 11 
                            indicators for 128 countries (including 34 SIDS), the MVI demonstrates that all but five SIDS are 
                            far more vulnerable than their income level would suggest. Using the MVI, non-LDC SIDS could save 
                            close to 1.5% of their GDP per annum in interest payments. It contributes to the debate on vulnerability 
                            measurement by contrasting a narrow focus on economic or environmental vulnerability with a multi-dimensional 
                            approach to assessing countries’ structural vulnerabilities to a variety of shocks. This analysis implies 
                            the urgent need to reconsider eligibility for concessional financing to SIDS on vulnerability rather than 
                            just income criteria.
                        ',
                        'tags' => [
                            ['text' => 'Africa', 'link' => '#'],
                            ['text' => 'Small island developing states', 'link' => '#'],
                            ['text' => 'Development Finance', 'link' => '#'],
                            ['text' => 'Africa', 'link' => '#'],
                            ['text' => 'Small island developing states', 'link' => '#'],
                            ['text' => 'Development Finance', 'link' => '#'],
                        ]
                    ]);
                ?>


                <div class="related-publications" data-load-step="8" data-view-more data-scroll-up>
                    <div class="heading h2 related-title">Related Publications</div>

                    <div class="grid-x grid-margin-x related-items-content cards-container">
                        <?php View::render('organisms/single-publication/publication-cards'); ?>
                    </div>

                    <div class="cta-button flex-container">
                        <button class="btn blue view-more" data-view-more-btn>
                            View More
                        </button>
                    </div>

                    <div class="scroll-up" data-scroll-btn>
                        <?php Svg::render('angle-right') ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
