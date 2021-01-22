<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '11',
            'title' => 'Sustainable Cities and Communities',
            'contentParagraphs' => [
                'More than half of us  live in cities. By 2050, two-thirds of all humanity—6.5 billion people—will be urban. Sustainable development cannot be achieved without significantly transforming the way we build and manage our urban spaces.',
                'The rapid growth of cities—a result of rising populations and increasing migration—has led to a boom in mega-cities, especially in the developing world, and slums are becoming a more significant feature of urban life.',
                'Making cities sustainable means creating career and business opportunities, safe and affordable housing, and building resilient societies and economies. It involves investment in public transport, creating green public spaces, and improving urban planning and management in participatory and inclusive ways.'
            ],
            'imageUrl' => '/assets/images/placeholder/hero/sdg-deep-dive-hero.jpg',
            'imageAlt' => 'SDG Deep Dive image'
        ]);


        View::render('organisms/carousel/sdg-cards-slider', [
            'slides' => [
                [
                    'number' => 4.2,
                    'title' => 'Billion',
                    'description' => 'In 2018, 4.2 billion people, 55 percent of the world’s population, lived in cities. By 2050, the urban population is expected to reach 6.5 billion.'
                ],
                [
                    'number' => 3,
                    'title' => 'Percent',
                    'description' => 'Cities occupy just 3 percent of the Earth’s land but account for 60 to 80 percent of energy consumption and at least 70 percent of carbon emissions.'
                ],
                [
                    'number' => 828,
                    'title' => 'Million',
                    'description' => '828 million people are estimated to live in slums, and the number is rising.'
                ],
                [
                    'number' => 33,
                    'title' => '',
                    'description' => 'In 1990, there were 10 cities with 10 million people or more; by 2014, the number of mega-cities rose to 28, and was expected to reach 33 by 2018. In the future, 9 out of 10 mega-cities will be in the developing world.'
                ],
                [
                    'number' => 90,
                    'title' => 'Percent',
                    'description' => 'In the coming decades, 90 percent of urban expansion will be in the developing world.'
                ],
                [
                    'number' => 80,
                    'title' => 'Percent',
                    'description' => 'The economic role of cities is significant. They generate about 80 percent of the global GDP.'
                ]
            ]
        ]);

        View::render('organisms/text/bulleted-list', [
            'heading' => 'Goal targets',
            'listItems' => [
                'By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums',
                'By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons',
                'By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries',
                'Strengthen efforts to protect and safeguard the world’s cultural and natural heritage',
                'By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations',
                'By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management',
                'By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities',
                'Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning',
                'By 2020, substantially increase the number of cities and human settlements adopting and implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai Framework for Disaster Risk Reduction 2015-2030, holistic disaster risk management at all levels',
                'Support least developed countries, including through financial and technical assistance, in building sustainable and resilient buildings utilizing local materials'
            ]
        ]);


        View::render('organisms/content-cards/sdg-content-cards');
    ?>
</div>
