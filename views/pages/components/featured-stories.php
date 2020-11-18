<?php use helpers\View; ?>

<section class="featured-stories">
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell small-12 medium-4">
                <div class="title-container">
                    <div class="section-title">
                        <h2 class="heading h2">
                            Featured
                        </h2>
                        <h2 class="heading h2">
                            Stories
                        </h2>
                    </div>
                </div>
            </div>
            <div class="cell small-12 medium-4">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-4">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
        </div>
        <div class="grid-x grid-padding-x">
            <div class="cell medium-4 large-8">
                <?php
                    View::render('components/story-card', [
                        'size' => 'large'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-4">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
        </div>
    </div>
</section>