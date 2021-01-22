<?php use helpers\View; ?>

<div class="sdg-modal-content hide">
    <?php
        View::render('organisms/hero/sdg-deep-dive-hero', [
            'number' => '3',
            'title' => 'Good Health and Well-Being',
            'contentParagraphs' => [
                'We have made great progress against several leading causes of death and disease. Life expectancy has increased dramatically; infant and maternal mortality rates have declined, we’ve turned the tide on HIV and malaria deaths have halved.',
                'Good health is essential to sustainable development and the 2030 Agenda reflects the complexity and interconnectedness of the two. It takes into account widening economic and social inequalities, rapid urbanization, threats to the climate and the environment, the continuing burden of HIV and other infectious diseases, and emerging challenges such as noncommunicable diseases. Universal health coverage will be integral to achieving SDG 3, ending poverty and reducing inequalities. Emerging global health priorities not explicitly included in the SDGs, including antimicrobial resistance, also demand action.',
                'But the world is off-track to achieve the health-related SDGs. Progress has been uneven, both between and within countries. There’s a 31-year gap between the countries with the shortest and longest life expectancies. And while some countries have made impressive gains, national averages hide that many are being left behind. Multisectoral, rights-based and gender-sensitive approaches are essential to address inequalities and to build good health for all.'
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
                        'number' => 400,
                        'title' => 'Million',
                        'description' => 'At least 400 million people have no basic healthcare, and 40 percent lack social protection.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-3">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => 1.6,
                        'title' => 'Billion',
                        'description' => 'More than 1.6 billion people live in fragile settings where protracted crises, combined with weak national capacity to deliver basic health services, present a significant challenge to global health.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-4">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => 15,
                        'title' => 'Million',
                        'description' => 'By the end of 2017, 21.7 million people living with HIV were receiving antiretroviral therapy. Yet more than 15 million people are still waiting for treatment.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-5">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => 2,
                        'title' => 'Seconds',
                        'description' => 'Every 2 seconds someone aged 30 to 70 years dies prematurely from noncommunicable diseases - cardiovascular disease, chronic respiratory disease, diabetes or cancer.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-6">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => 7,
                        'title' => 'Million',
                        'description' => '7 million people die every year from exposure to fine particles in polluted air.'
                    ]) ?>
                </li>
                <li class="glide__slide sdg-card-container right-left delay-6">
                    <?php View::render('molecules/statistics-figures/stat-card', [
                        'number' => 1,
                        'title' => 'In 3',
                        'description' => 'More than one of every three women have experienced either physical or sexual violence at some point in their life resulting in both short- and long-term consequences for their physical, mental, and sexual and reproductive health.'
                    ]) ?>
                </li>
            </ul>
        </div>
    </div>

    <?php
        View::render('organisms/text/bulleted-list', [
            'heading' => 'Goal targets',
            'listItems' => [
                'By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births',
                'By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births',
                'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases',
                'By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being',
                'Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol',
                'By 2020, halve the number of global deaths and injuries from road traffic accidents',
                'By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes',
                'Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all',
                'By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination',
                'Strengthen the implementation of the World Health Organization Framework Convention on Tobacco Control in all countries, as appropriate',
                'Support the research and development of vaccines and medicines for the communicable and noncommunicable diseases that primarily affect developing countries, provide access to affordable essential medicines and vaccines, in accordance with the Doha Declaration on the TRIPS Agreement and Public Health, which affirms the right of developing countries to use to the full the provisions in the Agreement on Trade Related Aspects of Intellectual Property Rights regarding flexibilities to protect public health, and, in particular, provide access to medicines for all',
                'Substantially increase health financing and the recruitment, development, training and retention of the health workforce in developing countries, especially in least developed countries and small island developing States',
                'Strengthen the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks'
            ]
        ])
    ?>
    <?php View::render('organisms/content-cards/sdg-content-cards') ?>
</div>
