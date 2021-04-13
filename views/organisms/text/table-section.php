<?php use helpers\View; ?>


<section class="table-section">
    <div class="grid-container grid-x">
        <div class="cell large-10 large-offset-1 small-offset-1 small-10">
            <div class="heading h2 component-heading"><?= $heading ?? '' ?></div>

            <?php
                View::render('molecules/text/table', [
                    'tableStyle' => $tableStyle ?? '',
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
                            'Limya ELTAYEB',
                            'UNDP Resident Representative',
                            '<a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>'
                        ],
                        [
                            'Limya ELTAYEB',
                            'UNDP Resident Representative',
                            '<a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>'
                        ],
                        [
                            'Vladimir MALKAJ',
                            'Programme Specialist- Democratic Governance',
                            '<a href="" class="animated-underline link-item">limya.eltayeb@undp.org</a>'
                        ]
                    ]
                ]);
            ?>
        </div>
    </div>
</section>
