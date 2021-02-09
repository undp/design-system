<?php
use helpers\Svg;
use helpers\View;
?>

<div class="side-content cell small-12 large-9">

    <div class="content-wrapper grid-container scroll-track left-right delay-2">
        <div class="grid-x">
            <div class="cell">
                <h2 class="heading h2">Climate Change</h2>
                <p class="big-copy">
                    Tackling climate change is critical to a sustainable future. We must halve emissions by 2030, and
                    transition to carbon-neutral economies by 2050, if we are to prevent irreversible runaway climate change.
                    People’s lives and livelihoods around the world are threatened by food and water scarcity, extreme weather
                    events and climate-change induced displacement. The annual average economic losses from climate-related
                    disasters are in hundreds of billions of dollars.
                </p>

                <?php View::render('organisms/carousel/standard-page-slider') ?>

                <p class="big-copy">
                    Sustainable Development Goal 13 on climate action aims to materialize the pledges made by developed
                    countries to mobilize US$100 billion annually by 2020, from all sources to address the needs of developing
                    countries to both adapt to climate change impacts and invest in development pathways that lead to net-zero
                    emissions by 2050. The scientific community is urging to keep global mean temperature increase to 1.5° C.
                    Meeting this urgent and ambitious target will require collective action, along with strong political will,
                    technology and increased investment.
                </p>
                <p class="big-copy">
                    UNDP works with countries to turn their climate goals into action. At the heart of this, UNDP’s support
                    for designing and delivering ambitious climate plans, or <a href="#">Nationally Determined Contributions (NDCs)</a>,
                    pave the way towards a more sustainable and prosperous world for all. UNDP’s climate <a href="#">adaptation</a> and
                    <a href="#">mitigation</a> portfolio supports over 140 countries—we help to integrate climate risks into national and
                    sub-national development planning, and at the same time provide long-term support to countries to take
                    actions on the ground in the pursuit of carbon-neutral and sustainable economies, that are also resilient
                    to climate change impacts. This involves the sequestration, or removal of greenhouse gases already in the
                    atmosphere, through the conservation and sustainable management of forests — a key aspect of UNDP’s climate
                    change mitigation portfolio.
                </p>
            </div>
        </div>
    </div>

    <div class="explore-more grid-container scroll-track left-right delay-2" data-view-more data-scroll-up>
        <div class="grid-x">
            <div class="cell">
                <h2 class="heading h2">Explore More</h2>

                <?php View::render('partials/standard-page/explore-more-cards') ?>

                <div class="cta-button flex-container">
                    <button class="btn blue view-more" data-view-more-btn>
                        View More
                    </button>
                </div>

                <div class="scroll-up" data-scroll-btn>
                    <?php Svg::render('angle-right') ?>
                </div>
            </div>
        </div>
    </div>
</div>
