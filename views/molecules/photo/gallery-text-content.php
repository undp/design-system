<?php $hasBackground = isset($hasBackground) ?  $hasBackground : false; ?>


<div class="gallery-text-content <?= $hasBackground ? 'with-background' : '' ?> cell medium-6">
    <div class="scroll-track left-right delay-1">
        <h3 class="heading h3 show-for-medium">UNDP Hope</h3>

        <p class="medium-copy">
            UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty,
            and the reduction of inequalities and exclusion. We help countries to develop policies, leadership
            skills, partnering abilities, institutional capabilities and build resilience in order to sustain
            development results.
        </p>

        <div class="cta">
            <a href="#" class="text-link arrow-2">
                <span>Read More</span>
                <?=  file_get_contents("assets/images/arrows/btn-arrow-red-secondary.svg");  ?>
            </a>
        </div>
    </div>
</div>
