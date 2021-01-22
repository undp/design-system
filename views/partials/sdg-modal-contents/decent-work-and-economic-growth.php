<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '8',
            'title' => 'Decent Work and Economic Growth',
            'contentParagraphs' => [
                'Over the past 25 years the number of workers living in extreme poverty has declined dramatically, despite the lasting impact of the 2008 economic crisis and global recession. In developing countries, the middle class now makes up more than 34 percent of total employment – a number that has almost tripled between 1991 and 2015.',
                'However, as the global economy continues to recover we are seeing slower growth, widening inequalities, and not enough jobs to keep up with a growing labour force. According to the International Labour Organization, more than 204 million people were unemployed in 2015.',
                'The SDGs promote sustained economic growth, higher levels of productivity and technological innovation. Encouraging entrepreneurship and job creation are key to this, as are effective measures to eradicate forced labour, slavery and human trafficking. With these targets in mind, the goal is to achieve full and productive employment, and decent work, for all women and men by 2030.',
            ],
            'imageUrl' => '/assets/images/placeholder/hero/sdg-deep-dive-hero.jpg',
            'imageAlt' => 'SDG Deep Dive image'
        ]);


        View::render('organisms/carousel/sdg-cards-slider', [
            'slides' => [
                [
                    'number' => 4,
                    'title' => 'Percent',
                    'description' => 'An estimated 172 million people worldwide were without work in 2018 - an unemployment rate of 5 percent.'
                ],
                [
                    'number' => 1,
                    'title' => 'Million',
                    'description' => 'As a result of an expanding labour force, the number of unemployed is projected to increase by 1 million every year and reach 174 million by 2020.'
                ],
                [
                    'number' => 700,
                    'title' => 'Million',
                    'description' => 'Some 700 million workers lived in extreme or moderate poverty in 2018, with less than US$3.20 per day.'
                ],
                [
                    'number' => 48,
                    'title' => 'Percent',
                    'description' => 'Women’s participation in the labour force stood at 48 per cent in 2018, compared with 75 percent for men. Around 3 in 5 of the 3.5 billion people in the labour force in 2018 were men.'
                ],
                [
                    'number' => 2,
                    'title' => 'Million',
                    'description' => 'Overall, 2 billion workers were in informal employment in 2016, accounting for 61 per cent of the world’s workforce.'
                ],
                [
                    'number' => 85,
                    'title' => 'Million',
                    'description' => 'Many more women than men are underutilized in the labour force—85 million compared to 55 million.'
                ]
            ]
        ]);


        View::render('organisms/text/bulleted-list', [
            'heading' => 'Goal targets',
            'listItems' => [
                'Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries',
                'Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors',
                'Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services',
                'Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-year framework of programmes on sustainable consumption and production, with developed countries taking the lead',
                'By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value',
                'By 2020, substantially reduce the proportion of youth not in employment, education or training',
                'Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms',
                'Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment',
                'By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products',
                'Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all',
                'Increase Aid for Trade support for developing countries, in particular least developed countries, including through the Enhanced Integrated Framework for Trade-Related Technical Assistance to Least Developed Countries',
                'By 2020, develop and operationalize a global strategy for youth employment and implement the Global Jobs Pact of the International Labour Organization'
            ]
        ]);

        View::render('organisms/content-cards/sdg-content-cards')
    ?>
</div>
