<?php use helpers\View; ?>

<section class="featured-stories">
    <div class="grid-container">
        <div class="grid-x grid-padding-x overflow-hidden lazy-group">
            <div class="cell small-11 small-offset-1 medium-3 medium-offset-1 scroll-track left-right delay-4">
                <div class="title-container">
                    <hgroup class="section-title">
                        <h2 class="heading h2">
                            Local<br/>
                            Featured<br/>
                            Stories
                        </h2>
                    </hgroup>
                </div>
            </div>
            <div class="cell small-12 medium-4 overflow-hidden">
                <?php
                View::render('molecules/cards/article-card', [
                    'colorClass' => 'green',
                    'tag' => 'Sucess Story',
                    'title' => 'Communities score joint UNDP-WFP supported Peacebuilding Fund Project 80%',
                    'description' => 'Building peace and livelihoods to achieve and sustain development.',
                    'cta' => 'Read more'
                ])
                ?>
            </div>
            <div class="cell small-12 medium-4 overflow-hidden">
                <?php
                View::render('molecules/cards/article-card', [
                    'colorClass' => 'green',
                    'tag' => 'Publication',
                    'title' => 'Sierra Leone COVID-19: United Nations Socio-economic Response Plan Response',
                    'description' => 'A UN country plan to help position Sierra Leone on a surer path towards attaining sustainable development in the wake of COVID-19',
                    'cta' => 'Download'
                ])
                ?>
            </div>
            <div class="cell medium-8 large-8">
                <?php
                View::render('molecules/cards/article-card', [
                    'size' => 'large',
                    'colorClass' => 'green',
                    'tag' => 'Article',
                    'title' => '72 small arms destroyed by rural communities in Sierra Leone with support from the ‘Weapons for Development’ Initiative',
                    'description' => 'The Weapons for Development initiative - OCWAR-T project is an ECOWAS project co-funded by the EU and the GFFO',
                    'cta' => 'Read more'
                ])
                ?>
            </div>
            <div class="cell small-12 medium-4 overflow-hidden">
                <?php
                View::render('molecules/cards/article-card', [
                    'colorClass' => 'green',
                    'tag' => 'COVID-19 Response',
                    'title' => 'UNDP Supports Joint Border Simulation Exercise to Promote Safe Trade for Women on Sierra Leone/Liberia',
                    'description' => "As we ‘come to our feet’ to respond to public health issues at the borders, key messages on Covid-19 should be reinforced, border security enhanced",
                    'cta' => 'Read more'
                ])
                ?>
            </div>
            <div class="cell small-12 medium-4 large-3 overflow-hidden">
                <?php
                View::render('molecules/cards/article-card', [
                    'size' => 'tall',
                    'colorClass' => 'green',
                    'tag' => 'Content Tag',
                    'title' => 'Sierra Leone National Human Development Report 2019',
                    'description' => "“Even in the face of several human tragedies and financial resource constraints, Sierra Leone has demonstrated resilience that",
                    'cta' => 'Read more'
                ])
                ?>
            </div>
            <div class="cell small-12 medium-4 large-3 overflow-hidden">
                <?php
                View::render('molecules/cards/article-card', [
                    'size' => 'tall',
                    'colorClass' => 'green',
                    'tag' => 'Content Tag',
                    'image' => "../../../assets/images/placeholder/article-deepdive/article-deepdive-featured-image.png",
                    'title' => 'Sierra Leone National Human Development Report 2019',
                    'description' => "“Even in the face of several human tragedies and financial resource constraints, Sierra Leone has demonstrated resilience that",
                    'cta' => 'Read more'
                ])
                ?>
            </div>
        </div>
    </div>
</section>
