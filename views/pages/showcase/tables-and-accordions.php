<?php use helpers\View; ?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Molecules - Tables And Accordions']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>

<main class="components-index">

    <section class="other-inputs grid-container">
        <div class="grid-x grid-margin-x">

            <div class="cell medium-10 medium-offset-1 component-categories">
                <h5 class="heading h5">Table - Default</h5>

                <?php
                    View::render('molecules/text/table', [
                        'headings' => [
                            'Name', 'Title', 'Heading'
                        ],
                        'rows' => [
                            [
                                'Limya ELTAYEB',
                                'UNDP Resident Representative',
                                '<a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>'
                            ],
                            [
                                'Vladimir MALKAJ',
                                'Programme Specialist- Democratic Governance',
                                '<a href="" class="animated-underline link-item">vladimir.malkaj@undp.org</a>'
                            ]
                        ]
                    ]);
                ?>
            </div>

            <div class="cell medium-10 medium-offset-1 component-categories">
                <h5 class="heading h5">Table - Striped</h5>

                <?php
                    View::render('molecules/text/table', [
                        'tableStyle' => 'striped',
                        'headings' => [
                            'Name', 'Title', 'Heading'
                        ],
                        'rows' => [
                            [
                                'Limya ELTAYEB',
                                'UNDP Resident Representative',
                                '<a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>'
                            ],
                            [
                                'Vladimir MALKAJ',
                                'Programme Specialist- Democratic Governance',
                                '<a href="" class="animated-underline link-item">vladimir.malkaj@undp.org</a>'
                            ]
                        ]
                    ]);
                ?>
            </div>

            <div class="cell medium-10 medium-offset-1 component-categories">
                <h5 class="heading h5">Table - Bordered</h5>

                <?php
                    View::render('molecules/text/table', [
                        'tableStyle' => 'bordered',
                        'headings' => [
                            'Name', 'Title', 'Heading'
                        ],
                        'rows' => [
                            [
                                'Limya ELTAYEB',
                                'UNDP Resident Representative',
                                '<a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>'
                            ],
                            [
                                'Vladimir MALKAJ',
                                'Programme Specialist- Democratic Governance',
                                '<a href="" class="animated-underline link-item">vladimir.malkaj@undp.org</a>'
                            ]
                        ]
                    ]);
                ?>
            </div>

            <div class="cell medium-10 medium-offset-1 component-categories">
                <h5 class="heading h5">Accordion</h5>

                <?php View::render('organisms/text/faq'); ?>
            </div>
        </div>
    </section>

</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
