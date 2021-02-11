<?php

use helpers\View;

$imgPath = '../../../assets/images/placeholder/about-us';
?>

<!-- Page Headers -->
<?php View::render('layout/header', ['pageTitle' => 'Project']) ?>

<body>
<!-- Navigation -->
<?php View::render('layout/navigation/main') ?>


<div class="project-page">

    <section class="hero project-hero" data-desktop-image="/assets/images/placeholder/hero/about-image.jpg"
             data-mobile-image="/assets/images/placeholder/hero/hero-about-small.jpg">
        <div class="overlay"></div>
        <div class="grid-container scroll-track left-right delay-1 hero-container">
            <div class="grid-x text-container">
                <div class="cell small-12 large-9 large-offset-1 hero-content">
                    <?php
                    View::render('partials/breadcrumb', [
                        'links' => [
                            ['link' => '#', 'name' => '2030 Agenda For Sustainable Development'],
                            ['link' => '#', 'name' => 'Planet'],
                            ['link' => '#', 'name' => 'Climate Change'],
                        ]
                    ])
                    ?>

                    <div class="text-box scroll-track left-right delay-1">
                        <h3 class="title heading h3">
                            UNDP Projects
                        </h3>
                        <h2 class="subtitle heading h2">
                            United Nations pacific regional anti-corruption project - phase II
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="headline-text">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell large-offset-1 small-offset-1 small-10">
                    <div class="heading h2 heading-text">
                        United Nations Pacific</br>
                        Regional Anti-Corruption Project
                    </div>
                </div>
                <div class="cell large-offset-3 large-7 copy-text small-offset-1 small-10">
                    <div class="big-copy">
                        The United Nations Pacific Regional Anti-Corruption Project is a joint initiative of the United
                        Nations
                        Office on Drugs and Crime and the United Nations Development Programme, a unique partnership to
                        prevent
                        and fight corruption in 14 Pacific Island countries and the territory of Tokelau.</br></br>
                        UN-PRAC aims to strengthen PICs’ national integrity systems. This is to promote ‘clean’
                        governments and create an enabling environment to increase trade, business, investment and
                        sustainable development in the Pacific. In turn, this will enhance the delivery of equitable and
                        high-quality services to all Pacific Islanders.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="featured-callout">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell large-offset-1 large-11 small-10 small-offset-1">
                    <div class="grid-x">
                        <div class="cell large-2">
                            <div class="heading h2"> What</br> We do</div>
                        </div>
                        <div class="cell large-offset-2 large-7 featured-copy">
                            <div class="big-copy">
                                The goal of the project is to promote and strengthen measures to prevent and fight
                                corruption more efficiently and effectively in the Pacific. This aligns with the purpose
                                of the United Nations Convention against Corruption (UNCAC) and contributes to the
                                achievement of Sustainable Development Goal (SDG) 16 on Peace, Justice and Strong
                                Institutions.
                                </br></br>
                                At the end of the project, we expect to achieve the following results:</br></br>
                                <ul>
                                    <li>
                                        PICs more effectively implement UNCAC and work towards the achievement of SDG
                                        16.
                                    </li>
                                    <li>
                                        PICs strengthen broader governance frameworks in line with UNCAC and SDG 16.
                                    </li>
                                    <li>
                                        PICs’ state and non-state actors more effectively engage and partner to prevent
                                        and fight corruption.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="related-table">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell large-offset-1 large-11 small-10 small-offset-1">
                    <div class="heading h2">Related Materials</div>
                </div>
                <div class="cell large-offset-3 large-7 small-10 small-offset-1 link-list big-copy">
                    <div class="link-item">
                        <a href="#"> Country Profiles - outcomes of the Mechanism for the Review of Implementation of
                            the United
                            Nations Convention against Corruption</a>
                    </div>
                    <div class="link-item">
                        <a href="#"> Legislative Guide for the Implementation of UNCAC</a>
                    </div>
                    <div class="link-item">
                        <a href="#">Mechanism for the Review of Implementation of the United Nations Convention against
                            Corruption</a>
                    </div>
                    <div class="link-item">
                        <a href="#">Pacific Youth Anti-Corruption Advocate’s Toolkit</a>
                    </div>
                    <div class="link-item">
                        <a href="#">Technical Guide to the United Nations Convention against Corruption</a>
                    </div>
                    <div class="link-item">
                        <a href="#">Travaux Préparatoires of the negotiations for the elaboration of the United Nations
                            Convention against Corruption</a>
                    </div>
                    <div class="link-item">
                        <a href="#href">United Nations Convention against Corruption (UNCAC)</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="listed-stats">
        <div class="grid-container">
            <div class="grid-x">
                <div class="cell large-offset-1 large-10 small-10 small-offset-1 heading-stats-text">
                    <div class="heading h2">Impact</div>
                </div>
                <div class="cell large-offset-1 large-10 small-10 small-offset-1 heading-stats-items">
                    <div class="grid-x grid-margin-x">
                        <div class="cell medium-2 stat-item-container">
                            <div class="stat-item">
                                <div class="heading-item medium-copy">Status</div>
                                <div class="body-text-item big-copy">Ongoing</div>
                            </div>
                            <div class="stat-item">
                                <div class="heading-item medium-copy">Start date</div>
                                <div class="body-text-item big-copy">2012</div>
                            </div>
                            <div class="stat-item">
                                <div class="heading-item medium-copy">End date</div>
                                <div class="body-text-item big-copy">2022</div>
                            </div>
                            <div class="stat-item">
                                <div class="heading-item medium-copy">End date</div>
                                <div class="body-text-item big-copy">Effective</br>  Governance</div>
                            </div>
                        </div>
                        <div class="cell medium-3 stat-item-container">
                            <div class="stat-item">
                                <div class="heading-item medium-copy">Project Office</div>
                                <div class="body-text-item big-copy">UNDP Pacific Office in Fiji</div>
                            </div>
                            <div class="stat-item">
                                <div class="heading-item medium-copy">Implementing partner</div>
                                <div class="body-text-item big-copy">
                                    United Nations Development </br> Programme</br></br>
                                    United Nations Office on Drugs </br> and Crime
                                </div>
                            </div>
                        </div>
                        <div class="cell medium-4 big-column stat-item-container">
                            <div class="stat-item">
                                <div class="heading-item medium-copy">Donors</div>
                                <div class="body-text-item big-copy">
                                    United Nations Development </br> Programme
                                    </br></br>
                                    Australian Government (DFAT)
                                    </br></br>
                                    New Zealand Aid Programme
                                </div>
                            </div>
                        </div>
                        <div class="cell medium-3 stat-item-container">
                            <div class="stat-item">
                                <div class="heading-item medium-copy">Contribution Amount</div>
                                <div class="body-text-item big-copy">
                                    Phase I, 2012-2016</br>
                                    <p class="blue-link">USD 4,302,968 (DFAT)</p>
                                    </br></br>
                                    Phase II, 2016-2021:
                                    <p class="blue-link">USD 5,359,088 (DFAT)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<!-- Footer -->
<?php View::render('layout/footer'); ?>
<script type="text/javascript" src="/dist/app.js"></script>
</body>
</html>
