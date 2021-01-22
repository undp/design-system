<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '2',
            'title' => 'Zero Hunger',
            'contentParagraphs' => [
                'The number of undernourished people has dropped by almost half in the past two decades because of rapid economic growth and increased agricultural productivity. Many developing countries that used to suffer from famine and hunger can now meet their nutritional needs. Central and East Asia, Latin America and the Caribbean have all made huge progress in eradicating extreme hunger.',
                'Unfortunately, extreme hunger and malnutrition remain a huge barrier to development in many countries. There are 821 million people estimated to be chronically undernourished as of 2017, often as a direct consequence of environmental degradation, drought and biodiversity loss. Over 90 million children under five are dangerously underweight. Undernourishment and severe food insecurity appear to be increasing in almost all regions of Africa, as well as in South America.',
                'The SDGs aim to end all forms of hunger and malnutrition by 2030, making sure all people–especially children–have sufficient and nutritious food all year. This involves promoting sustainable agricultural, supporting small-scale farmers and equal access to land, technology and markets. It also requires international cooperation to ensure investment in infrastructure and technology to improve agricultural productivity.',
            ],
            'imageUrl' => '/assets/images/placeholder/hero/sdg-deep-dive-hero.jpg',
            'imageAlt' => 'SDG Deep Dive image'
        ]);


        View::render('organisms/carousel/sdg-cards-slider', [
            'slides' => [
                [
                    'number' => 821,
                    'title' => 'Million',
                    'description' => 'The number of undernourished people reached 821 million in 2017.'
                ],
                [
                    'number' => 63,
                    'title' => 'Percent',
                    'description' => 'In 2017 Asia accounted for nearly two thirds, 63 percent, of the world’s hungry.'
                ],
                [
                    'number' => 22,
                    'title' => 'Percent',
                    'description' => 'Nearly 151 million children under five, 22 percent, were still stunted in 2017.'
                ],
                [
                    'number' => 1,
                    'title' => 'In 8',
                    'description' => 'More than 1 in 8 adults is obese.'
                ],
                [
                    'number' => 1,
                    'title' => 'In 3',
                    'description' => '1 in 3 women of reproductive age is anemic.'
                ],
                [
                    'number' => '26',
                    'title' => 'Percent',
                    'description' => '26 percent of workers are employed in agriculture.'
                ]
            ]
        ]);



        View::render('organisms/text/bulleted-list', [
            'heading' => 'Goal targets',
            'listItems' => [
                'By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round',
                'By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons',
                'By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment',
                'By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality',
                'By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed',
                'Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries',
                'Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round',
                'Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility.'
            ]
        ]);


        View::render('organisms/content-cards/sdg-content-cards');
    ?>
</div>
