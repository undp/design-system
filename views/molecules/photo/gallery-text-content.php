<?php
use helpers\View;
$hasBackground = isset($hasBackground) ?  $hasBackground : false;
?>


<div class="gallery-text-content <?= $hasBackground ? 'with-background' : '' ?> cell medium-6">
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
