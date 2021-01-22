<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '6',
            'title' => 'Clean Water and Sanitization',
            'contentParagraphs' => [
                'Water scarcity affects more than 40 percent of people, an alarming figure that is projected to rise as temperatures do. Although 2.1 billion people have improved water sanitation since 1990, dwindling drinking water supplies are affecting every continent.',
                'More and more countries are experiencing water stress, and increasing drought and desertification is already worsening these trends. By 2050, it is projected that at least one in four people will suffer recurring water shortages.',
                'Safe and affordable drinking water for all by 2030 requires we invest in adequate infrastructure, provide sanitation facilities, and encourage hygiene. Protecting and restoring water-related ecosystems is essential.',
                'Ensuring universal safe and affordable drinking water involves reaching over 800 million people who lack basic services and improving accessibility and safety of services for over two billion.',
                'In 2015, 4.5 billion people lacked safely managed sanitation services (with adequately disposed or treated excreta) and 2.3 billion lacked even basic sanitation.'
            ],
            'imageUrl' => '/assets/images/placeholder/hero/sdg-deep-dive-hero.jpg',
            'imageAlt' => 'SDG Deep Dive image'
        ]);


        View::render('organisms/carousel/sdg-cards-slider', [
            'slides' => [
                [
                    'number' => '5.2',
                    'title' => 'Billion',
                    'description' => '71 percent of the global population, 5.2 billion people, had safely-managed drinking water in 2015, but 844 million people still lacked even basic drinking water.'
                ],
                [
                    'number' => '2.9',
                    'title' => 'Billion',
                    'description' => '39 percent of the global population, 2.9 billion people, had safe sanitation in 2015, but 2.3 billion people still lacked basic sanitation. 892 million people practiced open defecation.'
                ],
                [
                    'number' => 80,
                    'title' => 'Percent',
                    'description' => '80 percent of wastewater goes into waterways without adequate treatment.'
                ],
                [
                    'number' => 2,
                    'title' => 'Billion',
                    'description' => 'Water stress affects more than 2 billion people, with this figure projected to increase.'
                ],
                [
                    'number' => 80,
                    'title' => 'Percent',
                    'description' => '80 percent of countries have laid the foundations for integrated water resources management.'
                ],
                [
                    'number' => 70,
                    'title' => 'Percent',
                    'description' => 'The world has lost 70 percent of its natural wetlands over the last century.'
                ]
            ]
        ]);

        View::render('organisms/text/bulleted-list', [
            'heading' => 'Goal targets',
            'listItems' => [
                'By 2030, achieve universal and equitable access to safe and affordable drinking water for all',
                'By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations',
                'By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally',
                'By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity',
                'By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate',
                'By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes',
                'By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies',
                'Support and strengthen the participation of local communities in improving water and sanitation management'
            ]
        ]);


        View::render('organisms/content-cards/sdg-content-cards')
    ?>
</div>
