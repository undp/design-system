<?php use helpers\View; ?>

<section class="recent-news">
    <div class="grid-container">
        <div class="grid-x grid-padding-x lazy-group">
            <div class="cell small-11 small-offset-1 medium-3 scroll-track left-right delay-4">
                <div class="title-container">
                    <hgroup class="section-title">
                        <h2 class="heading h2">
                            Recent
                        </h2>
                        <h2 class="heading h2">
                            News
                        </h2>
                    </hgroup>
                </div>
            </div>
            <div class="cell small-12 medium-8 large-4">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/placeholder/news-1.jpeg',
                        'tag' => 'What we are doing',
                        'title' => 'Migrants essential to post COVID-19 recovery',
                        'description' => "Legal pathways, cheaper remittances, guaranteeing women’s rights could help get people moving again according to new UN research.",
                        'cta' => 'Discover more'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-4">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/placeholder/news-2.jpeg',
                        'tag' => 'News',
                        'title' => 'In Uzbekistan, UN agencies, banks, governments work to rebuild after pandemic',
                        'description' => "Seventeen United Nations agencies and six international financial institutions (IFIs) are working together in Uzbekistan to address COVID-19’s devastating impacts on the Central Asian republic.",
                        'cta' => 'Discover more'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-4">
                <?php
                View::render('components/story-card', [
                    'image' => '/assets/images/placeholder/news-3.png',
                    'tag' => 'What we are doing',
                    'title' => 'UNDP at the Paris Peace Forum 2020',
                    'description' => "Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’ .",
                    'cta' => 'Discover more'
                ])
                ?>
            </div>
            <div class="cell small-12 medium-4 large-3">
                <?php
                View::render('components/story-card', [
                    'size' => 'tall',
                    'image' => '/assets/images/placeholder/news-4.jpeg',
                    'tag' => 'What we are doing',
                    'title' => 'Padma Lakshmi, Alexis Ren and Ronen Rubinstein kick off UN Development Programme’s campaign to raise awareness of growing inequalities caused by COVID-19 and climate change',
                    'description' => "Called Half the World, the campaign is part of the World Is In Our Hands initiative founded by The Krim Group and photographer Justin Wu",
                    'cta' => 'Discover more'
                ])
                ?>
            </div>
            <div class="cell small-12 medium-8 large-5">
                <?php
                View::render('components/story-card', [
                    'size' => 'wide',
                    'image' => '/assets/images/placeholder/news-5.jpeg',
                    'tag' => 'News',
                    'title' => 'Mongolia receives new $23.1 million GCF grant to strengthen climate resilience',
                    'description' => "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population, especially the herder communities of Mongolia."
                ])
                ?>
            </div>
            <div class="cell small-12 medium-4">
                <?php
                View::render('components/story-card', [
                    'image' => '/assets/images/placeholder/news-6.jpeg',
                    'tag' => 'News',
                    'title' => 'Costa Rica receives 54 million dollars for its leadership in conservation and action for climate',
                    'description' => "UNDP and the REDD+ Secretariat supports Costa Rica to develop the proposal to the Green Climate Fund",
                    'cta' => 'Discover more'
                ])
                ?>
            </div>
            <div class="cell small-12 medium-8 large-5">
                <?php
                View::render('components/story-card', [
                    'size' => 'wide',
                    'image' => '/assets/images/placeholder/news-7.jpeg',
                    'tag' => 'News',
                    'title' => 'EIF and UNDP to strengthen cooperation for sustainable finance',
                    'description' => "The United Nations Development Programme (UNDP) and the European Investment Fund (EIF) are joining forces to develop joint initiatives for sustainable finance and the implementation of the Sustainable Development Goals (SDGs)."
                ])
                ?>
            </div>
            <div class="cell small-12 medium-4 large-3">
                <?php
                View::render('components/story-card', [
                    'size' => 'tall',
                    'image' => '/assets/images/placeholder/news-8.jpeg',
                    'tag' => 'Speech',
                    'title' => 'Business and human rights, a global priority',
                    'description' => "Opening remarks delivered by Asako Okai at the virtual event: Business and Human Rights, A Global Priority.",
                    'cta' => 'Discover more'
                ])
                ?>
            </div>
            <div class="cell small-12 medium-4">
                <?php
                View::render('components/story-card', [
                    'image' => '/assets/images/placeholder/news-9.jpeg',
                    'tag' => 'News',
                    'title' => 'UN calls for comprehensive debt standstill in all developing countries',
                    'description' => "Poor and middle-income countries need bold new mechanisms to dig out of crushing debt, sharply worsened by the COVID-19 pandemic.",
                    'cta' => 'Discover more'
                ])
                ?>
            </div>
        </div>
    </div>
</section>
