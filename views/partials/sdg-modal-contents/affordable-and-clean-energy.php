<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '7',
            'title' => 'Affordable and Clean Energy',
            'contentParagraphs' => [
                'Between 2000 and 2018, the number of people with electricity increased from 78 to 90 percent, and the numbers without electricity dipped to 789 million.',
                'Yet as the population continues to grow, so will the demand for cheap energy, and an economy reliant on fossil fuels is creating drastic changes to our climate.',
                'Investing in solar, wind and thermal power, improving energy productivity, and ensuring energy for all is vital if we are to achieve SDG 7 by 2030.',
                'Expanding infrastructure and upgrading technology to provide clean and more efficient energy in all countries will encourage growth and help the environment.  '
            ],
            'imageUrl' => '/assets/images/placeholder/hero/sdg-deep-dive-hero.jpg',
            'imageAlt' => 'SDG Deep Dive image'
        ]);


        View::render('organisms/carousel/sdg-cards-slider', [
            'slides' => [
                [
                    'number' => 73,
                    'title' => 'Percent',
                    'description' => 'Energy is by far the main contributor to climate change. It accounts for 73 percent of human-caused greenhouse gases.'
                ],
                [
                    'number' => 73,
                    'title' => 'Percent',
                    'description' => 'Energy is by far the main contributor to climate change. It accounts for 73 percent of human-caused greenhouse gases.'
                ],
                [
                    'number' => 40,
                    'title' => 'Percent',
                    'description' => 'Energy efficiency is key; the right efficiency policies could enable the world to achieve more than 40 percent of the emissions cuts needed to reach its climate goals without new technology.'
                ],
                [
                    'number' => '2.8',
                    'title' => 'Billion',
                    'description' => 'Almost a third of the world’s population—2.8 billion—rely on polluting and unhealthy fuels for cooking.'
                ],
                [
                    'number' => '17.5',
                    'title' => 'Percent',
                    'description' => 'As of 2017, 17.5 percent of power was generated through renewable sources.'
                ],
                [
                    'number' => 18,
                    'title' => 'Million',
                    'description' => 'The renewable energy sector employed a record 11.5 million people in 2019. The changes needed in energy production and uses to achieve the Paris Agreement target of limiting the rise in temperature to below 2C can create 18 million jobs.'
                ]
            ]
        ]);


        View::render('organisms/text/bulleted-list', [
            'heading' => 'Goal targets',
            'listItems' => [
                'By 2030, ensure universal access to affordable, reliable and modern energy services',
                'By 2030, increase substantially the share of renewable energy in the global energy mix',
                'By 2030, double the global rate of improvement in energy efficiency',
                'By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology',
                'By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries, in particular least developed countries, small island developing States, and land-locked developing countries, in accordance with their respective programmes of support'
            ]
        ]);


        View::render('organisms/content-cards/sdg-content-cards')
    ?>
</div>
