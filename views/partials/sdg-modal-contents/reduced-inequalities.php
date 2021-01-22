<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '10',
            'title' => 'Reduced Inequalities',
            'contentParagraphs' => [
                'Income inequality is on the rise—the richest 10 percent have up to 40 percent of global income whereas the poorest 10 percent earn only between 2 to 7 percent. If we take into account population growth inequality in developing countries, inequality has increased by 11 percent.',
                'Income inequality has increased in nearly everywhere in recent decades, but at different speeds. It’s lowest in Europe and highest in the Middle East.',
                'These widening disparities require sound policies to empower lower income earners, and promote economic inclusion of all regardless of sex, race or ethnicity.',
                'Income inequality requires global solutions. This involves improving the regulation and monitoring of financial markets and institutions, encouraging development assistance and foreign direct investment to regions where the need is greatest. Facilitating the safe migration and mobility of people is also key to bridging the widening divide.'
            ],
            'imageUrl' => '/assets/images/placeholder/hero/sdg-deep-dive-hero.jpg',
            'imageAlt' => 'SDG Deep Dive image'
        ]);


        View::render('organisms/carousel/sdg-cards-slider', [
            'slides' => [
                [
                    'number' => 22,
                    'title' => 'Percent',
                    'description' => 'In 2016, 22 percent of global income was received by the top 1 percent compared with 10 percent of income for the bottom 50 percent.'
                ],
                [
                    'number' => 16,
                    'title' => 'Percent',
                    'description' => 'In 1980, the top one percent had 16 percent of global income. The bottom 50 percent had 8 percent of income.'
                ],
                [
                    'number' => 33,
                    'title' => 'Percent',
                    'description' => 'Economic inequality is largely driven by the unequal ownership of capital. Since 1980, very large transfers of public to private wealth occurred in nearly all countries. The global wealth share of the top 1 percent was 33 percent in 2016.'
                ],
                [
                    'number' => 39,
                    'title' => 'Percent',
                    'description' => 'Under "business as usual", the top 1 percent global wealth will reach 39 percent by 2050.'
                ],
                [
                    'number' => 2,
                    'title' => 'Times',
                    'description' => 'Women spend, on average, twice as much time on unpaid housework as men.'
                ],
                [
                    'number' => 60,
                    'title' => 'Percent',
                    'description' => 'Women have as much access to financial services as men in just 60 percent of the countries assessed and to land ownership in just 42 percent of the countries assessed.'
                ]
            ]
        ]);


        View::render('organisms/text/bulleted-list', [
            'heading' => 'Goal targets',
            'listItems' => [
                'By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average',
                'By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status',
                'Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard',
                'Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality',
                'Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations',
                'Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions',
                'Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies',
                'Implement the principle of special and differential treatment for developing countries, in particular least developed countries, in accordance with World Trade Organization agreements',
                'Encourage official development assistance and financial flows, including foreign direct investment, to States where the need is greatest, in particular least developed countries, African countries, small island developing States and landlocked developing countries, in accordance with their national plans and programmes',
                'By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5 per cent'
            ]
        ]);


        View::render('organisms/content-cards/sdg-content-cards');
    ?>
</div>
