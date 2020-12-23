<?php
use helpers\View;
use core\Queries;

$queries = new Queries();
$dataGlobalImpact = $queries->getGlobalImpact();
?>
<section class="global-impact">
    <div class="grid-container heading-container">
        <div class="grid-x grid-margin-x align-center overflow-hidden">
            <hgroup class="cell medium-3  scroll-track left-right delay-1">
                <h2 class="heading h2 light">Global</h2>
                <h2 class="heading h2 light">Impact</h2>
            </hgroup>
            <div class="cell medium-7 scroll-track left-right delay-1">
                <p class="heading h4 light">
                    Our work in sustainable development, governance, and resilience building.
                </p>
            </div>
        </div>
    </div>
    <div class="grid-container full card-container overflow-hidden">
        <div class="grid-x scroll-track left-right delay-2">
            <?php foreach($dataGlobalImpact as $item): ?>
                <div class="cell medium-3">
                    <?php View::render('components/stat-card', [
                        'image' => $item->image,
                        'number' => $item->number,
                        'title' => $item->title,
                        'description' => $item->description
                    ]) ?>
                </div>
                <!--<div class="cell medium-3">-->
                <!--    --><?php //View::render('components/stat-card', [
                //        'image' => '../../assets/images/placeholder/global-2.jpg',
                //        'number' => '20',
                //        'title' => 'Million',
                //        'description' => 'people gained access to financial services'
                //    ]) ?>
                <!--</div>-->
                <!--<div class="cell medium-3">-->
                <!--    --><?php //View::render('components/stat-card', [
                //        'image' => '../../assets/images/placeholder/global-3.jpg',
                //        'number' => '256',
                //        'title' => 'Million',
                //        'description' => 'tonnes of carbon emissions cut'
                //    ]) ?>
                <!--</div>-->
                <!--<div class="cell medium-3">-->
                <!--    --><?php //View::render('components/stat-card', [
                //        'image' => '../../assets/images/placeholder/global-4.jpg',
                //        'number' => '1+',
                //        'title' => 'Million',
                //        'description' => 'invested to strengthen resilience to crises'
                //    ]) ?>
                <!--</div>-->
            <?php endforeach; ?>
        </div>
    </div>
</section>
