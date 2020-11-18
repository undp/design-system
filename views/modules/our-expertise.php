<?php
use helpers\View;
?>
<div class="our-expertise">
    <div class="grid-container">
        <div class="grid-x our-expertise-row">
            <div class="medium-offset-1 medium-5">
                <div class="section-title hide-for-small-only">
                    <h2 class="heading h2">Our</h2>
                    <h2 class="heading h2">
                        Expertise
                    </h2>
                </div>
            </div>
            <div class="cell medium-3">
                <?php
                    View::render('components/expertise-card')
                ?>
            </div>
            <div class="cell medium-3">
                <div class="expertise-image">
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/our-expertise.jpg'
                        ])
                    ?>
                </div>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell medium-3">
                <div class="expertise-image">
                    <?php
                        View::render('components/image-card', [
                            'route' => '/assets/images/placeholder/our-expertise.jpg'
                        ])
                    ?>
                </div>
            </div>
            <div class="cell medium-3">
                <?php
                    View::render('components/expertise-card')
                ?>
            </div>
        </div>
        <div class="grid-x our-expertise-row">
            <div class="cell medium-3 medium-offset-6">
                <?php
                    View::render('components/expertise-card')
                ?>
            </div>
            <div class="cell medium-3">
                <div class="expertise-image">
                    <?php
                        View::render('components/image-card', [
                                'route' => '/assets/images/placeholder/our-expertise.jpg'
                        ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>