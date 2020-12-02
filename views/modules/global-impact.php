<?php
use helpers\View;
?>
<div class="global-impact">
    <div class="grid-container heading-container">
        <div class="grid-x grid-margin-x align-center overflow-hidden">
            <div class="cell medium-3  scroll-track left-right delay-1">
                <h2 class="heading h2 light">Global<br/>Impact</h2>
            </div>
            <div class="cell medium-7  scroll-track right-left delay-1">
                <p class="heading h4 light">
                    Our work in sustainable development, governance, and resilience building.
                </p>
            </div>
        </div>
    </div>
    <div class="grid-container full card-container overflow-hidden">
        <div class="grid-x scroll-track left-right delay-2">
            <div class="cell medium-3">
                <?php View::render('components/stat-card', [
                    'image' => '../../assets/images/placeholder/global-1.jpg',
                    'number' => '31',
                    'title' => 'Million',
                    'description' => 'people had better access to services to tackle poverty'
                ]) ?>
            </div>
            <div class="cell medium-3">
                <?php View::render('components/stat-card', [
                    'image' => '../../assets/images/placeholder/global-2.jpg',
                    'number' => '20',
                    'title' => 'Million',
                    'description' => 'people gained access to financial services'
                ]) ?>
            </div>
            <div class="cell medium-3">
                <?php View::render('components/stat-card', [
                    'image' => '../../assets/images/placeholder/global-3.jpg',
                    'number' => '256',
                    'title' => 'Million',
                    'description' => 'tonnes of carbon emissions cut'
                ]) ?>
            </div>
            <div class="cell medium-3">
                <?php View::render('components/stat-card', [
                    'image' => '../../assets/images/placeholder/global-4.jpg',
                    'number' => '1+',
                    'title' => 'Million',
                    'description' => 'invested to strengthen resilience to crises'
                ]) ?>
            </div>
        </div>
    </div>
</div>
