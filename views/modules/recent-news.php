<?php use helpers\View; ?>

<section class="recent-news">
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell small-12 medium-4">
                <div class="title-container">
                    <div class="section-title">
                        <h2 class="heading h2">
                            Recent
                        </h2>
                        <h2 class="heading h2">
                            News
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
            <div class="cell medium-8 large-8">
                <?php
                    View::render('components/story-card', [
                        'size' => 'large',
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
            <div class="cell small-12 medium-4">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-5">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-3">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
        </div>
        <div class="grid-x grid-padding-x">
            <div class="cell small-12 medium-3">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-3">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-3">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
            <div class="cell small-12 medium-3">
                <?php
                    View::render('components/story-card', [
                        'image' => '/assets/images/featured-stories.png'
                    ])
                ?>
            </div>
        </div>

    </div>
</section>