<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '9',
            'title' => 'Industry, Innovation and Infrastructure',
            'contentParagraphs' => [
                'By 2020, develop and operationalize a global strategy for youth employment and implement the Global Jobs Pact of the International Labour Organization',
                'Technological progress is also key to finding lasting solutions to both economic and environmental challenges, such as providing new jobs and promoting energy efficiency. Promoting sustainable industries, and investing in scientific research and innovation, are all important ways to facilitate sustainable development.',
                'More than 4 billion people still do not have access to the Internet, and 90 percent are from the developing world. Bridging this digital divide is crucial to ensure equal access to information and knowledge, as well as foster innovation and entrepreneurship.'
            ],
            'imageUrl' => '/assets/images/placeholder/hero/sdg-deep-dive-hero.jpg',
            'imageAlt' => 'SDG Deep Dive image'
        ])
    ?>

    <div class="grid-x grid-padding-x cards-slider-container">
        <div class="bullets-container">
            <div class="glide__bullets" data-glide-el="controls[nav]">
                <div class="control-slider"></div>
                <button class="glide__bullet" data-glide-dir="=0" aria-label="Slide 1">
                    <span class="show-for-sr">Slide 1</span>
                </button>
                <button class="glide__bullet" data-glide-dir="=1" aria-label="Slide 2">
                    <span class="show-for-sr">Slide 2</span>
                </button>
                <button class="glide__bullet" data-glide-dir="=2" aria-label="Slide 3">
                    <span class="show-for-sr">Slide 3</span>
                </button>
                <button class="glide__bullet" data-glide-dir="=3" aria-label="Slide 4">
                    <span class="show-for-sr">Slide 4</span>
                </button>
                <button class="glide__bullet" data-glide-dir="=4" aria-label="Slide 5">
                    <span class="show-for-sr">Slide 5</span>
                </button>
            </div>
        </div>

        <div class="glide__track cards-slider" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide sdg-card-container right-left delay-1">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => '2.3',
                        'title' => 'Billion',
                        'description' => 'Worldwide, 2.3 billion people lack access to basic sanitation.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-3">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => 40,
                        'title' => 'Percent',
                        'description' => 'In some low-income African countries, infrastructure constraints cut businesses’ productivity by around 40 percent.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-4">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => '2.6',
                        'title' => 'Billion',
                        'description' => '2.6 billion people in developing countries do not have access to constant electricity.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-5">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => 90,
                        'title' => 'Percent',
                        'description' => 'More than 4 billion people still do not have access to the Internet; 90 percent of them are in the developing world.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-6">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => '2.3',
                        'title' => 'Billion',
                        'description' => 'The renewable energy sectors currently employ more than 2.3 million people; the number could reach 20 million by 2030.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-6">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => 30,
                        'title' => 'Percent',
                        'description' => 'In developing countries, barely 30 percent of agricultural products undergo industrial processing, compared to 98 percent high-income countries.'
                    ]) ?>
                </li>
            </ul>
        </div>
    </div>

    <?php
        View::render('organisms/text/bulleted-list', [
            'heading' => 'Goal targets',
            'listItems' => [
                'Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all',
                'Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries',
                'Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets',
                'By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities',
                'Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending',
                'Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, least developed countries, landlocked developing countries and small island developing States 18',
                'Support domestic technology development, research and innovation in developing countries, including by ensuring a conducive policy environment for, inter alia, industrial diversification and value addition to commodities',
                'Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries by 2020'
            ]
        ])
    ?>
    <?php View::render('organisms/content-cards/sdg-content-cards') ?>
</div>
