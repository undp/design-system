<?php
use helpers\View;
?>
<div class="global-impact">
    <div class="grid-container heading-container">
        <div class="grid-x grid-margin-x align-center">
            <div class="cell medium-3">
                <h2 class="heading h2 light">Global<br/>Impact</h2>
            </div>
            <div class="cell medium-7">
                <p class="heading h4 light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique nisi vel placerat euismod. In hac habitasse platea dictumst</p>
            </div>
        </div>
    </div>
    <div class="grid-container full card-container">
        <div class="grid-x">
            <div class="cell medium-3">
                <?php View::render('components/stat-card') ?>
            </div>
            <div class="cell medium-3">
                <?php View::render('components/stat-card') ?>
            </div>
            <div class="cell medium-3">
                <?php View::render('components/stat-card') ?>
            </div>
            <div class="cell medium-3">
                <?php View::render('components/stat-card') ?>
            </div>
        </div>
    </div>
</div>
