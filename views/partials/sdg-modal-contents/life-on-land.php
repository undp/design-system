<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '15',
            'title' => 'Life on Land',
            'contentParagraphs' => [
                'Human life depends on the earth as much as the ocean for our sustenance and livelihoods. Plant life provides 80 percent of the human diet, and we rely on agriculture as an important economic resources. Forests cover 30 percent of the Earth’s surface, provide vital habitats for millions of species, and important sources for clean air and water, as well as being crucial for combating climate change.',
                'Every year, 13 million hectares of forests are lost, while the persistent degradation of drylands has led to the desertification of 3.6 billion hectares, disproportionately affecting poor communities.',
                'While 15 percent of land is protected, biodiversity is still at risk. Nearly 7,000 species of animals and plants have been illegally traded. Wildlife trafficking not only erodes biodiversity, but creates insecurity, fuels conflict, and feeds corruption.',
                'Urgent action must be taken to reduce the loss of natural habitats and biodiversity which are part of our common heritage and support global food and water security, climate change mitigation and adaptation, and peace and security.'
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
