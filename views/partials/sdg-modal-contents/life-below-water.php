<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '14',
            'title' => 'Life Below Water',
            'contentParagraphs' => [
                'The world’s oceans – their temperature, chemistry, currents and life – drive global systems that make the Earth habitable for humankind. How we manage this vital resource is essential for humanity as a whole, and to counterbalance the effects of climate change.',
                'Over three billion people depend on marine and coastal biodiversity for their livelihoods. However, today we are seeing 30 percent of the world’s fish stocks overexploited, reaching below the level at which they can produce sustainable yields.',
                'Oceans also absorb about 30 percent of the carbon dioxide produced by humans, and we are seeing a 26 percent rise in ocean acidification since the beginning of the industrial revolution. Marine pollution, an overwhelming majority of which comes from land-based sources, is reaching alarming levels, with an average of 13,000 pieces of plastic litter to be found on every square kilometre of ocean.',
                'The SDGs aim to sustainably manage and protect marine and coastal ecosystems from pollution, as well as address the impacts of ocean acidification. Enhancing conservation and the sustainable use of ocean-based resources through international law will also help mitigate some of the challenges facing our oceans.'
            ],
            'imageUrl' => '/assets/images/placeholder/hero/sdg-deep-dive-hero.jpg',
            'imageAlt' => 'SDG Deep Dive image'
        ]);


        View::render('organisms/carousel/sdg-cards-slider', [
            'slides' => [
                [
                    'number' => 736,
                    'title' => 'Million',
                    'description' => '736 million people still live in extreme poverty.'
                ],
                [
                    'number' => 10,
                    'title' => 'Percent',
                    'description' => '10 percent of the world’s population live in extreme poverty, down from 36 percent in 1990.'
                ],
                [
                    'number' => 1.3,
                    'title' => 'Billion',
                    'description' => 'Some 1.3 billion people live in multidimensional poverty.'
                ],
                [
                    'number' => 50,
                    'title' => 'Percent',
                    'description' => 'Half of all people living in poverty are under 18.'
                ],
                [
                    'number' => '1',
                    'title' => 'In 10',
                    'description' => 'One person in every 10 is extremely poor.'
                ],
                [
                    'number' => '80',
                    'title' => 'Percent',
                    'description' => '80 percent of people living on less than $1.90 are in South Asia and sub-Saharan Africa.'
                ]
            ]
        ]);


        View::render('organisms/text/bulleted-list', [
            'heading' => 'Goal targets',
            'listItems' => [
                'By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions',
                'Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable',
                'By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance',
                'By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality',
                'By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters',
                'Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, in order to provide adequate and predictable means for developing countries, in particular least developed countries, to implement programmes and policies to end poverty in all its dimensions',
                'Create sound policy frameworks at the national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to support accelerated investment in poverty eradication actions',
            ]
        ]);


        View::render('organisms/content-cards/sdg-content-cards');
    ?>
</div>
