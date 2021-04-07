<?php

use helpers\View;

$imgPath = '../../../assets/images/placeholder/article-deepdive'

?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Sierra Leone - Article']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/nav') ?>
<?php View::render('organisms/article-deepdive/navigation-progress') ?>

<main class="article-deepdive overflow-hidden">

    <section class="grid-container scroll-track left-right delay-1">
        <div class="grid-x overflow-hidden">

            <div class="cell small-12 large-9 large-offset-1">
                <?php
                View::render('partials/breadcrumb', [
                    'links' => [
                        ['link' => '/press-centre', 'name' => 'Press Centre'],
                        ['link' => '/press-centre/articles', 'name' => 'Articles'],
                        ['link' => '/press-centre/articles/2020', 'name' => '2020'],
                    ],
                    'classes' => 'accent-red'
                ])
                ?>
            </div>
        </div>
    </section>

    <?php
    View::render('organisms/article-deepdive/headings', [
        'title' => '
            Moyamba and Pujehun Districts score joint UNDP, WFP-supported project 80% for Peacebuilding
            Project’s Success amidst COVID-19
        ',
        'postedDate' => 'November 19, 2020'
    ]);


    View::render('molecules/photo/image-with-caption', [
        'image' => "$imgPath/article-deepdive-featured-image.png",
        'caption' => '
            Jitta Kanneh, Mammy Queen of Makpele Chiefdom, at one of the swamp-rice development 
            livelihoods for peace initiative of the PBF project
        ',
        'imageAuthor' => 'UNDP Taiwan/Jason Smith',
        'classes' => 'cover-image'
    ]);

    View::render('organisms/article-deepdive/authors', [
        'authors' => [
            [
                'image' => "$imgPath/author-jane-doe.png",
                'name' => 'Jane Doe',
                'title' => 'Climate Investment Platform Global Lead and Senior Principal Advisor for Small Island Developing States',
                'pageLink' => '/author-page',
                'organization' => 'Organization'
            ]
        ]
    ]);


    View::render('organisms/article-deepdive/authors', [
        'authors' => [
            [
                'image' => "$imgPath/author-jane-doe.png",
                'name' => 'Jane Doe',
                'title' => 'Climate Investment Platform Global Lead and Senior Principal Advisor for Small Island Developing States',
                'pageLink' => '/author-page',
                'organization' => 'Organization'
            ],
            [
                'image' => "$imgPath/john-smith-author.png",
                'name' => 'John Smith',
                'title' => 'UN Assistant Secretary-General, UNDP Assistant Administrator and Director of Bureau for Policy and Programme Support',
                'pageLink' => '/author-page',
                'organization' => 'Organization'
            ],
            [
                'image' => "$imgPath/john-smith-author.png",
                'name' => 'John Smith',
                'title' => 'Climate Investment Platform Global Lead and Senior Principal Advisor for Small Island Developing States',
                'pageLink' => '/author-page',
                'organization' => 'Organization'
            ]
        ]
    ]);


    View::render('organisms/article-deepdive/authors', [
        'authors' => [
            [
                'image' => "$imgPath/author-jane-doe.png",
                'name' => 'Jane Doe',
                'title' => 'UN Assistant Secretary-General, UNDP Assistant Administrator and Director of Bureau for Policy and Programme Support',
                'pageLink' => '/author-page',
                'organization' => 'Organization'
            ],
            [
                'image' => "$imgPath/john-smith-author.png",
                'name' => 'John Smith',
                'title' => 'Climate Investment Platform Global Lead and Senior Principal Advisor for Small Island Developing States',
                'pageLink' => '/author-page',
                'organization' => 'Organization'
            ],
            [
                'image' => "$imgPath/john-smith-author.png",
                'name' => 'John Smith',
                'title' => 'UN Assistant Secretary-General, UNDP Assistant Administrator and Director of Bureau for Policy and Programme Support',
                'pageLink' => '/author-page',
                'organization' => 'Organization'
            ],
            [
                'image' => "$imgPath/john-smith-author.png",
                'name' => 'John Smith',
                'title' => 'Climate Investment Platform Global Lead and Senior Principal Advisor for Small Island Developing States',
                'pageLink' => '/author-page',
                'organization' => 'Organization'
            ],
        ]
    ]);


    View::render('organisms/article-deepdive/article-text', [
        'paragraphs' => [
            [
                'text' => 'For fostering Peace and Social Cohesion in Pujehun and Moyamba districts, communities score 
                the Government of Sierra Leone, the United Nations Development Programme (UNDP) and the World Food 
                Programme (WFP) over 80% in the Multi-Stakeholder Project supported by the Peacebuilding Fund (PBF).'
            ],
            [

                'text' => 'Residents (youth, women, chiefs and other district and chiefdom authorities) of Malen and
                 Makpele chiefdoms of Pujehun District and of Lower Banta and Upper Banta Chiefdoms in Moyamba district 
                 recently rated the Government of Sierra Leone (GoSL), UNDP and WFP Multi Stakeholder Platform (MSP) Project
                 “over 80% successful” as a resource based and local conflict resolution mechanism that promotes peace and social 
                 cohesion. This finding was revealed by district stakeholders during a two-day spot-check visit to the project 
                 chiefdoms led by UNDP’s Resident Representative-Dr. Samuel Doe, where his team engaged with community members, 
                 local and traditional leaders of the areas to learn about the outcomes of the project.'
            ],
        ],
        'twoColumnParagraphs' => [
            [
                'text' => 'For fostering Peace and Social Cohesion in Pujehun and Moyamba districts, communities score 
                the Government of Sierra Leone, the United Nations Development Programme (UNDP) and the World Food 
                Programme (WFP) over 80% in the Multi-Stakeholder Project supported by the Peacebuilding Fund (PBF).'
            ],
            [

                'text' => 'Residents (youth, women, chiefs and other district and chiefdom authorities) of Malen and
                 Makpele chiefdoms of Pujehun District and of Lower Banta and Upper Banta Chiefdoms in Moyamba district 
                 recently rated the Government of Sierra Leone (GoSL), UNDP and WFP Multi Stakeholder Platform (MSP) Project
                 “over 80% successful” as a resource based and local conflict resolution mechanism that promotes peace and social 
                 cohesion. This finding was revealed by district stakeholders during a two-day spot-check visit to the project 
                 chiefdoms led by UNDP’s Resident Representative-Dr. Samuel Doe, where his team engaged with community members, 
                 local and traditional leaders of the areas to learn about the outcomes of the project.'
            ]
        ]
    ]);


    View::render('molecules/callouts/callout', [
        'background' => 'green',
        'quoteText' => 'It’s almost one year now, we have not witnessed road blockades or any act of violence in the Pujehun District
            emanating from land related disputes or dissatisfied youth groups or a community member. We are grateful to
            UNDP and WFP and the Government of Sierra Leone.',
        'quoteAuthor' => '- Jitta Kanneh, Mammy Queen of Makpele Chiefdom.'
    ]);

    View::render('molecules/photo/image-with-caption', [
        'image' => "$imgPath/image-full.jpg"
    ]);

    View::render('organisms/article-deepdive/article-text', [
        'paragraphs' => [
            [
                'text' => 'Communities of Moyamba and Pujehun Districts share common socio-economic activities, and both 
                districts are recognized for the abundance of natural-resource wealth hence experience a high level of 
                operations by international large-scale mining and agricultural commercial companies. However, the two 
                districts are among the poorest of the poor in Sierra Leone which ranks at the tail end of development globally. 
                Based on this background and a history of war and under development, there have been frequent unrests between t
                he communities and the multinational companies investing in the areas, as well as among communities and their 
                local leadership.'
            ],
            [

                'text' => 'Courtesy of the UN Peacebuilding Fund, “In Malen Chiefdom, the multi-stakeholder
                 project is bringing all parties together. Community people are trusting each other again and t
                 he Grievance Redress Committees (GRC) is providing opportunities to discuss grievances, and stakeholders’ 
                 views are sought on how they would like community matters to be taken forward.” According to Chief S.R Moiguah, 
                 the Chiefdom Speaker for Malen Chiefdom.
'
            ],
            [

                'text' => '<a href="">The project was launched at the end of 2019</a>, UNDP and WFP through the Government of Sierra Leone
                 launched the “Mitigating Localized Resources-Based Conflicts and Increasing Community Resilience” project 
                 piloted in Pujehun and Moyamba districts. Prior to this project, findings showed that the two districts were 
                 characterized by violent social unrest and land conflicts and overall deteriorating relationships between 
                 communities and multinational companies investing in the large-scale agriculture and mining sectors in these 
                 communities. The project thus seeks to promote peace and social cohesion in these areas through a combination 
                 of peace dialogues, through grievance redress committees and community policing and by supporting sustainable 
                 agricultural as well as creation of income-generating opportunities for the people.
'
            ],
        ],

        'headingText' => 'Some achievements of the project include the following:',

        'listElements' => [
            [
                'text' => 'Helping to ensure land acquisition and land use processes are more inclusive and aligned with 
                policy frameworks. A Land Degradation Assessment completed by the Sierra Leone Agricultural Research 
                Institute (SLARI) across the targeted chiefdoms and districts indicates significant forest degradation 
                informed by indigenous perceptions in the four chiefdoms and backed by empirical evidence obtained from 
                Landsat imagery analysed at 2000 and 2020. Forest loss is mainly attributed to the combined influence of 
                local activities (subsistence farming, lumbering, and charcoal production); mining (in the case of Lower 
                and Upper Banta); and expansions in oil palm plantations (more intense in Malen than in Mapkele). Indigenous 
                perceptions suggest that the land tenure systems are highly monopolized by local authorities and compensations 
                or surface rents are grossly inadequate to provide sustainable and alternative livelihoods after land dispossession. 
                The attendant surplus labour, poverty and food insecurity have been major triggers of dissatisfaction 
                and conflict in these communities. Moreover, Chemical analysis of water samples proved that water bodies in 
                mining localities are more polluted than those in non-mining communities. Results from Malen showed that soil 
                and water samples had higher pollutants than those in Makpele.
'
            ],
            [

                'text' => 'Supporting the establishment of effective stakeholder engagement and dialogue mechanism 
                (landowners, local authorities, women and youths) in land tenure and in land deal negotiations, and 
                sensitization on company operations. Employment opportunities for indigenes and the delivery of corporate 
                social responsibilities are perceived by the communities as grossly inadequate in view of their expectations. 
                Labour intensive and menial jobs are open to indigenes due, in part, to their lack of qualification for 
                technical and administrative jobs that attract better salaries. Communities in operational areas of mining 
                and agricultural companies complained of serious challenges in accessing social amenities like healthcare, 
                education, and safe drinking water.

'
            ],
            [

                'text' => 'The project has implemented Multi-Stakeholders Platform (MSP) meetings in the two districts
                 informed by feedback from the subcommittee set up by the MSP to follow up on challenges of target communities. 
                 Community grievance redress meetings and dialogues keep going on in the two districts.

'
            ],

            [

                'text' => 'The project also incorporates the livelihoods support approach for sustaining peace. Therefore, 
                climate-smart agricultural practices are being maximized with high yielding rice cultivation taking place 
                in 31 inland valley swamps managed by 31 Farmer Groups comprising of 588 females and 1,269 males who have 
                also benefited from trainings in climate-smart agricultural practices, rice seeds, cash for work and farming 
                tools all provided by the Peacebuilding Fund. This livelihood support is also giving assurance to food 
                security whilst supplementing the districts’ popular root crops such as cassava and sweet potato.  

'
            ],
        ],
    ]);

    View::render('molecules/photo/article-gallery', [
        'images' => [
            "$imgPath/gallery_image01.jpg",
            "$imgPath/gallery_image02.jpg",
            "$imgPath/gallery_image03.jpg",
        ]
    ]);


    View::render('organisms/article-deepdive/article-text', [
        'paragraphs' => [
            [
                'text' => 'A year later from the launch of the project, a joint team from UNDP and WFP led by the UNDP 
                Resident Representative Dr. Samuel Doe visited the project sites and communities to assess progress.
                 Indeed, community members attested that, the social unrests and resource based conflicts have significantly 
                 reduced that in the one year of the project’s implementation through the Local Civil Society – Fambul Tok, 
                 they have not experienced any violence conflicts but rather resort to dialogue for conflict resolution while 
                 investing time in the agricultural projects established by the project.'
            ],

        ],
    ]);

    View::render('molecules/callouts/callout', [
        'background' => 'transparent',
        'quoteText' => 'Our recent field engagements with chiefdom stakeholders and grassroot members have showed that whatever 
        tool our implementing partner-Fambul Tok International is using to engage the MSP districts of Pujehun and Moyamba 
        seems to be working. We implore our donors and we hope they (donor) can also come to these communities and boost what
         has already been started.',
    ]);

    View::render('organisms/article-deepdive/article-text', [
        'paragraphs' => [
            [
                'text' => 'The Government of Sierra Leone’s national development strategy and the Truth and Reconciliation 
                Commission report after the country’s civil war both identify livelihood support as a positive driver for 
                building and sustaining peace.'
            ],
            [

                'text' => 'Sustaining peace is the avenue to achieving the sustainable development goals…development starts 
                with peace and social cohesion and securing stable livelihoods is what will bind peace and development!” 
                says Dr. Samuel Doe, UNDP Resident Representative in Sierra Leone.'
            ],
            [

                'text' => 'Indeed, the people and communities of Moyamba and Pujehun side with the UNDP Resident Representative 
                hence rate the project’s success at 80%.according to Kadiatu Kanneh, a single mother of two benefiting
                 from the project the 20% is left out because “we still lack facilitation to further process the harvested 
                 rice. We are starting to harvest the rice three times a year and it is a lot so, we need rice dryers and 
                 processors and storage facilities”. She believes these facilities will complete the value chain for their 
                 community to better rip from the project.'
            ],
        ],
    ]);


    View::render('molecules/photo/image-with-caption', [
        'imageSize' => 'medium',
        'image' => "$imgPath/article-deepdive-featured-image--medium.jpg",
        'caption' => '
            Jitta Kanneh, Mammy Queen of Makpele Chiefdom, at one of the swamp-rice development 
            livelihoods for peace initiative of the PBF project
        ',
        'imageAuthor' => 'UNDP Taiwan/Jason Smith',
        'classes' => 'cover-image'
    ]);


    View::render('molecules/photo/image-with-caption', [
        'imageSize' => 'small',
        'image' => "$imgPath/article-deepdive-featured-image--small.jpg",
        'caption' => '
            Jitta Kanneh, Mammy Queen of Makpele Chiefdom, at one of the swamp-rice development 
            livelihoods for peace initiative of the PBF project
        ',
        'imageAuthor' => 'UNDP Taiwan/Jason Smith',
        'classes' => 'cover-image'
    ]);
    ?>

    <div data-progress-end></div>

    <?php View::render('organisms/article-cards/related-articles'); ?>
</main>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
