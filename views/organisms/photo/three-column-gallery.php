<?php
use helpers\View;
$imagePath = '/assets/images/placeholder'
?>


<section class="three-column-gallery">
    <div class="grid-container grid-x grid-margin-x">
        <div class="cell scroll-track left-right delay-1 hide-for-medium">
            <h3 class="heading h3">UNDP Hope</h3>
        </div>

        <div class="gallery-text-content cell medium-4 large-3">
            <div class="scroll-track left-right delay-1">
                <h3 class="heading h3 show-for-medium">UNDP Hope</h3>

                <p class="copy">
                    UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty,
                    and the reduction of inequalities and exclusion. We help countries to develop policies, leadership
                    skills, partnering abilities, institutional capabilities and build resilience in order to sustain
                    development results.
                </p>

                <div class="cta">
                    <?php
                        View::render('molecules/text-links/cta-text-link', [
                            'text' => 'Read More',
                            'arrowClass' => 'arrow-2'
                        ]);
                    ?>
                </div>
            </div>
        </div>

        <div class="cell medium-8 large-9">
            <?php View::render('molecules/galleries/triple-column-gallery'); ?>
        </div>
    </div>
</section>
