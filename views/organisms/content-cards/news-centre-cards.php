<?php use helpers\View; ?>

<section class="news-centre-cards">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell large-3">
                <div class="select-box" data-select>
                    <div class="options-container" data-select-options>
                        <div class="option">
                            <input type="radio"
                                   class="radio"
                                   id="list-item-1"
                                   name="category">
                            <label for="list-item-1">List item 1</label>
                        </div>
                        <div class="option">
                            <input type="radio"
                                   class="radio"
                                   id="list-item-2"
                                   name="category">
                            <label for="list-item-2">List item 2</label>
                        </div>
                        <div class="option">
                            <input type="radio"
                                   class="radio"
                                   id="list-item-3"
                                   name="category">
                            <label for="list-item-3">List item 3</label>
                        </div>
                    </div>
                    <div class="selected" data-select-open>
                        Category Type
                    </div>
                </div>
            </div>
            <div class="cell large-9 search-results cards-container">
                <div class="grid-x grid-margin-x cards-results">
                    <div class="cell large-4 medium-6 card-item">
                        <?php
                        View::render('molecules/cards/single-content-card-body', [
                            'tag' => 'Content tag',
                            'link' => $_SERVER['REQUEST_URI'],
                            'title' => 'UNDP at the Paris Peace Forum 2020.',
                            'description' => 'Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’.',
                            'cta' => 'Read More'
                        ])
                        ?>
                    </div>
                    <div class="cell large-4 medium-6 card-item">
                        <?php
                        View::render('molecules/cards/single-content-card-accent-color', [
                            'tag' => 'Content tag',
                            'link' => $_SERVER['REQUEST_URI'],
                            'title' => 'UN calls for comprehensive debt standstill in all developing countries.',
                            'cta' => 'Read More',
                            'color' => 'accent-green'
                        ])
                        ?>
                    </div>
                    <div class="cell large-4 medium-6 card-item">
                        <?php
                        View::render('molecules/cards/single-content-card-image', [
                            'tag' => 'Content tag',
                            'link' => $_SERVER['REQUEST_URI'],
                            'title' => 'A vineyard with a storied past receives an injection of new life.',
                            'image' => '/assets/images/placeholder/cards/single-content-card-image.png',
                            'cta' => 'Explore'
                        ])
                        ?>
                    </div>
                    <div class="cell large-4 medium-6 card-item">
                        <?php
                        View::render('molecules/cards/single-content-card-image', [
                            'tag' => 'Content tag',
                            'link' => $_SERVER['REQUEST_URI'],
                            'title' => 'In Costa Rica, rural women grow their own businesses.',
                            'image' => '/assets/images/placeholder/cards/single-content-card-image.png',
                            'cta' => 'Read More'
                        ])
                        ?>
                    </div>
                    <div class="cell large-4 medium-6 card-item">
                        <?php
                        View::render('molecules/cards/single-content-card-body', [
                            'tag' => 'Content tag',
                            'link' => $_SERVER['REQUEST_URI'],
                            'title' => '“We are a forgotten population.”',
                            'description' => 'Using social media to help marginalized groups get HIV services during COVID-19',
                            'cta' => 'Read More'
                        ])
                        ?>
                    </div>
                    <div class="cell large-4 medium-6 card-item">
                        <?php
                        View::render('molecules/cards/single-content-card-accent-color', [
                            'tag' => 'Content tag',
                            'link' => $_SERVER['REQUEST_URI'],
                            'title' => 'UN calls for comprehensive debt standstill in all developing countries.',
                            'cta' => 'Read More',
                            'color' => 'accent-green'
                        ])
                        ?>
                    </div>
                </div>
                <div class="cta-button">
                    <button class="btn blue">
                        View More
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
