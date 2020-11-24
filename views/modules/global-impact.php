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
                <p class="heading h4 light">
                    Our work in sustainable development, governance, and resilience building.
                </p>
            </div>
        </div>
    </div>
    <div class="grid-container full card-container">
        <div class="grid-x">
            <div class="cell medium-3">
                <?php View::render('components/stat-card', [
                    'number' => '31',
                    'title' => 'Million',
                    'description' => 'people had better access to services to tackle poverty'
                ]) ?>
            </div>
            <div class="cell medium-3">
                <?php View::render('components/stat-card', [
                    'number' => '20',
                    'title' => 'Million',
                    'description' => 'people gained access to financial services'
                ]) ?>
            </div>
            <div class="cell medium-3">
                <?php View::render('components/stat-card', [
                    'number' => '256',
                    'title' => 'Million',
                    'description' => 'tonnes of carbon emissions cut'
                ]) ?>
            </div>
            <div class="cell medium-3">
                <?php View::render('components/stat-card', [
                    'number' => '1+',
                    'title' => 'Million',
                    'description' => 'invested to strengthen resilience to crises'
                ]) ?>
            </div>
        </div>
    </div>
</div>
