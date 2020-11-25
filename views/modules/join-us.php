<?php
use helpers\View;
?>
<div class="join-us">
    <div class="grid-container">
        <div class="grid-x">
            <div class="cell medium-6 medium-offset-1 scroll-track left-right delay-2">
                <h2 class="heading h2">
                    Trusted partnerships
                </h2>
                <p class="big-copy">
                    Partnership is at the heart of everything UNDP does. We offer a nearly universal presence across the world. We are determined to mobilize the means to implement the 2030 Agenda through a revitalized Global Partnership for Sustainable Development, with a focus on the poorest and most vulnerable.
                </p>
                <button class="btn">
                    Join Us
                    <?=  file_get_contents("assets/images/arrows/btn-arrow-blue.svg");  ?>
                </button>
            </div>
            <div class="cell medium-3 medium-offset-2 scroll-track right-left delay-2">
                <?php View::render('components/image-card') ?>
            </div>
        </div>
    </div>
</div>
